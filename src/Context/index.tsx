import { createContext } from "react";

export const taskContext = createContext({
  chave: "123", //valor Inicial so pra leitura caso nao seja usado,OnlyRead
});
