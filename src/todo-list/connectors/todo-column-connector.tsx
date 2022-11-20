import { TTask } from "../types";
import { Column } from "../ui/organisms";

export const TodoColumnConnector = () => {
  const tasks: TTask[] = [
    {
      id: "KODE-2",
      description: "Определиться с темой, накидать драфт, скинуть на ревью",
      status: "todo",
      title: "Подготовить доклад на Habr",
      userId: null,
    },
    {
      id: "KODE-3",
      description: "Найти людей, съевших печеньки",
      status: "todo",
      title: "[BUG] Пропали печеньки в офисе",
      userId: null,
    },
  ]; //filter items by todo

  const handleTaskClick = () => null;

  return <Column onClick={handleTaskClick} tasks={tasks} />;
};
