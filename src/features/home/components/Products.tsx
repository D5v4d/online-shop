'use client';
import Image from 'next/image';
import style from '../style/products.module.scss';
import { useStore as useProductStore } from '@/features/store/productsStore';
import { useStore as useAuthStore } from '@/features/store/authStore';
import { useEffect } from 'react';

export const Products = () => {
  const { products, getProducts } = useProductStore();
  const { user } = useAuthStore();

  useEffect(() => {
    console.log(user)
    getProducts();
  }, [getProducts, user]);

  return (
    <div className={style.productContainer}>
      <h1 className={style.sectionTitle}>Latest Products</h1>
      <div className={style.productList}>
        {products.map(product => (
          <div key={product.id} className={style.productCard}>
            <div className={style.productImage}>
              <Image src={product.thumbnail} alt={product.title} width={300} height={300} loading="lazy" />
            </div>
            <div className={style.productInfo}>
              <h3 className={style.productName}>{product.title}</h3>
              <span className={style.productCategory}>{product.category}</span>
              <span className={style.productPrice}>${product.price}</span>
              <div className={style.productBuy}>
                {user && <button>Add to cart</button>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
