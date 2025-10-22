import { useState } from "react";
import { Home } from "./pages/Home";

import "./styles/theme.css";

import "./styles/global.css";
import type { TaskStateModel } from "./models/TaskstateModel";
import { taskContext } from "./Context";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: " 00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};
export function App() {
  const [state, setState] = useState(initialState);
  return ( <TaskContext.provider value ="{{MudandoOValor: valorAlterado}}>
    <Home/>
  </TaskContext.provider>);
}
