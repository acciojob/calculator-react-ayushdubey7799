import React from "react";
import { useState } from "react";
import '../styles/App.css'

const content = ['C', '/', '*', '-', '7', '8', '9', '+', '4', '5', '6', '1', '2', '3', '=', '0', '.', ' '];



const App = () => {
    const [stringToCalculate, setStringToCalculate] = useState("");

    function calculate(value) {
        if(value==='='){
          setStringToCalculate(String(eval(stringToCalculate)));
        }
        else if(value === 'C'){
          setStringToCalculate("");
        }
        else{
            setStringToCalculate(stringToCalculate + value);

        }
    }

    

    return (
        <React.Fragment>
            <h1>React Calculator</h1>
            <div className="calculator">
                <input type="text" value={stringToCalculate} /><br />
                <div className="grid">
                    {content.map((item, index) => {
                        return <button key = {index} id = 'btn-9' className={"item" + index} onClick={() => calculate(item)}>{item}</button>
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default App;