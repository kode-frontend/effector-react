import { createStore } from "effector";
import { TTask } from "../types";

export const $tasks = createStore<TTask[]>([
  {
    id: "KODE-1",
    title: "Провести собес",
    description: "Спросить знания о JS, React",
    userId: "vs",
    status: "done",
  },
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
]);
