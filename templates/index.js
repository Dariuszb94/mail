let preHome = document.createElement("script");
preHome.setAttribute("type", "text/html");
preHome.innerHTML =
  '<form class="login"><input class="login__input" id="username" /><input class="login__input"  id="password"/><button class="login__submit">Submit</button></form>';
export const home = preHome;

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
