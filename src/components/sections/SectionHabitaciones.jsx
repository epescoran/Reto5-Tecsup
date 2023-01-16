import imgCamaSimple from '../../assets/img/Cama-Simple.png'

import imgCamaDoble from '../../assets/img/Cama-Dobles.png'
import imgCamaMatrimonial from '../../assets/img/Cama-Matrimonial.png'


const SectionHabitaciones = () => {
    return (
        <section className="experiencia seccion-clara">
        <div className="container text-center">
          <div className="row">
          
            <div className="columna col-12 col-md-4">
              
              <img src={imgCamaSimple}  alt="" height="80" width="80"/>
              <p className="experiencia-titulo">Habitación Simple</p>
              <p>Amplias, cómodas, habitaciones individuales. Las habitaciones están disponibles con un encantador balcón.
                Todas nuestras habitaciones simples cuentan con TV LED de 32 pulgadas con servicio de cable. Además, tenemos
                disponible un mini bar, una caja fuerte para sus objetos de valor, una línea telefónica para llamadas
                nacionales o internacionales (por un cargo) y un escritorio cómodo.</p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">Bienvenido...!</span>
              </div>
    
            </div>
           
            <div className="columna col-12 col-md-4">
             
              <img src={imgCamaDoble}  alt="" height="80" width="80"/>
              <p className="experiencia-titulo">Habitación Doble</p>
              <p>La habitación doble Superior dispone de dos camas de dos plazas cada una, TV de pantalla plana con canales
                por cable y baño privado.
                El equipamiento de la habitación consta de: Caja fuerte, escritorio, armario, minibar, secador de pelo,
                artículos de aseo gratuitos. Alojamiento sin costo alguno para niños menores de 08 años que estén
                acompañados y compartan habitación con sus padres.</p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">Bienvenido...!</span>
    
    
              </div>
            </div>
           
            <div className="columna col-12 col-md-4">
              
              <img src={imgCamaMatrimonial}  alt="" height="80" width="80"/>
              <p className="experiencia-titulo">Habitación Matrimonial</p>
              <p>Nuestras habitaciones matrimoniales son de 2 tipos: Matrimonial (Standard) o Matrimonial King. Ya sea por
                motivos de placer o negocios, nuestras habitaciones matrimoniales están designadas para cumplir todas sus
                exigencias y hacer de su estadía en nuestro hotel la más placentera experiencia. Cuentan con TV LED de 32
                pulgadas con servicio de cable. Además, tenemos
                disponible un mini bar</p>
              <div className="badges-contenedor">
                <span className="badge text-bg-primary">Bienvenido...! </span>
    
              </div>
            </div>
            </div>
          </div>
    
      </section>
    );
};


export default SectionHabitaciones;