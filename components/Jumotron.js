import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Jumbotron() {
  const router = useRouter();

  return (
    <div className="jumotron">
      <div className="jumbotron jumbotron-fluid" id="jumbotron">
        <div className="container">
          <h1 className="display-4" style={{marginBottom: "1rem"}}>Wichrowe do Zwycięstwa</h1>
          <p className="lead">    Witamy wszystkich serdecznie na naszej stronie! Jesteśmy grupą 9-ciu z 15-tu radnych Osiedla Nowe Winogrady Północ. Reprezentujemy również Zarząd Osiedla. Na tej stronie: </p>
        <ul style={{marginLeft: "auto"}}>

          <li style={{display:"flex"}}>
            <Image src="/check.svg"
           alt="checked"
            height={20}
             width={20}/>
            <h5 className ="jumboItems">Możesz zabrać głos w sprawie Osiedla</h5>
             </li>

          <li style={{display:"flex"}}>
            <Image src="/check.svg"
             alt="checked"
              height={20} 
              width={20}/>
              <h5 className="jumboItems">Dyskutować z innymi użytkownikami, w tym radnymi</h5>
               </li>

          <li style={{display:"flex"}}>
            <Image src="/check.svg"
             alt="checked"
              height={20}
               width={20}/>
               <h5 className="jumboItems">Pamiętaj jednak o tym, by traktować innych z szacunkiem</h5>
                </li>

          <li style={{display:"flex"}}>
            <Image src="/check.svg"
             alt="checked"
              height={20}
               width={20}/>
               <h5 className="jumboItems">Czekamy na Wasze merytoryczne opinie</h5> </li>

    </ul>
    <div style={{display:"flex", flexWrap: "wrap"}}>
          <h5 style={{marginTop: "0.5rem"}}>Zapraszamy do zapoznania się z <Link href="/artykuly">osiedlowymi informacjami i wydarzeniami</Link></h5>
          </div>
        </div>
      </div>
    </div>
  );
}
