import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header.jsx";
import List from "./component/List/List.jsx";
import NewList from "./component/newList/newList.jsx";

let count = 0;

function uniqueId() {
  count = count + 1;
  return count;
}

function App() {
  const [isShow, setIsShow] = useState(false);
  const [newList, setNewList] = useState([]);
  const [selectType, setSelectType] = useState("0");
  const [selectCat, setSelectCat] = useState("0");
  const [selectPay, setSelectPay] = useState("0");

  const addNewList = (newL) => {
    const newListItem = {
      ...newL,
      id: uniqueId(),
    };
    if (newListItem.id > 1) setNewList([...newList, newListItem]);
    else setNewList([newListItem]);
  };

  const deleteHandler = (id) => {
    const newLists = newList.filter((e) => e.id !== id);
    setNewList(newLists);
  }

  const editHandler = (id, lists) => {
    const newLists = [...newList];
    const index = newList.findIndex(e => e.id === id);
    newLists[index] = {...lists};
    setNewList(newLists);
  }

  return (
    <div className="App">
      <h1>Income & Expense</h1>
      {isShow ? (
        <NewList setIsShow={setIsShow} addNewList={addNewList} />
      ) : (
        <div style={{ margin: "40px" }}>
          <button onClick={() => setIsShow(true)} className="my-btn">
            + ADD
          </button>
        </div>
      )}
      <Header
        setSelectType={setSelectType}
        setSelectCat={setSelectCat}
        setSelectPay={setSelectPay}
        selectType={selectType}
        selectCat={selectCat}
        selectPay={selectPay}
      />
      <List
        editHandler={editHandler}
        deleteHandler={deleteHandler}
        newList={newList}
        selectType={selectType}
        selectCat={selectCat}
        selectPay={selectPay}
      />
    </div>
  );
}

export default App;
