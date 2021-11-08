import { useState } from "react/cjs/react.development";
import "./styles.scss";
import Login from "./TaskLogin/TaskLogin";
import Registr from "./TaskRegistr/TaskRegistr";
const TaskOne = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [users, setUsers] = useState({
    iryna: { name: "iryna", password: "1234567" },
  });
  console.log("users", users);

  return (
    <div className="wrapp">
      {showLogin ? (
        <Login setShowLogin={setShowLogin} users={users} />
      ) : (
        <Registr
          setShowLogin={setShowLogin}
          users={users}
          setUsers={setUsers}
        />
      )}
    </div>
  );
};
export default TaskOne;
