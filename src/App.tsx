import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AppBar } from "./components/AppBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#0e0f14] min-h-screen">
        <div>
          <AppBar />
        </div>
      </div>
    </>
  );
}

export default App;
