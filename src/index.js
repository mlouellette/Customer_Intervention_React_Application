import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const jwt = require("jsonwebtoken")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
        "SELECT * FROM users WHERE username = ?;",
        email,
        (err, result) => {
          if (err) {
            res.send({ err: err});
        }

        const verifyJWT = (req, res, next) => {
          const token = req.headers["x-access-token"]

          if (!token) {
            res.send("Token is required")
          } else {
            jwt.verify(token, "jwtSecret", (err, decoded) => {
              if (err) {
                res.json({ auth: false, message: "Authentication failed" })
              } else {
                req.userId = decoded.id;
                next();
              }
            })
          }
        }

        app.get('/isEmailAuth', verifyJWT, (req, res)=> {
          res.send("Your are now authenticated")
        })

        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              req.session.user = result;

              const id = result[0].id
              const token = jwt.sign({id}, "jwtSecret", {
                expiresIn: 300,
              })
              req.session.user = result;

              
              res.json({auth: true, token: token, result: result });
            } else {
              res.json({
                auth: false, 
                message: "wrong email/password combination" 
              });
            }
          });

        } else {
          res.json({auth: false, message: "no email exists" });
        }
      }
  );

});
