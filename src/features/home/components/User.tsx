'use client';
import Link from 'next/link';
import { useStore } from '@/features/store/authStore';
import style from '../style/user.module.scss';

export const User = () => {
  const { user, clearUser } = useStore();


  return (
    <div className={style.user}>
      <p>{user?.firstName}</p>
      <p>{user?.lastName}</p>
      <button onClick={clearUser}>
        <Link href="/login">Logout</Link>
      </button>
    </div>
  );
};
