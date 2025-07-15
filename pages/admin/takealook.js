import Link from "next/link";

export default function RecommendationsPage() {
  return (
    <div>
      <h1>Przejrzyj również to</h1>

      <p>Ta strona została zbudowana od zera (jest ewolucją wielu bliźniaczych projektów).
         W teorii więc można na niej umieścić wszystko, dlatego będę wrzucał tu tylko propozycje</p>

      <ul>
        <li><Link href="/chartExample">Stary wykres wyników wyborów</Link></li>
        <li><Link href="/AnotherChart">anotherchart</Link></li>
                        
        <li><Link href="/another">pozniej dodam</Link></li>
        <li><Link href="/another">pozniej dodam</Link></li>
        <li><Link href="/another">pozniej dodam</Link></li>
        <li><Link href="/another">pozniej dodam</Link></li>
        <li><Link href="/another">pozniej dodam</Link></li>
      </ul>
    </div>
  );
}
