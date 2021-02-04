import { route } from "./router";
import { home } from "./templates/index.js";
import { example1 } from "./templates/index.js";
import { example2 } from "./templates/index.js";
route("/", home.innerHTML, function () {
  //route("/", "home", function () {
  this.where = "here";
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
