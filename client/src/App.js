import React from "react";

function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_URL_API}
    </div>
  );
}

export default App;
