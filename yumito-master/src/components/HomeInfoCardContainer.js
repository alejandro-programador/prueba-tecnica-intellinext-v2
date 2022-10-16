import React from 'react'
import HomeInfoCard from './HomeInfoCard'
import {Link} from 'react-router-dom';
import fire from '../assets/fire.png';
import newIcon from '../assets/new.png';
import risingIcon from '../assets/trend.png';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

function HomeInfoCardContainer() {
    //console.log("homeinfocardcontner rendered");

    const [t, i18n] = useTranslation("global");
    const language = useSelector(store => store.LanguageReducer.lng);

    React.useEffect( () => {
      const changeLanguage = () => {
        i18n.changeLanguage(language);
      }

      changeLanguage();
    },[language] )

    return (
        <div className="infoCardContainer d-flex flex-wrap justify-content-center align-items-center bd-grey">
            <Link to="/hot"><HomeInfoCard infoImg={fire} infoTitle={t("header.category-hot")}/></Link>
            <Link to="/new"><HomeInfoCard infoImg={newIcon} infoTitle={t("header.category-new")}/></Link>
            <Link to="/rising"><HomeInfoCard infoImg={risingIcon} infoTitle={t("header.category-rising")} /></Link>
        </div>
    )
}

export default React.memo(HomeInfoCardContainer)
