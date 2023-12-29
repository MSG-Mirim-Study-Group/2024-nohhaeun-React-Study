import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  console.log(props.buttons);
  const taskList = props.tasks.map((task) => ( 
    <Todo 
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id} 
    /> 
  ));
  const btnNameList = props.buttons.map((btn) => (
    <FilterButton
      name={btn.name}
      key={btn.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic for {props.name}</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        {btnNameList}
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
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
