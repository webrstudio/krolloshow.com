import Link from 'next/link';
import styles from './styles.module.css'
import { Container, Title, GridContainer, ProductCard } from '@/components';

export const Products = () => {
  return (
    <Container>
      <Title title="Conoce nuestra línea de productos" />
      <GridContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </GridContainer>
      <div className={styles.linkToStoreWrapper}>
      <Link href='/tienda'>
        Ver todos
      </Link>
      </div>
    </Container>
  );
};
