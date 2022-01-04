import './App.css';
import React from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import Aside from './components/Aside/Aside';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settingss from './components/Settingss/Settingss';
import {Route} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { initializeApp } from './Redux/appReducer';
import Preloader from './components/Users/preloader/Preloader';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/redux-store";
import {Provider} from "react-redux";
import withSuspense from "./Hoc/withSuspense";
import { Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {

  catchAllUnhandledErrors(promiseRejectionEvent) {
    alert("Some errors occured");
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }

    return (
    <div className="App">
      <HeaderContainer />
      <Aside />
      <div className="App_main">
        <Switch>
          <Route exact path="/social-network" render={() => <Redirect to={"/profile"} />} />
          <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
          <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/news" render={() => <News />}/>
          <Route path="/music" render={() => <Music />}/>
          <Route path="/settings" render={() => <Settingss />}/>
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="*" render={() => <div>404: NOT FOUND</div>} />
        </Switch>
      </div>
    </div>
    )
  };
}

const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store} >
          <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJSApp;