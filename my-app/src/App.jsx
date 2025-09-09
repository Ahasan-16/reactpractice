import { useState } from "react";
import FirstComponent from "./component/FirstComponent";
import SecondComponent from "./component/ScondComponent";
import ThirdComponent from "./component/ThirdComponent";


function App() {

  const obj={
    "id":"19CSE016",
    "name":"Mohammad Ahasan",
    "description":"He is a good student"
  }
  const btn=()=>{
    return <button style={{backgroundColor:"blue",color:"white"}}>Click me</button>
  }
  const submit=(e)=>{
    e.preventDefault();
    alert("You clicked me");
  }
  const [cnt,setCnt]=useState(0);
  return (
    <div>
      <h1>Using Componet and passing properties(props)</h1>
      <FirstComponent time={new Date().getDate()}/>
      <SecondComponent object={obj}/>
      <ThirdComponent button={btn()}/>

      <h1>Responding to events</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
        alert("You submitted this form");
      }}>
        <input/>
        <button>submit</button>
      </form>
      <button onClick={()=>{
        console.log("You click me "+ cnt +"times");
        setCnt(cnt+1);
      }}>Click me</button>


     
    </div>
  );
}

export default App
