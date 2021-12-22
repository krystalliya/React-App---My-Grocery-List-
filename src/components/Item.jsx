import React from "react";

function Item({ item, deleteItem, id }) {
    function handleClick() {
        deleteItem(id);
    }

  return <li onClick={handleClick} >{item}</li>;
}

export default Item;
