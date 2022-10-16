import React from 'react'
import '../css/navbar.css'
import {Link} from 'react-router-dom';
import OfferModal from './OfferModal';
import {useDispatch, useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';
import {changeThemeAction} from '../redux/reducers/Theme'

function Navbar() {
  //console.log("navbar rendered");

    const dispatch = useDispatch();
    const [t, i18n] = useTranslation("global");
    const language = useSelector(store => store.LanguageReducer.lng);

    React.useEffect( () => {
      const changeLanguage = () => {
        i18n.changeLanguage(language);
      }

      changeLanguage();
    },[language] )
  

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
      </div>
      <div className="">
        </div>
        </div>
    
        </div>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="about-hotel">
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="about-hotel">{t("header.about")}</h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body px-3">
          <hr/>
          <div>
          {t("header.about-description")}
          </div>
         <hr/>
         <div className="d-flex flex-wrap">
          <button type="button" className="btn btn-outline-danger rounded-pill btn-sm m-2 mx-1">IntelliNext</button>
          <button type="button" className="btn btn-outline-dark rounded-pill btn-sm m-2 mx-1">Reddit Clone</button>
          
         </div>
        </div>
      </div>
      <OfferModal/>
      </>
    )
}

export default React.memo(Navbar)
