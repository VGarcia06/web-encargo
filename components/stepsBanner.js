import Image from "next/image"

export default function StepsBanner() {
  return (
    <section id="como-contratar" className="section bg-secundario py-5" >
      <div className="container py-5">
        <div className="row gy-3">
          <div className="col-lg-6 text-center">
            <Image src="https://dummyimage.com/400x400/" className="rounded d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={400} height={400}></Image>
          </div>
          <div className="col-lg-6">
            <h1 className="fw-bold text-white pb-4">Gain more insight into how people use your</h1>
            <div className="row row-cols-1 row-cols-sm-2 gy-4">
              <div className="d-flex flex-column gap-2">
                <span className="icon-circle icon-lg bg-primario text-white fw-semibold mb-2">1</span>
                <h4 className="mb-0 text-white">Featured title</h4>
                <p className="text-white">Paragraph of text beneath the heading to explain the heading.</p>
              </div>
              <div className="d-flex flex-column gap-2">
                <span className="icon-circle icon-lg bg-primario text-white fw-semibold mb-2">2</span>
                <h4 className="mb-0 text-white">Featured title</h4>
                <p className="text-white">Paragraph of text beneath the heading to explain the heading.</p>
              </div>
              <div className="d-flex flex-column gap-2">
                <span className="icon-circle icon-lg bg-primario text-white fw-semibold mb-2">3</span>
                <h4 className="mb-0 text-white">Featured title</h4>
                <p className="text-white">Paragraph of text beneath the heading to explain the heading.</p>
              </div>
              <div className="d-flex flex-column gap-2">
                <span className="icon-circle icon-lg bg-primario text-white fw-semibold mb-2">4</span>
                <h4 className="mb-0 text-white ">Featured title</h4>
                <p className="text-white">Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}