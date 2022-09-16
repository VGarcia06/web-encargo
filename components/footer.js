import Link from "next/link"

export default function Footer() {
  return (
    <section className="section bg-secundario py-5">
      <div className="container">
        <footer className="">
          <div className="row text-white align-items-end">
            <div className="col-6 col-md-7">
              <ul className="list-unstyled d-flex text-white">
                <Link href="/">
                  <a className="nav-link">Inicio</a>
                </Link>
                <Link href="#quienes-somos">
                  <a className="ms-3 nav-link">¿Quiénes somos?</a>
                </Link>
                <Link href="#como-contratar">
                  <a className="ms-3 nav-link">¿Como contratar?</a>
                </Link>
                <Link href="/couriers">
                  <a className="ms-3 nav-link">Couriers</a>
                </Link>
                <Link href="#contacto">
                  <a className="ms-3 nav-link">Contacto</a>
                </Link>
              </ul>
            </div>
            {/* <div className="col-6 col-md-2 mb-3">
              <a href="#" className="nav-link p-0">Terminos</a>
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <a href="#" className="nav-link p-0">Terminos</a>
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <a href="#" className="nav-link p-0">Terminos</a>
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div> */}

            <div className="col-md-4 offset-md-1 mb-3">
              <form>
                {/* <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p> */}
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <input id="newsletter1" type="text" className="form-control" placeholder="Correo electrónico" />
                  <button className="btn btn-primario text-white" type="button">Suscríbete</button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className="text-white">© 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex text-white">
              <li className=""><a href="#" className="nav-link p-0">Terminos</a></li>
              <li className="ms-3"><a href="#" className="nav-link p-0">Privacidad</a></li>
              <li className="ms-3"><a href="#" className="nav-link p-0">Cookies</a></li>
            </ul>
          </div>
        </footer>
      </div >
    </section >
  )
}