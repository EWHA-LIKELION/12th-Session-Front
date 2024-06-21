import React, { useState, useEffect } from "react";
import Timer from "./component/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>타이머 클릭</button>
    </>
  );
}

export default App;
