import { useDispatch } from "react-redux";
import { deleteTaskFromApi, toggleTaskInApi } from "../redux/api";

const TaskItem = ({ task }) => {

  const dispatch = useDispatch();

  const handleChange = () => {
    /* dispatch({
      type: "todos/toggleTask",
      payload: task.id
    }); */

    dispatch(toggleTaskInApi(task));
  }
  const handleDelete = () => {
    dispatch(deleteTaskFromApi(task.id));
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleChange}
        />
        {task.text}
      </label>
      <span
        className="delete-btn"
        role="button"
        onClick={handleDelete}
      >
        ×
      </span>
    </div>
  );
};

export default TaskItem;
