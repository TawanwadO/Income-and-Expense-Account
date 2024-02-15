import { useState } from 'react'
import "./Header.css"

function Header (props) {

    const type = props.selectType;
    const category = props.selectCat;
    const payment = props.selectPay;

    const TypeHandler = (event) => {
        props.setSelectType(event.target.value);
    }

    const CatHandler = (event) => {
        props.setSelectCat(event.target.value);
    }

    const PayHandler = (event) => {
        props.setSelectPay(event.target.value);
    }


    return (
        <div className="container-header">
            <div className="label-header" >
                Filter:
            </div>
            <select onChange={TypeHandler} value={type} className="select-header" style={{marginRight : "20px"}}>
                <option value="0">Type</option>
                <option value="1">Income</option>
                <option value="2">Expense</option>
            </select>
            <select onChange={CatHandler} value={category} className="select-header" style={{marginRight : "20px"}}>
                <option value="0">Category</option>
                <option value="1">Housing</option>
                <option value="2">Transportation</option>
                <option value="3">Food</option>
                <option value="4">Utilities</option>
            </select>
            <select onChange={PayHandler} value={payment} className="select-header">
                <option value="0">Payment</option>
                <option value="1">Cash</option>
                <option value="2">Mobile banking</option>
                <option value="3">Credit Card</option>
            </select>
        </div>
    );
}

export default Header;