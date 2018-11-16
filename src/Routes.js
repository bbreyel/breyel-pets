import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomePage from './components/welcomePage/WelcomePage';
import ViewAllPage from './components/pets/viewAllPage/ViewAllPage';
import ProfilePage from './components/pets/profilePage/ProfilePage';
import ErrorPage from './components/errorPage/ErrorPage';
import NavBar from './components/layout/navigation/NavBar';

function BasicExample(props) {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={WelcomePage} />
        <Route path="/all" component={ViewAllPage} />
        <Route path="/pets/:id" component={ProfilePage} />
        <Route path="/error" component={ErrorPage} />
      </div>
    </Router>
  );
}

export default BasicExample;