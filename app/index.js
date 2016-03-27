import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from 'components/App';

ReactDOM.render((
  <Router history={ hashHistory }>
    <Route path='/' component={ App }>
      <Route path='/:status/:query' component={ App } />
      <Route path='*' component={ App } />
    </Route>
  </Router>
), document.getElementById('app'));
