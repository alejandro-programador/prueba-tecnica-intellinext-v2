import React from 'react'
import '../css/navbar.css'
import {Link} from 'react-router-dom';
import OfferModal from './OfferModal';

function Navbar() {
  //console.log("navbar rendered");
    return (
      <>
        <div className="loginBar container-fluid bg-dark d-flex flex-wrap align-items-center">
            <nav className="navbar-dark d-inline-flex align-items-center flex-grow-1">

    <Link to="/" className="navbar-brand">
      <img id="nav-logo" src="https://www.intelli-next.com/wp-content/uploads/2021/03/icono.ico" alt="nav-logo" className="img-fluid d-inline-block align-baseline me-2" />
      <span className="nav-title">IntelliNext</span><span className="nav-title-to"></span>
    </Link>
    
    </nav>
    <div className="d-inline-flex m-2 logincategory">
      <div className="">
      <Link to="/login"><button type="button" className="btn btn-outline-light btn-lg text-white loginbtn me-2">Login</button></Link></div>
      <div className="">
      <Link to="/register"><button type="button" className="btn btn-light btn-lg me-2">Sign up</button></Link>
        </div>
        </div>
    
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
      <OfferModal/>
      </>
    )
}

export default React.memo(Navbar)
