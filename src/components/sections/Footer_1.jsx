
const Footer_1 = () => {
  return (

    <footer className="bg-dark text-center text-light">

      <div className="container p-4">

        <section className="mb-4">

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-facebook"></i></a>


          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-twitter"></i></a>


          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-google"></i></a>


          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-instagram"></i></a>


          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-linkedin"></i></a>


          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-github"></i></a>
        </section>


        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Inicie sesion para ver noticias</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">

                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" className="form-control" />
                  <label className="form-label" for="form5Example21">Direccion correo</label>
                </div>
              </div>

              <div className="col-auto">

                <button type="submit" className="btn btn-outline-light mb-4">
                  Suscribete
                </button>
              </div>

            </div>

          </form>
        </section>

        <section className="mb-4">
        <p>
          La mejor opcion en toda nuestra cadena de hoteles.
        </p>
      </section>
      
      <section className="">
        
        <div className="row">
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">NUESTRO HOTEL</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <article className="text-light">Sobre nosotros</article>
              </li>
              <li>
                <article className="text-light">Responsabilidad social</article>
              </li>
              <li>
                <article className="text-light">Contacto</article>
              </li>
              <li>
                <article className="text-light">Trabaja con nosotros</article>
              </li>
            </ul>
          </div>
          

          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">ATENCIÓN AL CLIENTE</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <article className="text-light">Libro de reclamaciones</article>
              </li>
              <li>
                <article className="text-light">Solicitud de derechos arco</article>
              </li>
              <li>
                <article className="text-light">Comprobantes electrónicos</article>
              </li>
              <li>
                <article className="text-light">Preguntas frecuentes</article>
              </li>
            </ul>
          </div>
          

          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">RESERVAS</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <article className="text-light">Central de Reservas:</article>
              </li>
              <li>
                <article className="text-light">+51 352145254</article>
              </li>
              <li>
                <article className="text-light">Correo de Reservas:</article>
              </li>
              <li>
                <article className="text-light">correo@dominio.com</article>
              </li>
            </ul>
          </div>
         

          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">LLÁMANOS GRATIS</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <article className="text-light">Provincias</article>
              </li>
              <li>
                <article className="text-light">0 800 71899</article>
              </li>
              <li>
                <article className="text-light">EEUU</article>
              </li>
              <li>
                <article className="text-light">866 220 4434</article>
              </li>
            </ul>
          </div>
          
        </div>
        
      </section>

      </div>
      <div class="text-center p-3 text-light" >
      © 2022 Todos los derechos reservados

    </div>
    </footer>

  );
};


export default Footer_1;