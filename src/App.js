import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import PujaPage from './pages/PujaPage';
import BookingPage from './pages/BookingPage';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/pujas" component={PujaPage} />
        <Route path="/bookings" component={BookingPage} />
      </Switch>
    </Router>
  );
};

export default App;
