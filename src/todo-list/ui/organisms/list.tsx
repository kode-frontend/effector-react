import styled from "styled-components";

import { InputBlock } from "../molecules";

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #eee;
  border-radius: 16px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;

type Props = {
  todo: JSX.Element;
  progress: JSX.Element;
  done: JSX.Element;
  isLoading?: boolean;
  onAddTask: (title: string) => void;
};

export const List = ({ done, progress, todo, isLoading, onAddTask }: Props) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Wrapper>
      <InputBlock onAdd={onAddTask} />
      <ColumnWrapper>
        <div>
          <h2>To do</h2>
          <hr />
          {todo}
        </div>
        <div>
          <h2>In Progress</h2>
          <hr />
          {progress}
        </div>
        <div>
          <h2>Done</h2>
          <hr />
          {done}
        </div>
      </ColumnWrapper>
    </Wrapper>
  );
};
