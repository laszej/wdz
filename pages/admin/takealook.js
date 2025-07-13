import Link from "next/link";

export default function RecommendationsPage() {
  return (
    <div>
      <h1>Przejrzyj również to</h1>

      <ul>
        <li><Link href="/chartExample">Stary wykres wyników wyborów</Link></li>
        <li><Link href="/another">pozniej dodam</Link></li>
        <li><Link href="/another">pozniej dodam</Link></li>
        <li><Link href="/another">pozniej dodam</Link></li>
      </ul>
    </div>
  );
}
