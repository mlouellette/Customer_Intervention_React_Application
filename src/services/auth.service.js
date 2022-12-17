class AuthService {
  login(email, password) {
    return fetch("https://java-api.codeboxxtest.xyz/authenticate?email=" + email + "&password=" + password, {
        email,
        password
      })

      .then(response => response.json())
      .then(data => {

        if (data.access_token) {
          localStorage.setItem("email", data.access_token);
          
        }

        return data;
        

      });

  }

  logout() {
    localStorage.removeItem("email");

  }

  getCurrentEmail() {
    return JSON.parse(localStorage.getItem("user"));;
  }
}

export default new AuthService();