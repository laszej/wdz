import React, { useState, useEffect } from 'react';

const Page2 = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Funkcja do aktualizacji szerokości okna
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Aktualizacja szerokości okna po zamontowaniu komponentu
    updateWindowWidth();

    // Aktualizacja szerokości okna przy każdej zmianie rozmiaru okna
    window.addEventListener('resize', updateWindowWidth);

    // Czyszczenie po odmontowaniu komponentu
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div style={{ textAlign: "center", width: "90%" }}>
        <h1 style={{ marginTop: "0" }}>Nasza dziewiątka!</h1>
        <img id="thanks"
          src="/wdz.PNG"
          style={{
            width: "100%",
            height: "auto",
            marginBottom: "20px", // dodatkowy margines na dole w widoku mobilnym
            maxWidth: "600px", // maksymalna szerokość dla zdjęcia
            display: "block", // umożliwia użycie margin: 0 auto do wyśrodkowania obrazu na większych ekranach
            margin: "0 auto", // centrowanie obrazu na większych ekranach
            ...(windowWidth <= 350 && { maxWidth: "350px" }) // warunkowe ustawienie szerokości dla smartfonów
          }}
          alt="WDZ Logo"
        />
      </div>
    </div>
  );
};

export default Page2;
