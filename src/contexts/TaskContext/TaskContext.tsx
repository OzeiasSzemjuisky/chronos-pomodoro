import type { TaskStateModel } from "../../models/TaskstateModel";

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};
