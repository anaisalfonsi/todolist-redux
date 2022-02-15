import TaskItem from "./TaskItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadTasksFromApi } from "../redux/api";

const TaskList = () => {
  const tasks = useSelector((state) => {
    return state.todos.tasks
  });

  const isLoading = useSelector((state) => state.todos.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasksFromApi())
  }, [])
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      {isLoading && <p aria-busy="true">Chargement en cours...</p>}
    </div>
  );
};

export default TaskList;
