import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm.jsx";
import Authenticate from "./components/Authenticate.jsx";
function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <div>
        <Authenticate token={token} setToken={setToken} />
        <SignUpForm token={token} setToken={setToken} />
      </div>
    </>
  );
}

export default App;
