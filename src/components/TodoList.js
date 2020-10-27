// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from './Todo';

const TodoList = props => {
    // for sorting the list based on whether an item has been purchased or not
    // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);

    const handleClick = () => {
        props.handleClearItems();
    }

    return (
        <div>
            {props.todos.map(item => 
                <li>{item.task}</li>
            )}
            <button onClick={handleClick}>Clear Purchased</button>
        </div>
    );
};

export default TodoList;