import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButtom";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();
  // const [taskName, setTaskName] = useState(""); para quando tiver que ser em tempo real
  const taskNameInput = useRef<HTMLInputElement>(null); // sem atualizacao em tempo real

  const nextCycle = getNextCycle(state.currentCycle); // Meio que a atualizacao esta sendo feita entre as renderizacoes , porque pega o ciclo atual, mas o proximo so vem com  o envio do form
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;
    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("digite o nome da tarefa");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining, //como as chaves sao iguais, o valor ja esta inbutido
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        task: [...prevState.tasks, newTask], //pegando o array passado porquenao se deve alterar o valor diretamente
      };
    });
  }
  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="meuInput"
          type="text"
          placeholder="Digite algo"
          //value={taskName}
          //onChange={(e) => setTaskName(e.target.value)}
          ref={taskNameInput}
        />
      </div>

      <div className="formRow">
        <p>O proximo dencaso em 25 Min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
