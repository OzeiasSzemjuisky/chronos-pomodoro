import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import styles from "./styles.module.css";

export function CountDown() {
  const { state } = useTaskContext(); //desestrutaralizzzacao di obj

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
