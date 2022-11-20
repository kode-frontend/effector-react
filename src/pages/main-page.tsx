import React from "react";
import styled from "styled-components";

import { TodoListConnector } from "../todo-list";
import { UsersConnector } from "../users";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const MainPage = () => {
  return (
    <PageWrapper>
      <UsersConnector />
      <TodoListConnector />
    </PageWrapper>
  );
};
