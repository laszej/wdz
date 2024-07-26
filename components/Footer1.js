import React from 'react'
import Link from 'next/link'
import twitter from "../public/twitter.svg";
import facebook from "../public/facebook.svg";

import Image from 'next/image';

const Footer1 = () => {
  return (
    <footer className="bg-dark text-white py-10" id="footer" style={{width: "100%"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-4 my-1">
          <h3>Krótko o mnie</h3>
          <p style={{letterSpacing:"0.05rem"}}>Konserwatysta poszukujący wspólnej drogi do poszanowania przyrodzonej godności jednostki ludzkiej i szybkiego rozwoju gospodarczego opartego o innowacje w XXI wieku.</p>
          <p style={{letterSpacing:"0.05rem"}}>Humanizm | Wolność | Podmiotowość jednostki | Państwo dobrobytu | Innowacje w służbie ludzkości | Pro life | Rodzina |</p>
        </div>
        <div className="col-md-4 my-1">
          <h3>Dodaj komentarz</h3>
          <ul className="list-unstyled">
          <p style={{letterSpacing:"0.05rem"}}>Jeśli chcesz zadać jakieś pytanie, zgłosić jakiś istotny społecznie problem lub po prostu przywitać się i pozdrowić, możesz to zrobić bezpośrednio na stronie:  </p>
            <h4><Link href="/comments">komentarze</Link></h4>
          </ul>
        </div>
        <div className="col-md-4 my-1">
          <h3>Kontakt</h3>
          <h5>Mail:</h5>
          <h5><Link href="mailto:stanislawlaskowski87@gmail.com">stanislawlaskowski87@gmail.com</Link></h5>
          <h5 style={{marginBottom: "2rem", marginTop: "1rem"}}>Media społecznościowe:</h5>
          <div style={{minWidth: "100%",display: "flex", marginBottom:"2rem"}}>
          <h5><Link href="https://twitter.com/StLaskows"target="_blank" ><Image src={twitter} alt="Code" height={40} width={40} /></Link></h5>
          <h5><Link href="https://www.facebook.com/people/Stanis%C5%82aw-Laskowski-konserwatysta-w-Poznaniu/100091543767520/" target="_blank"><Image src={facebook} alt="Code" height={40} width={40} style={{marginLeft: "2rem"}}/></Link></h5>
         
          
          </div>

          
          
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer1