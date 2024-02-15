import React from "react";
import ListItem from "./ListItem/ListItem.jsx";
import "./List.css";

function List(props) {
  const newList = props.newList;
  const selectType = Number(props.selectType);
  const selectCat = Number(props.selectCat);
  const selectPay = Number(props.selectPay);

  const filteredList = newList.filter((a) => {
    if (
      (selectType === 0 || a.type === selectType) &&
      (selectCat === 0 || a.category === selectCat) &&
      (selectPay === 0 || a.payment === selectPay)
    ) {
      return true;
    }
    return false;
  })
  
  return (
    <div className="l-container">
      {filteredList.map((e) => (
        <ListItem
          editHandler={props.editHandler}
          deleteHandler={props.deleteHandler}
          key={e.id}
          id={e.id}
          type={e.type}
          category={e.category}
          payment={e.payment}
          amount={e.amount}
        />
      ))}
    </div>
  );
}

export default List;
