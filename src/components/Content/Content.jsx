import { useState } from "react";

import "./styles.scss";

const Content = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="content">
        <div
          className={`button ${counter >= 10 ? 'disabled' : ''}`}
          onClick={() => {
            if(counter < 10){
              setCounter(counter + 1);
            }
          }}
        >
          Click
        </div>
      <div className="counter">{counter}</div>
      {counter >= 10 ? <div className="element">Element</div> : null}
    </div>
  );
};

export default Content;
