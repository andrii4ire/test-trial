import { useState } from "react/cjs/react.development";
import "./styles.scss";

const dropdownItems = ["Admin", "User", "Vip"];

const TaskFour = () => {
  const [name, setName] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("None");
  const [users, setUsers] = useState({});
  console.log(users);
  return (
    <div>
      <div className="wrapp-drop">
        <input
          type="text"
          placeholder="Name"
          checked={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div
          className="butt-drop"
          onClick={() => {
            setDropdownOpen(true);
          }}
        >
          {dropdownValue}
        </div>
        {isDropdownOpen ? (
          <div
            className="drop-items"
            onClick={(e) => {
              setDropdownValue(e.target.innerText);
              setDropdownOpen(false);
            }}
          >
            {dropdownItems.map((user) => (
              <div key={user} className="text">
                {user}
              </div>
            ))}
          </div>
        ) : null}
        <div className="butt-criete" onClick={()=>{
            setUsers({...users, [name]: {name:name, role: dropdownValue}})
        }}>Create</div>
      </div>
    </div>
  );
};
export default TaskFour;
