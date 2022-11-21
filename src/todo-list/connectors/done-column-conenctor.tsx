import { useStoreMap } from "effector-react";
import { $tasks } from "../model";
import { Column } from "../ui/organisms";

export const DoneColumnConnector = () => {
  const tasks = useStoreMap($tasks, (state) =>
    state.filter((task) => task.status === "done")
  );

  const handleTaskClick = () => null;

  return <Column onClick={handleTaskClick} tasks={tasks} />;
};
