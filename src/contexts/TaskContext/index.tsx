import { createContext, useContext, useState } from "react";
import type { TaskStateModel } from "../../models/TaskstateModel";
import { initialTaskState } from "./initialTaskstate";

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TaskContextProviderProps = {
  children: React.ReactNode;
};
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);
  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
