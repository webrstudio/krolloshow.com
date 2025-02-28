'use client'
import { useFetch } from "@/hooks";
import { Container, Title, GridContainer, ProductCard } from "@/components";

export const Products = () => {
  const {error, data}= useFetch({
    url:'http://localhost/k-rollo-tienda/controllers/products/getAllProducts/index.php'
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
