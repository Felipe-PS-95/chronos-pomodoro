import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  console.log("Oi");

  return (
    <>
      <Heading attr={123} attr2="String">
        Olá Mundo 1
      </Heading>
      <Heading>Olá Mundo 2</Heading>
      <Heading>Olá Mundo 3</Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
        repellat, odio dicta deserunt aliquid sequi consectetur unde modi iusto
        inventore maxime sapiente aspernatur nulla voluptas sed. Error
        reprehenderit libero beatae?
      </p>
    </>
  );
}
