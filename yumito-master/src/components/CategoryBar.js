import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Provider, useSelector, useDispatch } from 'react-redux';

function CategoryBar() {

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
        <div className="catContainer" id="categoryBar">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/"><button type="button" className="btn btn-outline-dark rounded-pill btn-sm m-2 mx-1"><i className="bi bi-chevron-left px-1"></i> {t("header.back-btn")}</button></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default React.memo(CategoryBar)
