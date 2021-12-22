import React, { useState } from "react";
import Input from "./Input";
import Item from "./Item";

function List() {
  const initialList = [
    "type what you need",
    "press add button",
    "click to delete",
  ];
  const [list, setList] = useState(initialList);

  function addItem(text) {
    setList((prevList) => {
      return [...prevList, text];
    });
  }

  function deleteItem(id) {
    setList((prevList) => {
      return prevList.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="list">
        <Input addItem={addItem} />
        <ul>
          {list.map((item, index) => {
            return (
              <Item
                key={index}
                id={index}
                item={item}
                deleteItem={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default List;
