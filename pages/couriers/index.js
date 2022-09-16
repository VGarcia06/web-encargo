import Layout from "../../components/layout";

export default function Index() {
  return (
    <Layout>
      <section className="section py-5">
        <div className="container py-2">
          <div className="row gy-0 py-5 gy-3">
            <div className="col-lg-4">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input type="text" className="form-control" placeholder="Ingresa origen" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input type="text" className="form-control" placeholder="Ingresa destino" />
              </div>
            </div>
            <div className="col-lg-3">
              <select className="form-select">
                <option defaultValue>Elige tipo de vehículo</option>
                <option value="1">Moto</option>
                <option value="2">Auto</option>
                <option value="3">Camión</option>
              </select>
            </div>
            <div className="col-lg-1 d-grid">
              <button type="button" className="btn btn-secundario">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="card">
                <div class="card-head text-center mt-4">
                  <svg class="bd-placeholder-img rounded-circle" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                  <p><span class="badge text-bg-primario fw-semibold text-white mt-3">Auto</span></p>
                  <h2 class="fw-semibold">Olva Courier</h2>
                </div>
                <div class="card-body mx-4">
                  <div className="row row-cols-1 row-cols-sm-2 g-2">
                    <div className="d-flex flex-column gap-1">
                      <label className="fw-semibold text-muted">Precio</label>
                      <h5 className="">PEN 100.00</h5>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <label className="fw-semibold text-muted">Peso máximo</label>
                      <h5 className="">8 kg.</h5>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <label className="fw-semibold text-muted">Tiempo de entrega</label>
                      <h5 className="">3 días</h5>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <label className="fw-semibold text-muted">Medida máxima</label>
                      <h5 className="">40 cm. lados</h5>
                    </div>
                  </div>
                </div>
                <p className="d-flex justify-content-center mb-4">
                  <a class="btn icon-circle icon-lg btn-primario text-white" href="#"><i class="bi bi-whatsapp"></i></a>
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-head text-center mt-4">
                  <svg class="bd-placeholder-img rounded-circle" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                  <p><span class="badge text-bg-primario fw-semibold text-white mt-3">Auto</span></p>
                  <h2 class="fw-semibold">Olva Courier</h2>
                </div>
                <div class="card-body mx-4">
                  <div className="row row-cols-1 row-cols-sm-2 g-2">
                    <div className="d-flex flex-column gap-1">
                      <label className="fw-semibold text-muted">Precio</label>
                      <h5 className="">PEN 100.00</h5>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <label className="fw-semibold text-muted">Peso máximo</label>
                      <h5 className="">8 kg.</h5>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <label className="fw-semibold text-muted">Tiempo de entrega</label>
                      <h5 className="">3 días</h5>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <label className="fw-semibold text-muted">Medida máxima</label>
                      <h5 className="">40 cm. lados</h5>
                    </div>
                  </div>
                </div>
                <p className="d-flex justify-content-center mb-4">
                  <a class="btn icon-circle icon-lg btn-primario text-white" href="#"><i class="bi bi-whatsapp"></i></a>
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-head text-center mt-4">
                  <svg class="bd-placeholder-img rounded-circle" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                  <p><span class="badge text-bg-primario fw-semibold text-white mt-3">Auto</span></p>
                  <h2 class="fw-semibold">Olva Courier</h2>
                </div>
                <div class="card-body mx-4">
                  <div className="row row-cols-1 row-cols-sm-2 g-2">
                    <div className="d-flex flex-column gap-1">
                      <label className="fw-semibold text-muted">Precio</label>
                      <h5 className="">PEN 100.00</h5>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <label className="fw-semibold text-muted">Peso máximo</label>
                      <h5 className="">8 kg.</h5>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <label className="fw-semibold text-muted">Tiempo de entrega</label>
                      <h5 className="">3 días</h5>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <label className="fw-semibold text-muted">Medida máxima</label>
                      <h5 className="">40 cm. lados</h5>
                    </div>
                  </div>
                </div>
                <p className="d-flex justify-content-center mb-4">
                  <a class="btn icon-circle icon-lg btn-primario text-white" href="#"><i class="bi bi-whatsapp"></i></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}