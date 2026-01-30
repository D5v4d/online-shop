'use client';

import Link from 'next/link';
import styles from '../style/Header.module.scss';
import { useEffect } from 'react';
import { useStore } from '@/features/store/authStore';
import { User } from '@/features/home/components/User';

export const Header = () => {
   const {user, setUser } = useStore();

  useEffect(() => {
    const storedUser = localStorage.getItem('User');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.contactInfo}>
          <span>+021-95-51-84</span>
          <span>shop@abelohost.com</span>
          <span>1734 Stonecoal Road</span>
        </div>
        <div className={styles.login}>{user?.accessToken ? <User /> : <Link href="/login">Login</Link>}</div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.logo}>Abelohost Shop.</div>
        <div className={styles.placeholder}>placeholder</div>
      </div>

      <nav className={styles.navMenu}>
        <ul className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="#">Hot Deals</Link>
          <Link href="#">Categories</Link>
          <Link href="#">Laptops</Link>
          <Link href="#">Smartphones</Link>
          <Link href="#">Cameras</Link>
          <Link href="#">Accessories</Link>
        </ul>
      </nav>
    </header>
  );
};
