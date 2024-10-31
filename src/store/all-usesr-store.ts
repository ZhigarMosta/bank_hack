import { createStore, createEvent } from "effector";

export const AllUserData = createEvent();

export const clearAllUserData = createEvent();

export const $AllUserInfo = createStore(null)
  .on(AllUserData, (_, newData) => newData)
  .on(clearAllUserData, () => null);
