import { createEvent, createStore, sample } from "effector";
import { TTask } from "../types";

const $counter = createStore(3);

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

export const createTask = createEvent<string>();

type TDraft = {
  type: "create" | "edit" | null;
  task: TTask;
};

const emptyTask: TTask = {
  id: "",
  status: "todo",
  title: "",
  userId: null,
  description: "",
};

const initialDraft: TDraft = {
  type: null,
  task: emptyTask,
};

export const $draft = createStore(initialDraft);

$draft.on(createTask, (_, payload) => ({
  type: "create",
  task: { ...emptyTask, title: payload },
}));

export const saveDraft = createEvent<TTask>();

$counter.on(saveDraft, (state) => state + 1);

sample({
  clock: saveDraft,
  source: { tasks: $tasks, counter: $counter },
  fn: ({ tasks, counter }, clock) => {
    return [...tasks, { ...clock, id: `KODE-${counter}` }];
  },
  target: $tasks,
});

$draft.reset(saveDraft);
