import { useState } from "react";
import "./styles.scss";
import Form from "../Form/Form";

const Content = () => {
  const [counter, setCounter] = useState(0);
  const [isForm, setForm] = useState(false);

  return (
    <div className="content">
      <div
        className={`button ${counter >= 10 ? "disabled" : ""}`}
        onClick={() => {
          if (counter < 10) {
            setCounter(counter + 1);
          }
        }}
      >
        Click
      </div>
      <div className="counter">{counter}</div>
      {counter >= 10 ? <div className="element">Element</div> : null}
      <div
        className="form-checkbox"
        onClick={() => {
          setForm(!isForm);
        }}
      >
        <div>Show form</div>
        <input type="checkbox" checked={isForm} />
      </div>
      {isForm ? <Form /> : null}
    </div>
  );
};

export default Content;
