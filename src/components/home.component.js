
import Table from "./Table.js";
import React, { Component } from "react";


const token = localStorage.getItem("email");
const headerRequest = {

    headers: {
        Authorization:  `Bearer ${token}`,
      },
    };


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: [],
      isLoading:false,
      isError:false,
      
    };


  }

  // Delete the access token 
  handleLogout(event){
    event.preventDefault();
    localStorage.removeItem("email");
    window.location.href = "/";
    };


  render() {
             
    return (
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
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
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
             <Table />

        </div>
      
   )}  
  }
  
  


