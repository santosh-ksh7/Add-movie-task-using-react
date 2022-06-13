import { useState } from "react";
import { Counter } from "./Counter";

// TASK-3   --Movie component
export function Moviecomponent({ obj }) {
  const [toggle, setToggle] = useState(true);
  let res = obj.rating >= 8 ? "green" : "red";
  const c1 = {
    color: res
  };
  let res1 = toggle ? "block" : "none";
  const c2 = {
    display: res1
  };
  return (
    <div className='outerdiv'>
      <img className='poster' src={obj.poster} alt={obj.name} />
      <div className='innerdiv'>
        <h4>{obj.name}</h4>
        <h4 style={c1}>☆{obj.rating}</h4>
      </div>
      <button onClick={() => setToggle(!toggle)}>Toggle summary</button>
      <p style={c2}>{obj.summary}</p>
      <Counter />
    </div>
  );
}


