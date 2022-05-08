import {
  DELETE,
  DELETE_DONE,
  INSERT_TODO,
  TOGGLE_TODO,
  DELETE_ALL,
} from "./types";

let initialId = 0;

export function insertTodo(content) {
  return {
    type: INSERT_TODO,
    payload: {
      id: ++initialId,
      content: content,
    },
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE,
    payload: {
      id,
    },
  };
}

export function deleteDone() {
  return {
    type: DELETE_DONE,
    payload: {},
  };
}

export function deleteAll() {
  return {
    type: DELETE_ALL,
    payload: {},
  };
}
