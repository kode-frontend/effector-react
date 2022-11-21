import { useStore } from "effector-react";
import React from "react";
import { $selectedUser, $users, logout, selectUser } from "../model";

import { Users } from "../ui/organisms/users";

export const UsersConnector = () => {
  const users = useStore($users);

  const selectedUserId = useStore($selectedUser);

  return (
    <Users
      users={users}
      onUserClick={selectUser}
      onLogout={logout}
      selectedUserId={selectedUserId || ""}
    />
  );
};
