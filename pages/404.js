import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      {" "}
      <h1> Nie ma takiej strony</h1>{" "}
      <h3>Sprawdź poprawność wpisanego adresu lub</h3>
      <Link href="/">Kliknij tutaj, by wrócić na stronę główną</Link>
    </div>
  );
};

export default PageNotFound;
