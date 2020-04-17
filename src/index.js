import React from "react";
import ReactDOM from 'react-dom';

import AppName from "./components/app-name";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";


const App = () => {
    return (
        <div>
            <AppName />
            <SearchPanel />
            <TodoList />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
