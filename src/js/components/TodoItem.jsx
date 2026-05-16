import React from "react";

const TodoItem = ({ todo, index, onDelete }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center todo-item-row py-3 px-4">
            <span className="todo-text text-dark fs-4 fw-light">{todo}</span>
            <button
                onClick={() => onDelete(index)}
                className="btn-delete border-0 bg-transparent text-danger fs-5"
                style={{ cursor: "pointer" }}
            >
                ✕
            </button>
        </li>
    );
};

export default TodoItem;