import { useState } from "react";
import "./ListItem.css";

function ListItem(props) {
  const amount = props.amount;

  var type, category, payment;

  if (props.type === 1) {
    type = "form-control";
  } else if (props.type === 2) {
    type = "form-control dark";
  }

  switch (props.category) {
    case 1:
      category = "Housing";
      break;
    case 2:
      category = "Transportation";
      break;
    case 3:
      category = "Food";
      break;
    case 4:
      category = "Utilities";
      break;
  }

  switch (props.payment) {
    case 1:
      payment = "Cash";
      break;
    case 2:
      payment = "Mobile banking";
      break;
    case 3:
      payment = "Credit Card";
      break;
  }

  const [isEdit, setIsEdit] = useState(false);
  const [curType, setCurType] = useState("");
  const [curCat, setCurCat] = useState("");
  const [curPay, setCurPay] = useState("");
  const [curAmount, setCurAmount] = useState("");

  const onClickEdit = () => {
    setIsEdit(true);
    setCurType(props.type);
    setCurCat(props.category);
    setCurPay(props.category);
    setCurAmount(props.amount);
  };

  const onClickDone = () => {
    const editValue = {
      id: props.id,
      type: curType,
      category: curCat,
      payment: curPay,
      amount: curAmount
    };
    setIsEdit(false);
    props.editHandler(props.id, editValue);
  };

  if (isEdit) {
    return (
      <div className="form-control">
        <div className="type">
          <select onChange={(e) => setCurType(Number(e.target.value))} value={curType} className="selected" style={{ marginRight: "10px" }}>
            <option value="1">Income</option>
            <option value="2">Expense</option>
          </select>
        </div>
        <div className="category">
          <select onChange={(e) => setCurCat(Number(e.target.value))} value={curCat} className="selected" style={{ marginRight: "10px" }}>
            <option value="1">Housing</option>
            <option value="2">Transportation</option>
            <option value="3">Food</option>
            <option value="4">Utilities</option>
          </select>
        </div>
        <div className="payment">
          <select onChange={(e) => setCurPay(Number(e.target.value))} value={curPay} className="selected" style={{ marginRight: "10px" }}>
            <option value="1">Cash</option>
            <option value="2">Mobile banking</option>
            <option value="3">Credit Card</option>
          </select>
        </div>
        <div className="amount">
          <input type="number" onChange={(e) => setCurAmount(Number(e.target.value))} value={curAmount} />
        </div>
        <div>
          <button className="edit-btn" onClick={onClickDone}>
            DONE
          </button>
        </div>
        <div>
          <button
            onClick={() => setIsEdit(false)}
            className="del-btn"
          >
            CANCEL
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={type}>
      <div className="ct-container">{category}</div>
      <div className="py-container">{payment}</div>
      <div className="am-container">{amount}</div>
      <div>
        <button onClick={onClickEdit} className="edit-btn">
          EDIT
        </button>
      </div>
      <div>
        <button
          onClick={() => props.deleteHandler(props.id)}
          className="del-btn"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ListItem;
