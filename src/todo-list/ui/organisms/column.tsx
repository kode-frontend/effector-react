import styled from "styled-components";

import { TTask } from "../../types";
import { TaskCard } from "../molecules/task-card";

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 16px;
`;

const Stub = styled.div`
  width: 240px;
`;

type Props = {
  tasks: TTask[];
  onClick: (id: string) => void;
};

export const Column = ({ tasks, onClick }: Props) => {
  return (
    <ColumnWrapper>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard key={task.id} {...task} onClick={onClick} />
        ))
      ) : (
        <Stub>Задач в этой категории нет</Stub>
      )}
    </ColumnWrapper>
  );
};
