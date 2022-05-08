import React from "react";
import { Provider } from "react-redux";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import store from "./redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="todo-app">
          <TodoInput />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
