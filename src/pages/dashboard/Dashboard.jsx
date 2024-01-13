import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React App Example</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Link to={"/vault"}>VAULT</Link>
    </>
  );
}

export default Dashboard;
