import TodoItem from "./TodoItem";

const TodoItems = () => {
  const TodoItems = [
    {id: 1, todoText: "Buy Milk", todoDate: "4-sept-2024"},
    {id: 2, todoText: "Go to college", todoDate: "Weekday"},
    {id: 3, todoText: "Exercise", todoDate: "Everyday"}
  ];

  return(
    <>
    {TodoItems.map(item => <TodoItem key={item.id} id = {item.id} todoText={item.todoText} todoDate={item.todoDate}/>)}
    </>
  );
};

export default TodoItems;