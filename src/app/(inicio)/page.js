import { Jumbotron, Products } from "./components/home";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <Products />
    </main>
  );
}

export const metadata = {
  title: "KROLLOSHOW - INICIO",
  description: "KROLLOSHOW",
  icons: {
    icon: "/assets/images/krollo-logo.jpg",
  },
};
