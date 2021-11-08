import { useState } from "react";
import "./styles.scss";

const Form = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
//   const [someValues, setSomeValues] = useState({ email: "", password: "" });

//   const handleClick = () => {
//     const email = emailValue;
//     const password = passwordValue;
//     setSomeValues({ email, password });
//   };
//   console.log("someValues", someValues);
  return (
    <div className="form">
      <div className="textRegistr">Registration</div>
      <div className="wrapp">
        <div className="textRegistr">Email</div>
        <input
          type="email"
          onChange={(e) => {
            const { value } = e.target;
            setEmailValue(value);
          }}
        />
        <div className="textRegistr">Password</div>
        <input
          type="password"
          onChange={(p) => {
            const { value } = p.target;
            setPasswordValue(value);
          }}
        />
      </div>
      <div className="wrappButt">
        <button
          className="butt"
          onClick={() => {
            const values = {
              email: emailValue,
              password: passwordValue,
            };
            // handleClick();
            console.log("values", values);
          }}
        >
          Sign in
        </button>
      </div>
      <div>email: {emailValue}</div>
      <div>password: {passwordValue}</div>
    </div>
  );
};
export default Form;
