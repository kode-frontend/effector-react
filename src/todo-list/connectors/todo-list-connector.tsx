import { useStore } from "effector-react";
import {
  $draft,
  closeModal,
  createTask,
  removeTask,
  saveDraft,
} from "../model";
import { TaskDetail } from "../ui/organisms";
import { List } from "../ui/organisms/list";
import { DoneColumnConnector } from "./done-column-conenctor";
import { ProgressColumnConnector } from "./progress-column-connector";
import { TodoColumnConnector } from "./todo-column-connector";

export const TodoListConnector = () => {
  const draft = useStore($draft);
  const tasksLoading = false;

  return (
    <>
      <List
        isLoading={tasksLoading}
        onAddTask={createTask}
        todo={<TodoColumnConnector />}
        progress={<ProgressColumnConnector />}
        done={<DoneColumnConnector />}
      />
      {draft.type === "create" && (
        <TaskDetail data={draft.task} onClose={closeModal} onSave={saveDraft} />
      )}
      {draft.type === "edit" && (
        <TaskDetail
          data={draft.task}
          onClose={closeModal}
          onRemove={removeTask}
          onSave={saveDraft}
        />
      )}
    </>
  );
};
