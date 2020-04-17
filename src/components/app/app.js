import React from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import "./app.css";

const App = () => {

    const todoData = [
        {label: 'Drink coffee', important: false, id: 0},
        {label: 'Build awesome app', important: true, id: 1},
        {label: 'Have a lunch', important: false, id: 2},
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;