import { useState } from "react";
import { Createcolorblock } from "./Createcolorblock";

// TASK-5   --color game
export function Colourgame() {
  let arr = ["red", "blue", "green"];
  const [initial, setInitial] = useState(arr);



  const [colorval, setColorval] = useState("white");
  let c3 = {
    backgroundColor: colorval,
  };


  return (
    <div>
      <input className='ipfield' style={c3} placeholder='enter a color name' onChange={(ele) => setColorval(ele.target.value)} value={colorval} />
      <button className='buttonip' onClick={() => setInitial([...initial, colorval])}>Add color</button>
      {initial.map((ele, index) => (
        <Createcolorblock key={index} arg={ele} />
      ))}
    </div>
  );
}
