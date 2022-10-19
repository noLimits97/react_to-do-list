import { useState } from "react";

//ToDo 수정 Button 만들기 & CSS
function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((curArr) => [...curArr, toDo]);
    setToDo("");
  };
  const onDeleteList = (index) =>
    setToDos(toDos.filter((_, itemIndex) => itemIndex !== index));
  return (
    <div>
      <h1>To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Add a task"
          value={toDo}
        />
        <button style={{ display: "none" }}>Submit</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index.toString()}>
            {item}
            <button onClick={() => onDeleteList(index)}>/❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
