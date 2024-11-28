import "../css/app.css";
import "../scss/style.scss";
import { CookieConsent } from "./cookie-consent";
/********** Paste your code here! ************/

// window.onload = () => {
//   console.log("Paste your code here!");
//   CookieConsent.init();
// };

document.addEventListener("DOMContentLoaded", () => {
  CookieConsent.init();
});

