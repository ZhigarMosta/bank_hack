import { createStore, createEvent } from "effector";

export const UserData = createEvent();

export const clearUserData = createEvent();

export const $UserInfo = createStore(null)
  .on(UserData, (_, newData) => newData)
  .on(clearUserData, () => null);
