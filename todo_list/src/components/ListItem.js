
const ListItem = (props) => {
  

  return <li>
    <h4>{props.name}</h4>
    <button id="up" onClick={props.moveUpHandler}>&#8593;</button>
    <button id="down" onClick={props.moveDownHandler}>&#8595;</button>
    <button id="del" onClick={props.deleteItemHandler}>&#215;</button>
  </li>

}

export default ListItem;