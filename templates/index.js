let preHome = document.createElement("script");
preHome.setAttribute("type", "text/html");
preHome.innerHTML = "<h1>Start1 <%= where %>!</h1>";
export const home = preHome;
console.log(home);
let preExample1 = document.createElement("script");
preExample1.setAttribute("type", "text/html");
preExample1.innerHTML =
  "<h1><%= title %></h1><% for (let i of title) { %><span><%= i %></span><% } %>";
export const example1 = preExample1;

let preExample2 = document.createElement("script");
preExample2.setAttribute("type", "text/html");
preExample2.innerHTML =
  '<h1><%= title %></h1><button class="my-button">Click me <%= counter %></button>';
export const example2 = preExample2;
