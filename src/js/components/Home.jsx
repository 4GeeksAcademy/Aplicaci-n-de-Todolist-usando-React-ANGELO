import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

//include images into your bundle


//create your first component
const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleKeyDown = (evento) => {
        if (evento.key === "Enter") {
            if (inputValue.trim() !=="") {
                const newTodoList = [...todos, inputValue.trim()];
                setTodos(newTodoList);
                setInputValue("");
            }
        }
    };

    const handleDelete = (indexToDelete) => {
        const updatedTodos = [];
        for (let i = 0; i < todos.length; i++) {
            if (i !== indexToDelete) {
                updatedTodos.push(todos[i]);
            }
        }
        setTodos(updatedTodos);
    };

    return (
        <div className="text-center">
            <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">

                <h1 className="display-1 text-danger text-opacity-25 fw-light my-0 label-todos">
                    todos
                </h1>

                <div className="card shadow-sm w-100 todo-card todo-main-card">

                    <input
                        type="text"
                        className="form-control border-0 border-bottom py-3 px-4 fs-4 fw-light italic-placeholder"
                        placeholder="What needs to be done?"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />

                    <ul className="list-group list-group-flush">
                        {todos.length === 0 ? (
                            <li className="list-group-item text-muted py-3 px-4 italic-placeholder fs-5 text-center bg-white">
                                No hay tareas, añadir tareas
                            </li>
                        ) : (
                            todos.map((singleTodo, singleIndex) => (
                                <TodoItem
                                    key={singleIndex}
                                    index={singleIndex}
                                    todo={singleTodo}
                                    onDelete={handleDelete}
                                />
                            ))
                        )}
                    </ul>

                    <div className="card-footer bg-white border-top text-muted py-2 px-4 fs-6 fw-light">
                        {todos.length} {todos.length === 1 ? "item" : "items"} left
                    </div>
                </div>

                <div className="todo-stack-effect w-100 todo-stack-1"></div>
                <div className="todo-stack-effect w-100 todo-stack-2"></div>
            </div>
        </div>
    );
};

export default Home;