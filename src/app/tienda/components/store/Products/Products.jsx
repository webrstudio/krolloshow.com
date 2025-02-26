import { Container, Title, GridContainer, ProductCard } from "@/components";

export const Products = () => {
  return (
    <Container>
      <Title title="Productos oficiales de KROLLOSHOW" />
      <GridContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </GridContainer>
    </Container>
  );
};
