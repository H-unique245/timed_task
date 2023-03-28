import { SUCCESS_PROJECT, SUCCESS_TASK } from "./actionType";

export const addTask = (data) => {
  return { type: SUCCESS_TASK, payload: data };
};

export const addProject = (data) => {
  return { type: SUCCESS_PROJECT, payload: data };
};
