import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    const [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(),isDone:false}]);
    const [newTodo, setNewTodo] = useState("");

    const addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(),isDone:false }];
        });
        setNewTodo("");
    };

    const updateTodo = (event) => {
        setNewTodo(event.target.value);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const markallDone = () => {
        setTodos(
            todos.map((todo) => {
                return {
                    ...todo, isDone:true,
                };
            })
        );
    };


    const markasDone = (id) => {

        setTodos(
            todos.map((todo) => {
                if(todo.id==id){
                return {
                    ...todo, isDone:true,
                };
            }else{
                return todo; 
            }
            })
        );
    };

    return (
        <div>
            <input placeholder="Add a task" value={newTodo} onChange={updateTodo}></input>
            <br/><br/>
            <button onClick={addNewTask}>Add Task</button>
            <br/><br/>
            <hr/>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecoration:"line-through"}:{}} >{todo.task}</span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => markasDone(todo.id)}>mark as Done</button>
                    </li>
                ))}
            </ul>
            <br/><br/>
            <button onClick={markallDone}>marked All</button>
        </div>
    );
}
