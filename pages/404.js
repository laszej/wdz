import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      {" "}
      <h1> Nie ma takiej strony</h1>{" "}
      <h3>Myślisz, że coś tutaj cwaniaku znajdziesz? <b>ZNAJDZIESZ!!!</b> Problemy, jeśli nie wrócisz na stronę główną.</h3>
      <Link href="/">Strona startowa</Link>
    </div>
  );
};

export default PageNotFound;
