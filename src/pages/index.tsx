import AdvertiseCard from 'components/MainAdvertiseCard';
import CategoryCard from 'components/CategoryCard';
import advertisement from 'assets/image/mainadvertise.png';
import category1 from 'assets/image/category_new.jpeg';
import category2 from 'assets/image/category_women.png';
import category3 from 'assets/image/category_men.png';
import category4 from 'assets/image/category_kid.jpeg';
import category5 from 'assets/image/category_sale.png';
import category6 from 'assets/image/category_incomming.png';
import styles from 'styles/Home.module.css';

const HomePage = () => {
  return (
    <div>
      <div className={styles.advertisement}>
        <AdvertiseCard
          image={advertisement}
        />
      </div>
      <main className={styles.container}>
        <div className={styles.spanningCol}>
          <CategoryCard
            image={category1}
            name="New_Releases"
            description="2023년 신상품"
          />
        </div>
        <div className={styles.box2}>
          <CategoryCard image={category3} name="Men" description="남성 상품" />
        </div>
        <div className={styles.box3}>
          <CategoryCard image={category2} name="Women" description="여성 상품" />
        </div>
        <div className={styles.box4}>
          <CategoryCard image={category4} name="Kids" description="어린이 상품" />
        </div>
        <div className={styles.spanningRow}>
          <CategoryCard image={category5} name="Sale" description="세일 살품" />
        </div>
        <div className={styles.box5}>
          <CategoryCard image={category6} name="Upcoming" description="준비 중" />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
