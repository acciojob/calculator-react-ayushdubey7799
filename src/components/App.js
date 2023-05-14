import React from "react";
import { useState } from "react";
import '../styles/App.css'

const content = ['C','/','*','-','7','8','9','+','4','5','6','1','2','3','=','0','.',' '];



const App = () => {
    const [stringToCalculate,setStringToCalculate] = useState("");
  
    function calculate(c){
        setStringToCalculate(stringToCalculate + c);
    }
    return (
        <div id="container">
            <input type="text"  value={stringToCalculate} readOnly/><br/>
            <div className="grid">
            {content.map((item,index) => {
                return <button className={"item" + index} onClick={() => calculate(item)}>{item}</button>
            })}
            </div>
        </div>
    )
}

export default App;
