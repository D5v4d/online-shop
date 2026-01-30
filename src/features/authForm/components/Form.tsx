'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../validation/helper';
import styles from '../style/form.module.scss';
import { useStore } from '@/features/store/authStore';
import { useRouter } from 'next/navigation';
import Loader from './Loader';

type LoginForm = {
  username: string;
  password: string;
};

export const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const { login, isLoading } = useStore();

  const onSubmit = async (data: LoginForm) => {
    await login(data.username, data.password);
    router.push('/');
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <div className={styles.inputConteiner}>
            <div className={styles.inputWrapper}>
              <input className={styles.input} {...register('username')} placeholder="Username" />
              {errors.username && <p className={styles.error}>{errors.username.message}</p>}
            </div>
            <div className={styles.inputWrapper}>
              <input className={styles.input} type="password" {...register('password')} placeholder="Password" />
              {errors.password && <p className={styles.error}>{errors.password.message}</p>}
            </div>
          </div>
          <button disabled={!!errors.username || !!errors.password} className={styles.btn} type="submit">
            Login
          </button>
        </form>
      </div>
      {isLoading && <Loader />}
    </>
  );
};
