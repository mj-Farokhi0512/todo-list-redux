import {
  INSERT_TODO,
  TOGGLE_TODO,
  DELETE,
  DELETE_DONE,
  DELETE_ALL,
} from "./types";

const initialState = {
  data: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INSERT_TODO:
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: action.payload.id,
            content: action.payload.content,
            complete: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        data: state.data.map((row) => {
          if (row.id === action.payload.id) {
            return {
              id: row.id,
              content: row.content,
              complete: !row.complete,
            };
          } else {
            return row;
          }
        }),
      };
    case DELETE:
      return {
        ...state,
        data: state.data.filter((row) => row.id !== action.payload.id),
      };
    case DELETE_DONE:
      return {
        ...state,
        data: state.data.filter((row) => row.complete !== true),
      };

    case DELETE_ALL:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
}

export default reducer;
