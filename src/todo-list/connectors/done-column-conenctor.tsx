import { TTask } from "../types";
import { Column } from "../ui/organisms";

export const DoneColumnConnector = () => {
  const tasks: TTask[] = [
    {
      id: "KODE-1",
      title: "Провести собес",
      description: "Спросить знания о JS, React",
      userId: "vs",
      status: "done",
    },
  ]; //filter items by done

  const handleTaskClick = () => null;

  return <Column onClick={handleTaskClick} tasks={tasks} />;
};
