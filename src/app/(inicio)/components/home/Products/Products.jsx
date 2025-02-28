'use client'
import Link from 'next/link';
import { useFetch } from '@/hooks';
import styles from './styles.module.css'
import { Container, Title, GridContainer, ProductCard } from '@/components';

export const Products = () => {
  const {error, data} = useFetch({url:'http://localhost/k-rollo-tienda/controllers/products/getAllProducts/index.php'})
  return (
    <Container>
      <Title title="Conoce nuestra línea de productos" />
      <GridContainer>
        {
          !data ? null
          :
          data.map((product)=>(
            <ProductCard
              product={product}
              key={product.producto_id}
            />
          ))
        }
      </GridContainer>
      <div className={styles.linkToStoreWrapper}>
      <Link href='/tienda'>
        Ver todos
      </Link>
      </div>
    </Container>
  );
};
