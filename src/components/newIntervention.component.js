import React, { Component } from "react";
import AuthService from "../services/auth.service";

import Form from "./Form.js";


export default class NewIntervention extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        redirect: null,
        emailReady: false,
        currentEmail: { email: "" }
      };
      
    }

    componentDidMount() {
      const currentEmail = AuthService.getCurrentEmail();
  
      if (!currentEmail) this.setState({ redirect: "/home" });
      this.setState({ currentEmail: currentEmail, emailReady: true })
    }
    
    // Deletes the access token once you logout
    handleLogout(event){
        event.preventDefault();
        localStorage.removeItem("email");
        localStorage.setItem("email", null)
        window.location.href = "/";
    };

    render() {

      return (
       <div>
        <div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src="R2.png" alt="..." height="50" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                <li class="">
                  <a class="nav-link" href="/newIntervention">New Intervention</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link logOutHover" onClick={(event) => {this.handleLogout(event)}} href="/">Log Out</a>
                </li>
        
        
              </ul>
            </div>
          </div>
        </nav>
        
        </div>
        
        <Form />
         
 
        

         </div>
      );
    }
  }