import React from 'react';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {initializeApp} from './redux/appReduser';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Preloader from './components/common/Preloader';
import { withSuspense } from './hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/users' render = {() => <UsersContainer />}/>
        <Route path='/login' render = {() => <Login />}/>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => (
    {initialized: state.app.initialized}
);

export default compose(
  withRouter,
  connect( mapStateToProps , {initializeApp} 
    ))(App);