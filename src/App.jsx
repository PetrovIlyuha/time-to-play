import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Upcoming from './pages/Upcoming';
import Newest from './pages/Newest';
import GameDetails from './components/GameDetails';
import { GlobalStyles } from './components/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path='/' exact component={Main} />
          <Route path='/upcoming' component={Upcoming} />
          <Route path='/newest' component={Newest} />
          <Route path='/game/:id' component={GameDetails} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
