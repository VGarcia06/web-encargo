export default function Contact() {
  return (
    <section id="contacto" className="section py-5">
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center">
            <h2 className="display-5 fw-bold mb-3">Sigamos conectados</h2>
            <p className="fs-5 text-muted">
              Nunca ha sido tan fácil ponerse en contacto con nosotros. ¡Llámenos o envíenos un correo electrónico y nos pondremos en contacto con usted lo antes posible!
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-4 text-center p-1">
            <div className="d-flex justify-content-center mb-3">
              <span className="icon-circle icon-lg bg-primario text-white fw-semibold "><i className="bi bi-envelope"></i></span>
            </div>
            <h2 className="fw-bold mb-3">Email</h2>
            <p className="fs-5 text-muted">contacto@gmail.com</p>
          </div>

          <div className="col-lg-4 col-md-4 text-center p-1">
            <div className="d-flex justify-content-center mb-3">
              <span className="icon-circle icon-lg bg-primario text-white fw-semibold"><i className="bi bi-telephone"></i></span>
            </div>
            <h2 className="fw-bold mb-3">Teléfono</h2>
            <p className="fs-5 text-muted">+51 987-654-321</p>
          </div>

          <div className="col-lg-4 col-md-4 text-center p-1">
            <div className="d-flex justify-content-center mb-3">
              <span className="icon-circle icon-lg bg-primario text-white fw-semibold"><i className="bi bi-grid-3x3"></i></span>
            </div>

            <h2 className="fw-bold mb-3">Redes Sociales</h2>
            <p>
              <a href=""><i className="bi bi-linkedin text-primario icon-social"></i></a>
              <a href=""><i className="ms-3 bi bi-twitter text-primario icon-social"></i></a>
              <a href=""><i className="ms-3 bi bi-instagram text-primario icon-social"></i></a>
            </p>
          </div>
        </div>
      </div >
    </section >
  )
}