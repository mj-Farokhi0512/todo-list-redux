import React, { Component } from "react";
import { createRef } from "react";
import "./Styles/TodoInput.css";
import { connect } from "react-redux";
import { insertTodo } from "../redux/todo/actions";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.inputTodo = createRef();
    this.state = {
      input: "",
    };
  }

  componentDidMount() {
    this.inputTodo.current.focus();
  }

  onClickHandler = () => {
    if (this.state.input.length > 5) {
      this.props.insertTodo(this.state.input);
      this.setState({
        input: "",
      });
    }
    this.inputTodo.current.focus();
  };

  onClickEnter = (event) => {
    if (event.key === "Enter") {
      this.onClickHandler();
    }
  };

  render() {
    return (
      <div className="todo-input">
        <h2>Todo Input</h2>
        <input
          type="text"
          value={this.state.input}
          ref={this.inputTodo}
          onKeyDown={this.onClickEnter}
          onChange={(e) => this.setState({ input: e.target.value })}
        />
        <button onClick={this.onClickHandler}>Add Todo</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    insertTodo: (content) => dispatch(insertTodo(content)),
  };
}

export default connect(null, mapDispatchToProps)(TodoInput);
