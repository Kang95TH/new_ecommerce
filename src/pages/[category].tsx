import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import { useEffect, useState } from 'react';

import { getProductsByCategory } from 'pages/api/products/[category]';
import { getProductsItemByCategory } from 'pages/api/items/item';
import ProductCard from 'components/ProductCard';
import ProductsType from 'types/products-type';
import { sortByPriceAscending, sortByPriceDescending } from '../util/filter';
import styles from 'styles/ProductPage.module.css';

const CategoryPage = ({ products }: ProductsType) => {
  const router = useRouter();
  const [productItems, setProductItems] = useState(products);
  const [isSorting, setIsSorting] = useState({ down: true, up: false });
  const category = router.query.category?.toString();

  useEffect(() => {
    if (isSorting.down) {
      const items = sortByPriceDescending(productItems);
      setProductItems(items);
    }
    if (isSorting.up) {
      const items = sortByPriceAscending(productItems);
      setProductItems(items);
    }
  }, [isSorting.up, isSorting.down]);

  useEffect(() => {
    setProductItems(products)
  }, [products]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category?.split('-').join(' ')}</h1>
      <ul className={styles.filter}>
        <li
          className={isSorting.down ? styles.active : styles.inactive}
          onClick={() => setIsSorting({ down: true, up: false })}
        >
          낮은 가격
        </li>
        <li
          className={isSorting.up ? styles.active : styles.inactive}
          onClick={() => setIsSorting({ down: false, up: true })}
        >
          높은 가격
        </li>
      </ul>
      <div className={styles.cards}>
        {productItems && productItems.map((product) => (
          <a key={product.id} href={`product/${product.id}`}>
            <ProductCard key={product.id} product={product} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx: NextPageContext) {

  const category = ctx.query.category;
  //
  const products = await getProductsItemByCategory(category);
  // const products = await getProductsByCategory(category);
  //

  return { props: { products } };
}