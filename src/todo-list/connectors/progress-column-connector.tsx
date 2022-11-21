import { useStoreMap } from "effector-react";
import { $tasks, editTask } from "../model";
import { Column } from "../ui/organisms";

export const ProgressColumnConnector = () => {
  const tasks = useStoreMap($tasks, (state) =>
    state.filter((task) => task.status === "progress")
  );

  return <Column onClick={editTask} tasks={tasks} />;
};
