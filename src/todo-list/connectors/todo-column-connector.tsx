import { useStoreMap } from "effector-react";
import { $tasks, editTask } from "../model";
import { Column } from "../ui/organisms";

export const TodoColumnConnector = () => {
  const tasks = useStoreMap($tasks, (state) =>
    state.filter((task) => task.status === "todo")
  );

  return <Column onClick={editTask} tasks={tasks} />;
};
