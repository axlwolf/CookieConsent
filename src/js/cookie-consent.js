export const CookieConsent = (() => {
    console.log("CookieConsent");
    /*
     *   DOM refs
     *
     * */
    const $cookieConsentContainer = document.querySelector(".cookie-consent");
    const $acceptCookieBtn = document.getElementById("cookieConsent");
    const $closeCookieConsentContainer = $cookieConsentContainer.querySelector(".fa-window-close");
    let cookieAccepted = false;

    const init = () => {
        console.log("Init CookieConsent app");
        if (localStorage.getItem('cookieConsent') === "true") {
            // TODO: hide the container correctly, there is a bug when the windows reloads the content
            hideCookieConsentContainer()
            return;
        }
        eventHandlers()
    };

    const eventHandlers = () => {
        $acceptCookieBtn.addEventListener("click", () => {
            cookieAccepted = true;
            hideCookieConsentContainer()
            localStorage.setItem("cookieConsent", cookieAccepted);
        });

        $closeCookieConsentContainer.addEventListener("click", hideCookieConsentContainer);
    };

    const hideCookieConsentContainer = () => {
        $cookieConsentContainer.classList.add("hidden");
    }

    return {
        init,
    };
})();
