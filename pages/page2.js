import React from 'react';

const Page2 = () => {
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
            ...(window.innerWidth <= 350 && { maxWidth: "350px" }) // warunkowe ustawienie szerokości dla smartfonów
          }}
          alt="WDZ Logo"
        />
      </div>
    </div>
  );
};

export default Page2;
