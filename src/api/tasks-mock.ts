import { TTask } from "../todo-list/types";

export const tasksMockData: TTask[] = [
  {
    id: "KODE-1",
    description: "Обсудить бизнес-требования",
    status: "todo",
    userId: "vs",
    title: "Созвониться с заказчиком",
  },
  {
    id: "KODE-2",
    description: "Зайти в столовку, найти самые вкусные печеньки",
    status: "progress",
    userId: "ina",
    title: "Съесть печенек",
  },
  {
    id: "KODE-3",
    status: "done",
    userId: "pn",
    title: "Выпить смузи",
  },
  {
    id: "KODE-4",
    description: "И победить!",
    status: "done",
    userId: "ku",
    title: "Поучавствовать в турнире по кикеру",
  },
  {
    id: "KODE-5",
    status: "todo",
    userId: null,
    title: "Сверстать классный сайт",
  },
];
