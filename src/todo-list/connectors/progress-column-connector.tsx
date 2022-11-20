import { TTask } from "../types";
import { Column } from "../ui/organisms";

export const ProgressColumnConnector = () => {
  const tasks: TTask[] = []; //filter items by progress

  const handleTaskClick = () => null;

  return <Column onClick={handleTaskClick} tasks={tasks} />;
};
