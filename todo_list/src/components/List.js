import React, { useState } from "react";
import AddTodo from "./Form";
import ListItem from "./ListItem";



const List = () => {

  const [todoItems, updateItems] = useState(['Buy Groceries', 'Learn React', 'Watch Movies', 'Listen Music']);
  const moveUpHandler = (event) => {
    let prevRow = event.target.parentElement.previousSibling;
    let x = event.target.parentElement;
    if (prevRow) {
      event.target.parentElement.remove();
      prevRow.before(x);
    } 
  };
  const moveDownHandler = (event) => {
    let nextRow = event.target.parentElement.nextSibling;
    let x = event.target.parentElement;
    if (nextRow) {
      event.target.parentElement.remove();
      nextRow.after(x);
    }
  };
  const deleteItemHandler = (event) => {
    updateItems((prevstate) => {
      return [...prevstate].filter((e) => {
        if (e !== event.target.parentElement.firstChild.innerHTML)
          return true;
        else
          return false;
      });
    });
    //console.log(event.target.parentElement.firstChild.innerHTML);
  };

  const todoList = todoItems.map((item, idx) => {
    return <ListItem name={item} key={idx} moveUpHandler={moveUpHandler} moveDownHandler={moveDownHandler} deleteItemHandler={deleteItemHandler} />
  });



  const addListItem = (item) => {
    updateItems((prevstate) => {
      return [...prevstate, item];
    })
  }

  return <ul>
    <AddTodo add={addListItem} />
    <div>
      {todoList}
    </div>

  </ul>





}

export default List;