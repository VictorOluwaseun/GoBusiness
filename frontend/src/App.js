/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch,Redirect, Link} from 'react-router-dom';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthService from './components/services/auth.service';

import Home from './components/views/home.component';
import SignUp from './components/auth/signup.component';
import SignIn from './components/auth/signin.component';
import ForgotPassword from './components/auth/forgotpassword.component';
import ResetPassword from './components/auth/resetpassword.component';
import Footer from './components/views/footer.component';
import Header from './components/views/header.component';
import BusinessUser from './components/dashboard/business.component';
import InvestorUser from './components/dashboard/investor.component';
import AdminUser from './components/dashboard/admin.component';
import BizDetails from './components/auth/businessDetails.component';
import Profile from './components/auth/profile.component';
import Investment from './components/auth/investments.component';
import NewInvestment from './components/auth/new.component';


// logged in user
const isLoggedIn = () => {
  return localStorage.getItem("TOKEN_KEY") !== null;
}

// Protected Route
const SecureRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props => 
      isLoggedIn() === true ? (
        <Component {...props} />
      ): (
        <Redirect to="/signin" />
      )
    }
  />
);


class App extends Component {
  componentDidUpdate(nextProps, nextState){
    console.log("update");
  }
  
  render() {
    return (
        < Router>
          <div className="container">
            <Header />
           
            <Route path="/" exact component={ Home } />
            <Route path="/business/details" component={ BizDetails }/>
            <Route path="/business" component={ BusinessUser } />
            
            <Route path="/investor" component={ InvestorUser }/>
            <Route path="/investor/investments" component={ Investment } />
            <Route path="/investor/investments/new" component={ NewInvestment } />
           
            <Switch>
                {isLoggedIn() && <Header />}
                <Route path="/signup" component={ SignUp }/>
                <Route path="/signin/:notify?" component={ SignIn } />
                <Route path="/password/forgot" component={ ForgotPassword }/>
                <Route path="/password/reset/" component={ ResetPassword }/>
                
               
                <SecureRoute path="/profile" component={ Profile } />
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}
export default App;
