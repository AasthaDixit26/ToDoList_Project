
import './App.css';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './components/Lists';

function App() {
  const [text,setText]=useState("");
  
  const [todoList , setTodoList]=useState([]);
  const addItem=()=>{
    const newTodoItem={
      id:uuidv4(),
      item:text,
      done:false,
    };
    setTodoList([...todoList,newTodoItem]);
    setText(" ");
    
  };

  const handletoggle=(itemId)=>{
    const newTodolist=todoList.map((listItem)=>{
      if(listItem.id===itemId){
        return{...listItem,done:!listItem.done};
    }
    return listItem;
  });
  setTodoList(newTodolist);
  }
  
  const handleDelete=(itemId)=>{
    const newTodolist=todoList.filter((listItem)=>
      listItem.id!==itemId);
    setTodoList(newTodolist);
  };


  // console.log("todolist",todoList);
  
  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="adder">
        <input type='text' placeholder="Add Items" value={text} onChange={(e)=>setText(e.target.value)}/>
        <span onClick={addItem}>+</span>

      </div>
      <List todoList={todoList} handletoggle={handletoggle} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
