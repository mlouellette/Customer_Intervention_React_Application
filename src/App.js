//import logo from './logo.svg';
import './App.css';

//import Hello from './components/Hello'
//import Message from './components/Message'
// import Profile from './components/Profile';
//import Counter from './components/Counter';
import Container from "react-bootstrap/Container";
import React from 'react'
import './App.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function App() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="signInForm" className="text-center w-50 formBackground">

         <img
           className="mb-4 rocket-logo"
           src={"R2.png"}
           alt="Bootstrap 5" />
          <h1 class="mb-3 fs-3 fw-normal">SIGN IN</h1>
          <Form.Group class="mb-3" controlId="sign-in-email-adress">
            <Form.Control type="email" size='fs-3 lg' placeholder="Email adress" autoComplete="username" className="position-relative" />
          </Form.Group> 

          <Form.Group class="mb-3" controlId="sign-in-password"> 
            <Form.Control type="password" size='fs-3 lg' placeholder="Password" autoComplete="current-password" className="position-relative" />
          </Form.Group>

          <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
            <Form.Check label="Remember me" />
          </Form.Group>

           <div className="d-grid">
         <Button variant="primary" onClick="" className="btn-danger" size="lg">Sign in</Button>
        </div>
        <p className="mt-5 text-muted">&copy; 2022-2023</p>

        </Form>
       
    </Container>
  );
}


export default App;
