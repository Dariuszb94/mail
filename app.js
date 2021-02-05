import { route } from "./router";
import { home } from "./templates/index.js";
import { example1 } from "./templates/index.js";
import { example2 } from "./templates/index.js";
route("/", home.innerHTML, function () {
  //route("/", "home", function () {
  this.where = "here";
  this.username = "1";
  this.password = "1";
  this.$on(".login__input", "change", () => {
    this.username = document.querySelector("#username").value;
    this.password = document.querySelector("#password").value;
  });

  this.$on(".login__submit", "click", () => {
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
        if (parsed.message === "Login success!") {
          window.location.href = "/?#/ex1";
        }
      })
      .catch((error) => console.log("error", error));
    this.$refresh();
  });
});

route("/ex1", example1.innerHTML, function () {
  //route("/ex1", "example1", function () {
  this.title = "Example 1";
});

route("/ex2", example2.innerHTML, function () {
  //route("/ex2", "example2", function () {
  this.title = "Example 2";
  this.counter = 0;
  this.$on("button", "click", () => {
    this.counter += 1;
    console.log("AAA");
    console.log(this.counter);

    this.$refresh();
  });
});

route("*", "404", function () {});
