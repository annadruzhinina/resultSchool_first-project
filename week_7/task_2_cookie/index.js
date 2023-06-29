import "./index.css";

const cookieBtn = document.querySelector(".cookie-consent__button");
const cookieConsent = document.querySelector(".cookie-consent");

cookieBtn.addEventListener("click", (event) => {
  cookieConsent.classList.add("hide");
  localStorage.setItem("cookieConsentAccepted", true);
});

// Check if cookie consent was previously accepted
const isCookieConsentAccepted = localStorage.getItem("cookieConsentAccepted");
if (isCookieConsentAccepted) {
  cookieConsent.classList.add("hide");
}
