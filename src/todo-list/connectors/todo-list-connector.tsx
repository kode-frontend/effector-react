import { TaskDetail } from "../ui/organisms";
import { List } from "../ui/organisms/list";
import { DoneColumnConnector } from "./done-column-conenctor";
import { ProgressColumnConnector } from "./progress-column-connector";
import { TodoColumnConnector } from "./todo-column-connector";

export const TodoListConnector = () => {
  const tasksLoading = false;
  const onAddTask = () => null;
  const closeDraft = () => null;
  const saveDraft = () => null;
  const removeTask = () => null;

  const type: string | null = null;

  return (
    <>
      <List
        isLoading={tasksLoading}
        onAddTask={onAddTask}
        todo={<TodoColumnConnector />}
        progress={<ProgressColumnConnector />}
        done={<DoneColumnConnector />}
      />
      {type === "create" && (
        <TaskDetail onClose={closeDraft} onSave={saveDraft} />
      )}
      {type === "edit" && (
        <TaskDetail
          onClose={closeDraft}
          onRemove={removeTask}
          onSave={saveDraft}
        />
      )}
    </>
  );
};
