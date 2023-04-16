import Image, { StaticImageData } from 'next/image';

import ProductType from 'types/product-type';
// import image from 'assets/image/new_574_navy.jpeg';
import styles from 'styles/ProductCard.module.css';

interface IProductCard {
  product: ProductType;
}

const ProductCard = ({ product }: IProductCard) => {

  return (
    <div className={styles.card}>
      <Image
        src={product.src}
        alt={'product-image'}
        width={'100'}
        height={'100'}
      // placeholder={'blur'}
      />
      <p className={styles.shipping}>
        {product.freeShipping ? '무료배송' : '유료배송'}
      </p>
      <h4 className={styles.title}>{product.product}</h4>
      <p className={styles.price}>
        <span>50%</span>
        <span>{product.price.toLocaleString('ko-KR')}</span>
      </p>
    </div>
  );
};

export default ProductCard;
