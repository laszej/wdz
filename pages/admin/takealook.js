import Link from 'next/link';

export default function RecommendationsPage() {
  return (
    <div className="container">
      <h1>Przejrzyj również to</h1>
      
      <div className="links-container">
        {/* Dodaj tutaj linki do istniejących podstron */}
        <Link href="/chartExample" className="link-box">
          <div>stary wykres wyników wyborów</div>
        </Link>
        
        <Link href="/services" className="link-box">
          <div>Usługi</div>
        </Link>
        
        <Link href="/contact" className="link-box">
          <div>Kontakt</div>
        </Link>
        
        <Link href="/products" className="link-box">
          <div>Produkty</div>
        </Link>
        
      </div>

    </div>
  );
}