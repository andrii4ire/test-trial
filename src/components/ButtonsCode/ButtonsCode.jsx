import { useState } from "react/cjs/react.development";
import "./styles.scss";

const ButtonsCode = () => {
  const [isClikMe, setClikMe] = useState(false);
  return (
    <div>
      {isClikMe ? (
        <div className="butt-clik" onClick={() => {
            setClikMe(false)
        }}>
          Clik
        </div>
      ) : (
        <div className="butt-an-clik" onClick={() => {
            setClikMe(true)
        }}>
          An-clik
        </div>
      )}
    </div>
  );
};

export default ButtonsCode;
