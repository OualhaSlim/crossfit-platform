import React from "react";

import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="ui container">
      <Navbar isLoggedIn={false} />
    </div>
  );
};

export default App;
