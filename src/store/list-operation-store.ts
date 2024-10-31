import { createStore, createEvent } from "effector";

export const OperationsData = createEvent();
export const clearOperationsData = createEvent();

export const $Operationsinfo = createStore(null)
  .on(OperationsData, (_, newData) => newData)
  .on(clearOperationsData, () => null);
