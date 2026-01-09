import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  console.log("Oi");

  return (
    <>
      <Heading>
        Olá Mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
        repellat, odio dicta deserunt aliquid sequi consectetur unde modi iusto
        inventore maxime sapiente aspernatur nulla voluptas sed. Error
        reprehenderit libero beatae?
      </p>
    </>
  );
}
