import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import Routes from "./pages/Routes";
const App = () => {
 
  return (
    <Router>
      <Switch>
        <div className="row w-100 ">
          <Routes />
          {/* <Sidebar /> */}
        </div>
      </Switch>
    </Router>
  );
};

export default App;
