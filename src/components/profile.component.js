import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
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

  render() {

    return (

      <div className="Profile">
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
    );
  }
}