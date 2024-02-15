import { useState } from "react";
import "./NewList.css";

function NewList(props) {
  const [type, setType] = useState("1");
  const [category, setCategory] = useState("1");
  const [payment, setPayment] = useState("1");
  const [amount, setAmount] = useState("");

  const AddHandler = (event) => {
    const newList = {
      type: Number(type),
      category: Number(category),
      payment: Number(payment),
      amount: Number(amount)
    }

    props.addNewList(newList);
    props.setIsShow(false);

    setType("1");
    setCategory("1");
    setPayment("1");
    setAmount("");
  };

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const paymentHandler = (event) => {
    setPayment(event.target.value);
  };

  const typeHandler = (event) => {
    setType(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="add-container">
      <div className="input-container">
        <div className="block">
          <label>Type</label>
          <select onChange={typeHandler} value={type} className="select-header" style={{ marginRight: "20px" }}>
            <option value="1">Income</option>
            <option value="2">Expense</option>
          </select>
        </div>
        <div className="block">
          <label>Category</label>
          <select onChange={categoryHandler} value={category} className="select-header" style={{ marginRight: "20px" }}>
            <option value="1">Housing</option>
            <option value="2">Transportation</option>
            <option value="3">Food</option>
            <option value="4">Utilities</option>
          </select>
        </div>
        <div className="block">
          <label>Payment</label>
          <select onChange={paymentHandler} value={payment} className="select-header">
            <option value="1">Cash</option>
            <option value="2">Mobile banking</option>
            <option value="3">Credit Card</option>
          </select>
        </div>
        <div>
          <label>Amount</label>
          <input type="number" onChange={amountHandler} value={amount} />
        </div>
      </div>

    <div className="btn-container">
      <div>
        <button onClick={AddHandler} className="add-btn">ADD</button>
      </div>

      <div>
        <button onClick={() => props.setIsShow(false)} className="cancel-btn">CANCEL</button>
      </div>
    </div>  
    </div>
  );
}

export default NewList;
