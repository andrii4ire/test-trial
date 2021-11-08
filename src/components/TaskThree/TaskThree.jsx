import { useState } from "react/cjs/react.development";
import "./styles.scss";
const TaskThree = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  return (
    <>
      <div className="wrapper">
        <input
          type="text"
          placeholder="Name"
          checked={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div
          className="butt"
          onClick={() => {
            console.log(name);
            setNames([...names, name]);
          }}
        >
          add
        </div>
      </div>
      <div>
        myNames:
        {names.map((name, i) => (
          <div key={i}>{name}</div>
        ))}
      </div>
    </>
  );
};
export default TaskThree;
