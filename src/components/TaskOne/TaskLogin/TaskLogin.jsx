import { useState } from "react/cjs/react.development";
import "../styles.scss";

const Login = ({ setShowLogin, users }) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="form-login">
      Login
      <input
        type="text"
        placeholder="Name"
        checked={name}
        onChange={(e) => {
          setName(e.target.value);
          console.log(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        checked={pass}
        onChange={(e) => {
          setPass(e.target.value);
          console.log(e.target.value);
        }}
      />
      <div className="wrapp-butt">
        <div
          className="butt"
          onClick={() => {
            setShowLogin(false);
          }}
        >
          Registr
        </div>
        <div
          className="butt"
          onClick={() => {
            // {'iryna': { name: "iryna", password: "1234567" }}
            if (
              users[name] && users[name].password === pass
            ) {
              console.log("I am");
              return true;
            } else {
              return false;
            }
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
export default Login;
