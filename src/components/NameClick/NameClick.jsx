import { useState } from "react/cjs/react.development";
import "./styles.scss";

const NameClick = () => {
  const [isText, setText] = useState("It will be text here");
  const [showText, setShowText] = useState("");
  const [text, setTextClick] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="wrapp-for-buttons">
        <div className="form-text-show ">{isText}</div>

        <div className="buttons">
          <div
            className="text"
            onClick={() => {
              setText("I");
            }}
          >
            I
          </div>
          <div
            className="text"
            onClick={() => {
              setText("Love");
            }}
          >
            Love
          </div>
          <div
            className="text"
            onClick={() => {
              setText("You");
            }}
          >
            You
          </div>
        </div>
      </div>

      <div className="blok">
        <input
          type="text"
          onChange={(p) => {
            const { value } = p.target;
            setShowText(value);
          }}
        />
        {showText}
      </div>

      <div className="blok-button">
        <input
          type="text"
          onChange={(p) => {
            const { value } = p.target;
            setTextClick(value);
          }}
        />
        <div
          className="butt-text"
          onClick={() => {
            console.log("values");
            alert(text);
          }}
        >
          ok
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Name"
          checked={name}
          onChange={(e) => {
            console.log(111, e.target.value);
            setName(e.target.value);
          }}
        />
        <input type="password" placeholder='Password' checked={password} onChange={(p)=>{
          setPassword(p.target.value)
        }} />
        <div
          className="butt-name-pass"
          onClick={() => {
            console.log(name);
            console.log(password);
            if (name.length > 4 && name.length < 8 && password.length>6 && password.length<10) {
              console.log("name yes validate");
              return true;
            } else {
              return false;
            }
          }}
            
        >
          =)
        </div>
      </div>
    </div>
  );
};

export default NameClick;
