import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";

import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentEmail: undefined,
    };
  }

  componentDidMount() {
    const email = AuthService.getCurrentEmail();

    if (email) {
      this.setState({
        currentEmail: email,
        showModeratorBoard: email.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: email.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentEmail: undefined,
    });
  }

  render() {
    const { currentEmail, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />

          </Routes>
        </div>
      </div>
    );
  }
}

export default App;


// function App() {

  // const [emailReg, setEmailRed] = useState("");
  // const [passwordReg, setPasswordReg] = useState("");

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const [loginStatus, setLoginStatus] = useState(false);

  // Axios.defaults.withCredentials = true;

  // const login = () => {
  //   Axios.post("https://localhost:3000/login", {
  //     email: email,
  //     password: password,
  //   }).then((response) => {
  //     if (!response.data.auth) {
  //       setLoginStatus(false);
  //     } else {
  //       console.log(response.data);
  //       localStorage.setItem("token", response.data.token);
  //       setLoginStatus(true);
  //     }
  //   });
    
  // };

  // const emailAuthenticated = () => {
  //   Axios.get("https://localhost:3000/isEmailAuth", {
  //     headers: {
  //       "x-acess-token": localStorage.getItem("token")

  //     }
  // }).then((response) => {
  //   console.log(response);
  // });

  // }


//   return (
//     <Container id="main-container" className="d-grid h-100">
//       <Form id="signInForm" className="text-center w-50 formBackground">

//          <img
//            className="mb-4 rocket-logo"
//            src={"R2.png"}
//            alt="Bootstrap 5" />
//           <h1 class="mb-3 fs-3 fw-normal">SIGN IN</h1>
//           <Form.Group class="mb-3" controlId="sign-in-email-adress">
//             <Form.Control type="email" size='fs-3 lg' placeholder="Email adress" autoComplete="username" className="position-relative" />
//           </Form.Group> 

//           <Form.Group class="mb-3" controlId="sign-in-password"> 
//             <Form.Control type="password" size='fs-3 lg' placeholder="Password" autoComplete="current-password" className="position-relative" />
//           </Form.Group>

//           <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
//             <Form.Check label="Remember me" />
//           </Form.Group>

//            <div className="d-grid">
//          <Button variant="primary" onClick={login} className="btn-danger" size="lg">Sign in</Button>
//         </div>

//         {loginStatus && <button onclick={emailAuthenticated}>Check if Authenticated</button>}

//         <p className="mt-5 text-muted">&copy; 2022-2023</p>
        
        
//         </Form>
       
//     </Container>
//   );
// }


// export default App;
