import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm.jsx";
import Authenticate from "./components/Authenticate.jsx";
function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <div>
        <SignUpForm token={token} setToken={setToken} />
        <Authenticate token={token} setToken={setToken} />
      </div>
    </>
  );
}

export default App;
