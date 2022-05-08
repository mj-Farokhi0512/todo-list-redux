import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todo/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Todo.css";

function Todo(props) {
  function onClickHandler() {
    props.toggleTodo(props.todo.id);
  }

  function onClickDelete() {
    props.deleteTodo(props.todo.id);
  }

  return (
    <li onClick={onClickHandler} className="todo">
      <span className="content">{props.todo.content} </span>

      {
        <input
          className="btn check"
          type="checkbox"
          checked={props.todo.complete}
        />
      }

      <button onClick={onClickDelete}>Delete</button>
    </li>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
