import { Jumbotron } from "./components/home";

export default function Home() {
  return (
    <main>
      <Jumbotron />
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
