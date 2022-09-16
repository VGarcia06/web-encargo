import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-primario">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          <Image src="https://dummyimage.com/100x24/" alt="Logo" width={100} height={24}></Image>
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link classname="nav-item" href="/">
              <a className="nav-link text-white" aria-current="page">Inicio</a>
            </Link>
            <Link classname="nav-item" href="#quienes-somos">
              <a className="nav-link text-white" aria-current="page">¿Quiénes somos?</a>
            </Link>
            <Link classname="nav-item" href="#como-contratar">
              <a className="nav-link text-white" aria-current="page">¿Como contratar?</a>
            </Link>
            <Link classname="nav-item" href="#beneficios">
              <a className="nav-link text-white">Beneficios</a>
            </Link>
            <Link classname="nav-item" href="#contacto">
              <a className="nav-link text-white" aria-current="page">Contacto</a>
            </Link>
            <Link classname="nav-item" href="/couriers">
              <a className="nav-link text-white" aria-current="page">Couriers</a>
            </Link>
          </ul>
          <button className="btn btn-secundario" type="submit">Contactar</button>
        </div>
      </div>
    </nav>
  )
}