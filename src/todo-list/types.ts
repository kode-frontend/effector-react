export type TTaskStatus = "todo" | "progress" | "done";

export type TTask = {
  id: string;
  title: string;
  description?: string;
  status: TTaskStatus;
  userId: string | null;
};
