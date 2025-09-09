import { useRef, useState } from "react";
import FirstComponent from "./component/FirstComponent";
import SecondComponent from "./component/ScondComponent";
import ThirdComponent from "./component/ThirdComponent";


function App() {

  const obj = {
    id: 16,
    name: "Mohammad Ahasan",
    description: "He is a good student"
  }
  const btn = () => {
    return <button style={{ backgroundColor: "blue", color: "white" }}>Click me</button>
  };
  const submit = (e) => {
    e.preventDefault();
    alert("You clicked me");
  };
  const [cnt, setCnt] = useState(0);
  const [element, setelements] = useState([]);
  const addTag = () => {
    setelements([...element, "new paragraph added"]);
  };
  let h1Ref = useRef();
  const change = () => {
    h1Ref.innerText = "Change h1 innerText using useRef";
    // h1Ref.innerHTML = "<p>HI</p>"
  };

  let hchange = useRef();
  const fnc = () => {
    // hchange.innerHTML = '<p style="color:green">I love You too</p>'
    hchange.innerText="I love you too";
    hchange.style.color="blue";
    hchange.style.fontSize="50px";
  }


 
 let change1=null;//input e already reference er syntax use korchi tai r useRef() bebohar korar proyojon nai
  const save=()=>{
    change1.focus();//ei ta dile otomatic cursor input box e take submit dea o por o
    let value=change1.value;
    alert("You typed "+ value);
    change1.value="";

  }



  return (
    <div>
      <h1>Using Componet and passing properties(props)</h1>
      <FirstComponent time={new Date().getDate()} />
      <SecondComponent object={obj} />
      <ThirdComponent button={btn()} />

      <h1>Responding to events</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        alert("You submitted this form");
      }}>
        <input />
        <button>submit</button>
      </form>
      <button onClick={() => {
        console.log("You click me " + cnt + "times");
        setCnt(cnt + 1);
      }}>Click me</button>

      <h1 ref={(h1) => h1Ref = h1}>Access tag using useRef</h1>
      <button onClick={change}>Change</button>
      <h1>add paragraph tag</h1>
      {
        element.map((el, i) => (

          <p key={i.toString()}>{el}</p>

        ))
      }
      <button onClick={addTag}>addTag</button>

      <h1 ref={(h1) => hchange = h1}>Do you Love me?</h1>
      <button onClick={fnc} style={{ marginRight: 50 }}>Yes</button>
      <button>No</button>
      <br/><br/>
      <input ref={(input)=>(change1=input)}/> 'ei kane arrow function {} use korle return statement dite hoi explicitly,() dile dea laage na'
      <button onClick={save}>save</button>




    </div>
  );
}

export default App
