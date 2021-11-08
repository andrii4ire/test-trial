import { useState } from "react";
import "./styles.scss";

const Dropdown = () => {
  const [isDropdownShow, setDropdownShow] = useState(false);
  const [isShowName, setShowName] = useState();
  const [isSquare, setSquare] = useState();
  const [isClick, setClick] = useState(false);
  console.log(isClick)
  const list = ["Chapa", "Pasya", "Andrii", "Khrystyna", "Musya"];
  const squere = ["yellov", "yellov", "yellov", "yellov", "yellov", "yellov"];
  return (
    <div className="wrapp-drodown">
      <div className="selectForm">
        <div>{isShowName}</div>
        <div>{isSquare ? isSquare : 'None'}</div>
        <div
          className="selectButt"
          onClick={() => {
            console.log("yes");
            setDropdownShow(!isDropdownShow);
          }}
        ></div>
        {isDropdownShow}
      </div>

      {isDropdownShow ? (
        <div
          className="wrapp-dropdoun"
          onClick={(e) => {
            console.log(e.target.textContent);
            setShowName(e.target.textContent);
          }}
        >
          {list.map((name) => (
            <div className="text" key={name}>
              {name}
            </div>
          ))}
        </div>

      ) : null}

      <div className="colorful-square">
        {squere.map((circle, i) => (
          <div
            key={i}
            className="square"
            onClick={() => {
              setSquare(circle);
            }}
          ></div>
        ))}
      </div>

      <div onClick={()=>{
setSquare('love')
      }}>ALLLL</div>

      <div className='wrapp-buttons'>  
      {isClick? <div className='button-click-me' onClick={()=>{
           setClick(!isClick)
         }}>Click-me</div>: <div className='button-an-click' onClick={()=>{
          setClick(!isClick)
       }}>An-click-me</div>}
      </div>
    

    </div>
  );
};

export default Dropdown;
