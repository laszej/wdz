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
        
        {/* Dodaj więcej linków według potrzeb */}
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        
        h1 {
          color: #333;
          text-align: center;
          margin-bottom: 40px;
        }
        
        .links-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }
        
        .link-box {
          display: block;
          padding: 25px 15px;
          background-color: #f5f7fa;
          border-radius: 8px;
          text-align: center;
          text-decoration: none;
          color: #1e40af;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .link-box:hover {
          background-color: #ebeff5;
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        
        .link-box div {
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
}