import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getPostsAysnc } from './redux/posts';
import { Posts, Nav } from './components';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const getCategory = ({ params }) => {
  // determine weather we are on the home page
  const category = params.category ? params.category : 'pics';
  store.dispatch(getPostsAysnc(category))
}
render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Nav>
          <Route exact path='/' render={({ match }) => {
              getCategory(match);
              return <Posts />
            }}
          />
          <Route path='/category/:category' render={({ match }) => {
              // use redux thunk to obtain info
              getCategory(match);
              return <Posts />
            }}
          />
          <Route path='/likes'/>
        </Nav>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
