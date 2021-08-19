import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import Community from './components/community';
import Mypage from './components/mypage';


function App() {
  return (
    <div className="App">
      <Router>
        <div className='Contents-wrapper'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/collection1' component={Community} />
            <Route path='/collection2' component={Mypage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

/*
<div className="App">
      <Router>
        <div className='Menu-wrapper'>
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/community'><li>Community</li></Link>
            <Link to='/mypage'><li>MyPage</li></Link>
          </ul>
        </div>
        <div className='Contents-wrapper'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/community' component={Community} />
            <Route path='/mypage' component={Mypage} />
          </Switch>
        </div>
      </Router>
    </div>
*/