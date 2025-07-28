import { Container } from "./components/Container";
import { Menu } from "./components/Menu";
import { Logo } from "./components/Logo";
import { CountDown } from "./components/CountDown";

import "./assets/styles/theme.css";
import "./assets/styles/global.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <label htmlFor="meuInput">task</label>
            <input id="meuInput" type="text" />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="formRow">
            <p>Ciclos</p>
            <p> 0 0 0 0 0 0</p>
          </div>
          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
