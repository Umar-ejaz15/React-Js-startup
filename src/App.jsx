import React, { useState } from "react";
function App() {
  const [obj, setobj] = useState({ name: "umar", ban: false });
  // const [score, setscore] = useState(1);

  return (
    <>
      <h1>Name : {obj.name} </h1>
      <h1>ban : {obj.ban.toString()} </h1>

      <button
        className={`px-4 py-2 ${obj.ban ? "bg-red-500" : "bg-blue-500"}`}
        onClick={() => setobj({ ...obj, ban: !obj.ban })}
      >
        update
      </button>
    </>
  );
}

export default App;
