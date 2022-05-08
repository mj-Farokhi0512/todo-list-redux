import { connect } from "react-redux";
import Todo from "./Todo";
import { deleteAll, deleteDone, deleteTodo } from "../redux/todo/actions";
import "./Styles/TodoList.css";

function TodoList(props) {
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <ul>
        {props.data && props.data.length
          ? props.data.map((todo, index) => <Todo todo={todo} key={index} />)
          : ""}
      </ul>
      <button onClick={() => props.deleteDone()}>Delete Done</button>
      <button onClick={() => props.deleteAll()}>Delete All</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state,
    data: state.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    deleteDone: () => dispatch(deleteDone()),
    deleteAll: () => dispatch(deleteAll()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
