import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";
import { TUser } from "../types";

export const $users = createStore<TUser[]>([
  { id: "vsm", name: "Владислав Смирнов" },
  { id: "vs", name: "Валерий Шабарин" },
]);

export const $selectedUser = createStore<string | null>(null);

persist({
  store: $selectedUser,
  key: "SELECTED_USER",
});

export const selectUser = createEvent<string>();

$selectedUser.on(selectUser, (_, payload) => payload);

export const logout = createEvent();

$selectedUser.reset(logout);
