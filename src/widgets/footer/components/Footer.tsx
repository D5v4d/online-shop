'use client';

import { useStore } from '@/features/store/authStore';
import styles from '../style/footer.module.scss';

export const Footer = () => {
  const { user } = useStore();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>© {year}</span>
        {user?.email && <span> — Logged as {user.email}</span>}
      </div>
    </footer>
  );
};
