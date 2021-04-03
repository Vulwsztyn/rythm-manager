import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { reducer } from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/links" children={<div>test</div>} />
            <Route
              path="/"
              children={
                <App
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              }
            />
            <Route
              path=""
              children={
                <App
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              }
            />
          </Switch>
        </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
