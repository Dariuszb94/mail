let preHome = document.createElement("script");
preHome.setAttribute("type", "text/html");
preHome.innerHTML =
  '<section class="login"><h1 class="login__info">Log in to your account</h1><div class="login__main"><form class="login-form"><input class="login-form__input" id="username" placeholder="type your username"/><input class="login-form__input"  id="password" placeholder="type your password"/><button class="login-form__submit">Submit</button></form></div><section>';
export const home = preHome;

let preSuccess = document.createElement("script");
preSuccess.setAttribute("type", "text/html");
preSuccess.innerHTML = '<h1 class="success-title"><%= title %></h1>';
export const success = preSuccess;

let preNotFound = document.createElement("script");
preNotFound.setAttribute("type", "text/html");
preNotFound.innerHTML = "<h1>404 Not found</h1>";
export const notFound = preNotFound;
