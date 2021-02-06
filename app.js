import { route } from "./router";
import { home } from "./templates/index.js";
import { success } from "./templates/index.js";
import { notFound } from "./templates/index.js";
import "./styles.css";
route("/", home.innerHTML, function () {
  window.location.href = "/?#/";
  this.username = "";
  this.password = "";

  this.$on(".login-form__input", "change", () => {
    this.username = document.querySelector("#username").value;
    this.password = document.querySelector("#password").value;
  });

  this.$on(".login-form__submit", "click", () => {
    if (this.username && this.password) {
      send();
    } else {
      !this.username
        ? document.querySelector("#username").classList.add("wrong-input")
        : document.querySelector("#username").classList.remove("wrong-input");
      !this.password || this.password === "error"
        ? document.querySelector("#password").classList.add("wrong-input")
        : document.querySelector("#password").classList.remove("wrong-input");
    }
  });
  const send = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: this.username,
      password: this.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://zwzt-zadanie.netlify.app/api/login?client_id=mwcZJW1qYyORxKFdUfn5Hn12UO1aDqVip2Yrj2S4TJk",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        let parsed = JSON.parse(result);
        console.log(raw);

        if (parsed.message === "Login success!") {
          window.location.href = "/?#/success";
        } else {
          document.querySelector("#password").classList.add("wrong-input");
        }
      })
      .catch((error) => console.log("error", error));
    this.$refresh();
  };
});

route("/success", success.innerHTML, function () {
  this.title = "Success!";
});

route("*", notFound.innerHTML, function () {});
