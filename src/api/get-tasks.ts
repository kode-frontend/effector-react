import { TTask } from "../todo-list/types";
import { tasksMockData } from "./tasks-mock";

export const getTasks = () =>
  new Promise<TTask[]>((resolve) => {
    setTimeout(() => {
      resolve(tasksMockData);
    }, 3000);
  });
