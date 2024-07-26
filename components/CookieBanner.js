import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  const [isTrackingEnabled, setIsTrackingEnabled] = useState(false);

  useEffect(() => {
    const trackingEnabled = localStorage.getItem("trackingEnabled");
    if (trackingEnabled === "false") {
      setIsTrackingEnabled(false);
    }
  }, []);

  useEffect(() => {
    if (isTrackingEnabled) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-F9MXYC0MDZ`;
      script.async = true;
      document.body.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-F9MXYC0MDZ");
    }
  }, [isTrackingEnabled && true]);

  const handleTrackingToggle = () => {
    setIsTrackingEnabled((prev) => !prev);
    localStorage.setItem("trackingEnabled", !isTrackingEnabled);
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Zatwierdź wybór"
      buttonWrapperClasses="d-flex justify-content-end"
      cookieName="myCookie"
      style={{ background: "#222", }}
      buttonStyle={{ color: "#fff", fontSize: "16px", background:"green", display: isTrackingEnabled? "block" : "none"  }}
      expires={150}
    >
      <div>
        Ta strona generuje pliki cookies w celu analizy ruchu na witrynie oraz zachowań użytkowników, identyfikuje urządzenia użytkownika (system operacyjny, roździelczość ekranu etc) oraz jego przybliżoną lokalizację. <br/>
        <a href="https://support.google.com/analytics/answer/12159447?hl=pl" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline" }}>
          Dowiedz się więcej
        </a>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isTrackingEnabled} onChange={handleTrackingToggle} />
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celach analitycznych
        </label>
      </div>
    </CookieConsent>
  );
};

export default CookieBanner;