import { useState } from "react";
import "./styles.scss";
import Form from "../Form/Form";
import NameClick from "../NameClick/NameClick";
import TaskOne from "../TaskOne/TaskOne";
import TaskTwo from "../TaskTwo/TaskTwo";
import TaskThree from "../TaskThree/TaskThree";
import TaskFour from "./TaskFour/TaskFour";
// import Dropdown from "../Dropdown/Dropdown";
// import ButtonsCode from "../ButtonsCode/ButtonsCode";
// import TraficLights from "../TraficLights/TraficLights";

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
      <label className="form-checkbox">
        <div>Show form</div>
        <input type="checkbox" checked={isForm} onChange={()=>{setForm(!isForm)}} />
      </label>
      {isForm ? <Form /> : null}
      {/* <Dropdown/>
      <ButtonsCode/>
      <TraficLights/> */}
      {/* <NameClick/>
      <TaskOne/>
      <TaskTwo/>
      <TaskThree/> */}
      <TaskFour/>

    </div>
  );
};

export default Content;
