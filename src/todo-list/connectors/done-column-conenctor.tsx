import { useStoreMap } from "effector-react";
import { $tasks, editTask } from "../model";
import { Column } from "../ui/organisms";

export const DoneColumnConnector = () => {
  const tasks = useStoreMap($tasks, (state) =>
    state.filter((task) => task.status === "done")
  );

  return <Column onClick={editTask} tasks={tasks} />;
};
