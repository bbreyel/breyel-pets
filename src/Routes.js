import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from './components/welcomePage/WelcomePage';
import ViewAllPage from './components/pets/viewAllPage/ViewAllPage';
import ProfilePage from './components/pets/profilePage/ProfilePage'
function BasicExample(props) {
  return (
    <Router>
      <div>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/all" component={ViewAllPage} />
        <Route path="/pets/:id" component={ProfilePage} />
      </div>
    </Router>
  );
}

export default BasicExample;