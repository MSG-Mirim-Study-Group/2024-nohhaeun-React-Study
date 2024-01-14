import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";

// tasks 데이터 배열 필터링에 사용
const FILTER_MAP = {
  All: () => true,// 모든 할일에 대해 true 반환
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks); 
  const [filter, setFilter] = useState("All");// 처음에는 모든 할 일이 표시되어야 함

  function addTask(name) {
    console.log(`todo-${nanoid()}`);
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // 이 할 일이 편집된 작업과 동일한 ID를 갖는 경우
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // 만약 이 할 일이 수정된 할 일로부터 같은 id를 가지고 있다면
      if ( id === task.id ) {
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id );
    console.log(remainingTasks);
    setTasks(remainingTasks);
  }

  // filter 상태의 키에 해당하는 FILTER_MAP의 값에 접근
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => ( 
    <Todo 
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    /> 
  ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
      key={name}
      name={name} 
      isPressed={name===filter}
      setFilter={setFilter}
      />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  return (
    <div className="todo app stack-large">
      <h1>{props.name} 필터링 완성</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"//  브라우저가 스크린 리더 사용자에게 전달해야 할 내용을 상황에 따라 적어야 할 때 사용 https://velog.io/@a_in/WAI-ARIA-role-aria-label
        >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
