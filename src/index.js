import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import Login from './pages/Login';
import Home from './pages/Home';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
const history = createBrowserHistory();

class Main extends React.Component{
	render(){
		return(
			<Router history={history}>
				<Route exact path={"/"} component={Login} />
				<Route exact path={"/home"} component={Home} />
			</Router>
		);
	}
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Main />
      </Provider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
