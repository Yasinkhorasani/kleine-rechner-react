import React, {useState} from "react";

function Calculator() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [sum, setSum] = useState(0)

    const add = () => { setSum(a + b) }
    const handleInput = (ev) => {
        ev.target.id==="a" ? setA(Number(ev.target.value)) : setB(Number(ev.target.value))
    }
    return (
        <div>
            <input id="a" type="text" value={a} onChange={handleInput} />
            <input id="b" type="text" value={b} onChange={handleInput} />
            <button onClick={add}>+</button>
            <p>{sum}</p>
        </div>
    );
        
  }
  
