import { Container, Title } from "@/components";
import { CartProducts } from "./components/cart";

export default function ShoppingCart(){
    return (
        <Container>
            <Title title='Carrito de compras' />
            <CartProducts />
        </Container>
    )
}
export const metadata = {
    title: "KROLLOSHOW - CARRITO",
    description: "KROLLOSHOW",
    icons: {
      icon: "/assets/images/krollo-logo.jpg",
    },
  };