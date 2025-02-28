'use client'
import { useFetch } from "@/hooks";
import { Container, Title, GridContainer, ProductCard } from "@/components";

export const Products = () => {
  const {error, data}= useFetch({
    url:'https://test.webrstudio.com/backend/controllers/products/getAllProducts'
  })
  return (
    <Container>
      <Title title="Productos oficiales de KROLLOSHOW" />
      <GridContainer>
        {
          !data ? null
          :
          data.map((product)=>(
            <ProductCard
              key={product.producto_id}
              product={product}/>
          ))
        }
      </GridContainer>
    </Container>
  );
};
