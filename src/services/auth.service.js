import axios from "axios";

const API_URL = "https://java-api.codeboxxtest.xyz/authenticate?email=${username}&password=${password}";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("email", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("email");
  }



  getCurrentEmail() {
    return JSON.parse(localStorage.getItem('email'));;
  }
}

export default new AuthService();