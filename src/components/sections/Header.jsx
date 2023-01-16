import logoOlivar from '../../assets/img/El-Olivar-Logo3.webp'




const Header = () => {
   
  
    return (
        <header className="header">
        <nav className="navbar fixed-top navbar-expand-md navbar-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
              aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <a className="navbar-brand" href="#">
                <img src={logoOlivar}  alt="Logo" width="70"/>
              </a>
              <ul className="navbar-nav d-flex justify-content-center align-items-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Reserva</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Restaurante</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Promociones</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      );
};
 
  
  export default Header;