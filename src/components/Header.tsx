import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from 'react-redux';
import { ReducerType } from 'states/cart_slice';

import ProductType from 'types/product-type';
import InstargramIcon from 'assets/icon/Instargram.svg';
import CustomerIcon from 'assets/icon/Customer.svg';
import favoriteIcon from 'assets/icon/Heart.svg';
import cartIcon from 'assets/icon/Cart.svg';
import myIcon from 'assets/icon/My.svg';
import loginIcon from 'assets/icon/Login.svg';
import styles from 'styles/Header.module.css';
import { useRouter } from 'next/router'


const Header = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [auth, setAuth] = useState<boolean>(false);
  // const [login, setlogin] = useState<string>("login");
  // const [open, setOpen] = useState<boolean>(false);
  // const close = () => setOpen(false);

  useEffect(() => {
    if (status === "authenticated") setAuth(true)
  }, [status]);

  // useEffect(() => {
  //   if (session) setAuth(true)
  // }, [session]);

  const cart = useSelector<ReducerType, ProductType[]>(
    (state: any) => state.cart
  );

  const getItemsCount = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + (item.quantity ?? 0),
      0
    );
  };

  return (
    <header className={styles.title}>
      <Link legacyBehavior href="/">
        <a className={styles.brand}>
          <h1>Atelier</h1>
        </a>
      </Link>
      <ul className={styles.list}>
        <li>
          <span>
            <Image src={InstargramIcon} alt={'instargram'} width={24} height={24} />
          </span>
          instargram</li>
        <li>
          <span>
            <Image src={CustomerIcon} alt={'customer'} width={24} height={24} />
          </span>
          customer</li>
        <li className={styles.navlink}>
          <Image src={favoriteIcon} alt={'favorite'} width={24} height={24} />like
        </li>
        <li className={styles.navlink}>
          <Link legacyBehavior href="/cart">
            <span>
              <Image src={cartIcon} alt={'cart'} width={24} height={24} /> (
              {getItemsCount()})
            </span>
          </Link>
        </li>
        <li>
          <span>
            <Image src={myIcon} alt={'my'} width={24} height={24} />
          </span>
          my</li>
        <li >
          <a onClick={() => auth ? signOut() : signIn()}>
            <span>
              <Image src={loginIcon} alt={auth ? "logout" : "login"} width={24} height={24} />
            </span>
            {auth ? "logout" : "login"}
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
