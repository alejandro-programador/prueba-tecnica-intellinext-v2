import React from 'react';
import '../css/home.css'

function HomeInfoCard({infoImg, infoTitle, infoLink}) {
    return (
        <div className="card homeInfoCard text-center">
          <img className="card-img-top w-60" src={infoImg} alt=""/>
          <div className="card-body">
            <h3 className="card-title">{infoTitle}</h3>
          </div>
        </div>
    )
}

export default HomeInfoCard
