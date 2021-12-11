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

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
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
        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
        <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
        <Route path="/news" render={() => <News />}/>
        <Route path="/music" render={() => <Music />}/>
        <Route path="/settings" render={() => <Settingss />}/>
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
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