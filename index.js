function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'File and Folder structure',
      isCompleted: false,
    },
    {
      text: 'Components',
      isCompleted: false,
    },
    {
      text: 'JSX',
      isCompleted: false,
    },
    {
      text: 'Props',
      isCompleted: false,
    },
    {
      text: 'State',
      isCompleted: false,
    },
    {
      text: 'Events',
      isCompleted: 'false',
    },
    {
      text: 'Styling',
      isCompleted: false,
    },
    {
      text: 'Conditional Rendering',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
