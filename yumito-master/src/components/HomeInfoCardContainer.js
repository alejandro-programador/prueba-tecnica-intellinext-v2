import React from 'react'
import HomeInfoCard from './HomeInfoCard'
import {Link} from 'react-router-dom';
import fire from '../assets/fire.png';
import newIcon from '../assets/new.png';
import risingIcon from '../assets/trend.png';

function HomeInfoCardContainer() {
    //console.log("homeinfocardcontner rendered");
    return (
        <div className="infoCardContainer d-flex flex-wrap justify-content-center align-items-center bd-grey">
            <Link to="/hot"><HomeInfoCard infoImg={fire} infoTitle="HOT"/></Link>
            <Link to="/new"><HomeInfoCard infoImg={newIcon} infoTitle="NEW"/></Link>
            <Link to="/rising"><HomeInfoCard infoImg={risingIcon} infoTitle="RISING"/></Link>
        </div>
    )
}

export default React.memo(HomeInfoCardContainer)
