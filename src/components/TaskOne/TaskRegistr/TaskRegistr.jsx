import { useState } from "react/cjs/react.development";
import "../styles.scss";
const Registr = ({ setShowLogin, users, setUsers }) => {
  const [nameReg, setNameReg] = useState("");
  const [passReg, setPassReg] = useState("");
  const [confirm, setConfirm] = useState("");
  return (
    <div className="form-register">
      Registration
      <input
        type="text"
        placeholder="Name"
        checked={nameReg}
        onChange={(e) => {
          setNameReg(e.target.value);
          console.log(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        checked={passReg}
        onChange={(e) => {
          setPassReg(e.target.value);
          console.log(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Confirm the Password"
        checked={confirm}
        onChange={(e) => {
          setConfirm(e.target.value);
          console.log(e.target.value);
        }}
      />
      <div className="wrapp-butt">
        <div
          className="butt"
          onClick={() => {
            setShowLogin(true);
          }}
        >
          Login
        </div>
        <div
          className="butt"
          onClick={() => {
            if (
              nameReg.length > 4 &&
              nameReg.length < 8 &&
              passReg.length >= 6 &&
              passReg.length < 10 &&
              confirm.length === passReg.length
            ) {
              console.log("I am register");
              const newUsers = { ...users, [nameReg]: { name: nameReg, password: passReg } };
              setUsers(newUsers)
              return true;
            } else {
              return false;
            }

          }}
        >
          Registr
        </div>
      </div>
    </div>
  );
};
export default Registr;
