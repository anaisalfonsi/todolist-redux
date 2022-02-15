import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskToApi } from "../redux/api";

const TaskForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTaskToApi(text));

    setText("");

    inputRef.current.focus();
  }

  return (
    <form className="grid" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Ajouter</button>
    </form>
  );
};

export default TaskForm;
