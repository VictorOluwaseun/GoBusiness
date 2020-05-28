/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import UserService from '../services/auth.service';




export default class Home extends Component {
  render() {
    return (
            <div className="container">
                <div className="row">
                <div className="col-sm-12 text-center py-5">
                    <h1>Welcome to GoBusiness</h1>
                    <h4>A Platform for SMEs Investment</h4>
                    <NavLink to="/signup"><button className="btn btn-primary px-5 py-2 my-3 start shadow">Get Started</button></NavLink>
                </div>
          
                </div>
            </div>
               
           

    );
  };
};
