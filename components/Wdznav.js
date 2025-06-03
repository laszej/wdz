import Link from "next/link";
import Image from "next/image";
import twitter from "../public/twitter.svg";
import facebook from "../public/facebook.svg";
import logo from "../public/victory.svg";


const Wdznav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      style={{ display: "flex", alignItems: "spaceEvenly", minHeight: "5rem" }}
    >
      <div className="container-fluid">
        <Image
          src={logo}
          alt="logo"
          height={100}
          width={200}
          marginLeft={"1rem"}
        />
        <div style={{ display: "flex", alignItems: "center", marginLeft: "3rem" }}>
          <h5
            style={{
              fontWeight: "bold",
              color: "#00B8D4",
              letterSpacing: "0.05rem",
              marginTop: "0.5rem",
              marginLeft: "1rem",
            }}
          >
            Radni Grupy Wichrowe do Zwycięstwa
          </h5>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <div className="dropdown nav-item bg-dark-custom" id="dropdown">
              <ul className="dropdown-menu" style={{ backgroundColor: "#212529", flexDirection: "column-reverse" }} aria-labelledby="dropdownMenuButton">
                <li><Link href="/page3" className="dropdown-item" style={{ color: "white", backgroundColor: "#212529" }}>Nowy pełnomocnik</Link></li>
              </ul>
            </div>

            <li className="nav-item">
              <Link href="/chartExample" className="nav-link">Wybory 2024</Link>
            </li>

            <li className="nav-item">
              <Link href="/page2" className="nav-link">O nas</Link>
            </li>
            <li className="nav-item">
              <Link href="/page3" className="nav-link">Nasz blog</Link>
            </li>
            <li className="nav-item">
              <Link href="/page6" className="nav-link">Panel admina</Link>
            </li>


            <div className="nav-item ms-3" id="socials">
              <Link
                href="https://www.facebook.com/profile.php?id=61558737601369"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <Image src={facebook} alt="Facebook" height={20} width={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <Image src={twitter} alt="Twitter" height={20} width={20} className="twitter" />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Wdznav;
