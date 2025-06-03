import React from 'react'
import Link from 'next/link'

const Footer1 = () => {
  return (
    <footer className="bg-dark text-white py-10" id="footer" style={{width: "100%"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-4 my-1">
          <h3>Krótko o nas</h3>
          <p style={{letterSpacing:"0.05rem"}}>12 maja 2024 r. mieszkańcy os. Zwycięstwa i os. Wichrowe Wzgórze wybrali nas
          do Rady Osiedla Nowe Winogrady Północ - Jednostki Pomocniczej Miasta Poznania gdzie posiadamy stabilną większość dla dobra Mieszkańców</p>

        </div>
        <div className="col-md-4 my-1">
          <h3>Dodaj komentarz</h3>
          <ul className="list-unstyled">
          <p style={{letterSpacing:"0.05rem"}}>Jeśli chcesz przekazać swoje wrażenia dotyczące strony, zgłosić pilny problem lub zaproponować coś konstruktywnego, to możesz zrobić to tutaj</p>
            <h4><Link href="/comments">komentarze</Link></h4>
          </ul>
        </div>
        <div className="col-md-4 my-1">
          <h3>Kontakt</h3>
          <p>Facebook</p>
          <h5><Link href="https://www.facebook.com/profile.php?id=61558737601369">Nasza strona na fb</Link></h5>
          <p>mail</p>
          <p>
         <a href="mailto:mail@mail.com">mail@mail.com</a>
          </p>
          
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer1