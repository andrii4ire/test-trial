import { useState } from "react";
import Button from './Button'

import "./styles.scss";

const Content = () => {
  const [counter1, setCounter] = useState(0);
  let counter = 0;
  console.log("Ми зайшли в компоненту", counter);
  return (
    <div className="content">
      <div
        className="button"
        onClick={() => {
          counter = counter + 1;
          console.log(counter);
          if(counter === 15){
              alert('counter === 15')
          }
          //   setCounter(counter + 1);
        }}
      >
        Click me
      </div>

      <div
        className="button"
        onClick={() => {
          setCounter(counter1 + 1);
          if(counter1 === 15){
            alert('counter1 === 15')
        }
        }}
      >
        Click
      </div>
      <Button />
      <div className="counter">{counter}</div>
      <div className="counter">{counter1}</div>
    </div>
  );
};

export default Content;
