import logoOlivar from '../../assets/img/El-Olivar-Logo3.webp'




const SectionLogo = () => {


    return (
        <section>
            <div class="logo col-12 col-md-6 col-lg-4">
                <img src={logoOlivar} alt="Logo-El Olivar" class="logo-img" />
                <p>Un Hotel moderno y funcional que cuenta con gimnasio, centro de internet, cajero automático, spa, peluquería,y servicio de traslado gratuito (aplican restricciones)</p>
            </div>
        </section>

    );
};


export default SectionLogo;