//
//

import React, { useState } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Chat from './components/Chat';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.scss';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Login>
            <Header />
            <div className='app__body'>
              <Sidebar />
              <Switch>
                <Route path='/room/:roomId'>
                  <Chat />
                </Route>
                <Route path='/'>
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </Login>
        )}
      </Router>
    </div>
  );
}

export default App;
