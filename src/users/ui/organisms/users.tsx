import React from "react";
import styled from "styled-components";

import { TUser } from "../../types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  max-width: 400px;
  border: 1px solid black;
  border-radius: 16px;
  justify-content: space-between;
`;

const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const UserWrapper = styled.div<{ isSelected?: boolean }>`
  display: flex;
  gap: 8px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${({ isSelected }) => (isSelected ? "#f99" : "white")};

  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;

type Props = {
  users: TUser[];
  selectedUserId?: string;
  onUserClick: (id: string) => void;
  onLogout: () => void;
};

export const Users = ({
  users,
  selectedUserId,
  onUserClick,
  onLogout,
}: Props) => {
  return (
    <Wrapper>
      <UsersWrapper>
        <h2>Пользователи</h2>
        {users.length > 0
          ? users.map((user) => (
              <UserWrapper
                key={user.id}
                onClick={() => onUserClick(user.id)}
                isSelected={selectedUserId === user.id}
              >
                <strong>{user.id}</strong>
                <span>{user.name}</span>
              </UserWrapper>
            ))
          : "Не смогли найти пользователей"}
      </UsersWrapper>
      <button onClick={() => onLogout()}>Разлогиниться</button>
    </Wrapper>
  );
};
