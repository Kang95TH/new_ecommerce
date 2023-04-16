import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { getProducts } from 'pages/api/products';
import { addToCart } from 'states/cart_slice';
import styles from 'styles/Product.module.css';
import ProductType from 'types/product-type';

const Product = () => {
  const dispatch = useDispatch();
  const products = getProducts();
  const { query } = useRouter();

  const productItem = products.find(
    (product) => String(product.id) === query.slug
  );

  const imgItem = () => {
    const findId = products.find(
      (product) => String(product.id) === query.slug
    );
    let typeItem!: ProductType
    if (findId == undefined) return typeItem
    else return findId
  }


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image className={styles.mainImage} src={imgItem()?.src} alt={'detail-image'} width={'100'}
          height={'100'} />
        <div>
          <p className={styles.shipping}>
            {productItem?.freeShipping ? '무료배송' : '유료배송'}
          </p>
          <h3 className={styles.title}>{productItem?.product}</h3>
          <p className={styles.discount}>
            <span>50%</span>
            <span>{productItem && productItem.price * 2}</span>
          </p>
          <p className={styles.price}>
            {productItem?.price.toLocaleString('ko-KR')} 원
          </p>
          <button className={styles.promote}>
            💸 회원가입을 하시면 5% 할인해드려요!
          </button>
          <div className={styles.buttons}>
            <button
              onClick={() => productItem && dispatch(addToCart(productItem))}
            >
              장바구니 담기
            </button>
            <button>바로 구매하기</button>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <ul>
          <li>상품 정보</li>
          <li>리뷰</li>
          <li>문의</li>
          <li>배송/환불</li>
        </ul>
        <div>
          <p>죄송합니다.</p>
          <span>상품이미지가 준비되지 않았습니다.</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
