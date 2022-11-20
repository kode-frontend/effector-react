import React from "react";

import { TUser } from "../types";
import { Users } from "../ui/organisms/users";

export const UsersConnector = () => {
  const users: TUser[] = [
    { id: "vsm", name: "Владислав Смирнов" },
    { id: "vs", name: "Валерий Шабарин" },
  ];

  const selectedUserId = "vs";

  const handleUserClick = () => null;
  const logout = () => null;

  return (
    <Users
      users={users}
      onUserClick={handleUserClick}
      onLogout={logout}
      selectedUserId={selectedUserId}
    />
  );
};
