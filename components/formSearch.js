import Image from "next/image";

export default function FormSearch() {
  const showModal = () => {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#exampleModal");

    myModal.show();
  };
  return (
    <section className="section py-5">
      <div className="container py-3">
        <div className="row gy-3">
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
            {/* <button type="button" className="btn btn-secundario">
              <i className="bi bi-search"></i>
            </button> */}
            <button type="button" className="btn btn-secundario" onClick={showModal}>
              <i className="bi bi-search"></i>
            </button>
            {/* Inicio Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content text-center">
                  <div className="modal-body text-center p-3">
                    <div className="d-flex justify-content-end">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <Image src="https://dummyimage.com/100x24/" alt="Logo" width={100} height={24}></Image>
                    <p className="display-5 fw-normal modal-tittle my-4 text-primario">Suscríbete ahora</p>
                    <p>¡Y recibe nuestras ultimas noticias!</p>
                  </div>
                  {/* <div className="modal-footer justif-content-start bg-primario">
                    <input type="email" className="form-control w-50" id="exampleFormControlInput1" placeholder="name@example.com" /><br />
                    <p> Contenido de prueba</p>
                  </div> */}
                  <div className="d-flex flex-column align-items-center bg-primario rounded-bottom py-5">
                    <input type="email" className="input-popup" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com" />
                    {/* <button className="button-popup mt-4"> Sucríbete</button> */}
                    <button type="button" className="btn btn-light text-primario w-50 fw-bold mt-4">Suscríbete</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Fin Modal */}
          </div>
        </div>
      </div>
    </section >


  )
}