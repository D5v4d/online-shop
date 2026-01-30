'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/features/store/authStore';
import LoginPages from '@/pages/auth/components/LoginPages';

export default function Page() {
  const { user } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (user?.accessToken) {
      router.replace('/'); // если пользователь залогинен → редирект на главную
    }
  }, [user, router]);

  // Пока проверяем токен, ничего не рендерим
  if (user?.accessToken) return null;

  return (
      <LoginPages />
  );
}
