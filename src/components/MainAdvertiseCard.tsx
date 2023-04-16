import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import styles from 'styles/MainAdvertiseCard.module.css';

interface IMainAdvertiseyCard {
    image: StaticImageData;
}

const MainAdvertiseCard = ({ image }: IMainAdvertiseyCard) => {
    return (
        <div className={styles.card}>
            <Image
                src={image}
                alt={'advertise-image'}
                className={styles.image}
                placeholder="blur"
            />
            {/* <Link href={`/${name.replace(' ', '-').toLowerCase()}`}>
                <div className={styles.info}>
                    <h3>{name}</h3>
                    <div />
                    <p>{description}</p>
                </div>
            </Link> */}
        </div>
    );
};

export default MainAdvertiseCard;
