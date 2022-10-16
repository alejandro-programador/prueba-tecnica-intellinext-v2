import React from 'react'
import {Link} from 'react-router-dom';
import OfferModal from './OfferModal';

function Footer() {
  //console.log("footer rendered");
    return (
      <>
        <div className="container-fluid footerNav bg-dark">
  <footer className="d-flex flex-wrap align-items-center py-2">
    <p className="col-md-4 mb-0 text-light flex-fill">&copy; 2022 IntelliNext, Inc</p>


    <div className="nav col-md-5 d-inline-flex flex-fill align-items-center justify-content-end link-light text-decoration-none">
    <Link to="#" className="nav-link px-2 text-light" data-bs-toggle="offcanvas" data-bs-target="#about-hotel" data-bs-keyboard="true">Nosotros</Link>
    <div className="nav-link px-2 text-light" data-bs-toggle="tooltip" data-bs-placement="top" role="button"
    title="Call us: 080 4123 7514"><a className='text-white' href='https://web.whatsapp.com/send/?phone=584125547649&text=Hola%20Alejandro,%20nos%20gusto%20tu%20trabajo!' target="_blank">Contact Us</a></div>
    <Link to="/" className="nav-link px-2 text-light">Home</Link>
    <Link to="#" className="nav-link px-2 text-light" data-bs-toggle="offcanvas" data-bs-keyboard="true" data-bs-target="#offerModal">Offers</Link>
    {/* <Link to="#" className="nav-link px-2 text-light">Admin</Link> */}
      
    </div>
  
  </footer>
</div>
 <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="about-hotel">
 <div className="offcanvas-header">
   <h2 className="offcanvas-title" id="about-hotel">¿Quienes Somos?</h2>
   <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
 </div>
 <div className="offcanvas-body px-3">
   <hr/>
   <div>
   Nuestros 10 años de experiencia han consolidado a Intelli Next como una empresa ﬁable en proyectos orientados a la identificación biométrica. Nuestra presencia ha llegado a 3 países como lo son; Colombia, Venezuela y EEUU. Nuestro nombre genera conﬁanza en más de 1.000 clientes satisfechos hasta la actualidad, nos caracterizamos por abarcar la mayor cantidad de mercados a nivel gubernamental, industrial, comercial, residencial, salud, minero, educativo, construcción, la hostelería y empresarial.
   </div>
  <hr/>
  <div className="d-flex flex-wrap">
  <Link to="/"><button type="button" className="btn btn-outline-warning rounded-pill btn-sm m-2 mx-1">Hours & Location</button></Link>
  <Link to="/login"><button type="button" className="btn btn-outline-danger rounded-pill btn-sm m-2 mx-1">Login</button></Link>
  <Link to="/register"><button type="button" className="btn btn-outline-dark rounded-pill btn-sm m-2 mx-1">Signup</button></Link>
  <Link to="#"><button type="button" className="btn btn-outline-dark btn-sm rounded-pill disabled m-2 mx-1">Admin</button></Link>
  <Link to="#"><button type="button" className="btn btn-outline-primary btn-sm rounded-pill m-2 mx-1" data-bs-toggle="offcanvas" data-bs-keyboard="true" data-bs-target="#offerModal">Offers</button></Link>
  </div>
 </div>
</div>
<OfferModal />
</>
    )
}

export default React.memo(Footer);
