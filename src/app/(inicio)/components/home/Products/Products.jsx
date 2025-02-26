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
      <a href='/'>
        Ver todos
      </a>
      </div>
    </Container>
  );
};
