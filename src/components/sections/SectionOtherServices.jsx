
import imgOS1_Sauna6 from '../../assets/img/OS1-Sauna6.jpg'
import imgOS2_MasajesSPA from '../../assets/img/OS2 - MasajesSPA.jpg'
import imgOS3_Gimnasio2 from '../../assets/img/OS3 - Gimnasio2.jpg'
import imgOS4_Piscina2 from '../../assets/img/OS4 - Piscina2.jpg'
import imgOS5_Bar from '../../assets/img/OS5 - Bar.jpg'
import imgOS6_Restaurante from '../../assets/img/OS6 - Restaurante.jpg'


const SectionOtherServicies = () => {
    return (
        <section className="proyectos-recientes seccion-clara d-flex flex-column">
        
        <h3 className="seccion-descripcion">Hotel - El Oblivar les brinda servicios de Baños Sauna, Spa, Gimnasio, Piscina, Bar,
          Restaurante, para una mejor comodidad y experiencia.</h3>
        
        <div className="container text-center proyectos-contenedor">
          <div className="row">
           
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src={imgOS1_Sauna6} alt="Foto - Masajes"/>
                <div className="overlay">
                  <p>Baños Sauna</p>
                  <h4>Al vapor y al Seco</h4>
                  <div className="iconos-contenedor">
                    <a href="#" target="_blank" rel="nooper noreferrer">
                      <i className="bi bi-brightness-high"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src={imgOS2_MasajesSPA} alt="Foto - Masajes"/>
                <div className="overlay">
                  <p>Servicio de SPA</p>
                  <h4>Masajes relarantes</h4>
                  <div className="iconos-contenedor">
                    <a href="#" target="_blank" rel="nooper noreferrer">
                      <i className="bi bi-brightness-high"></i>
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src={imgOS3_Gimnasio2} alt="Foto - Masajes"/>
                <div className="overlay">
                  <p>Gimnasio</p>
                  <h4>Para mantenerse en forma</h4>
                  <div className="iconos-contenedor">
                    <a href="#" target="_blank" rel="nooper noreferrer">
                      <i className="bi bi-brightness-high"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src={imgOS4_Piscina2} alt="Foto - Masajes"/>
                <div className="overlay">
                  <p>PISCINA</p>
                  <h4>Para que disfrutes un buen momento</h4>
                  <div className="iconos-contenedor">
                    <a href="#" target="_blank" rel="nooper noreferrer">
                      <i className="bi bi-brightness-high"></i>
                    </a>  
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src={imgOS5_Bar} alt="Foto - Masajes"/>
                <div className="overlay">
                  <p>Bar</p>
                  <h4>Disfruta con las mejores bebidas</h4>
                  <div className="iconos-contenedor">
                    <a href="#" target="_blank" rel="nooper noreferrer">
                      <i className="bi bi-brightness-high"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src={imgOS6_Restaurante} alt="Foto - Masajes"/>
                <div className="overlay">
                  <p>Restaurante</p>
                  <h4>Deleita y engríe a tu paladar</h4>
                  <div className="iconos-contenedor">
                    <a href="#" target="_blank" rel="nooper noreferrer">
                      <i className="bi bi-brightness-high"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};


export default SectionOtherServicies;