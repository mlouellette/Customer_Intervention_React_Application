
import Table from "./Table.js";
import React, { Component } from "react";


  const token = localStorage.getItem("email");
  console.log(token)
  const headerRequest = {

    headers: {
        Authorization:  `Bearer ${token}`,
      },
    };

// import Table from "./components/Table.";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: [],
      isLoading:false,
      isError:false,
      
    };


  }
 

 
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
   




{/* <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Building</th>
      <th scope="col">Battery</th>
      <th scope="col">Column</th>
      <th scope="col">Elevator</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>  */}



</div>
      
   )}  
  }
  
  


