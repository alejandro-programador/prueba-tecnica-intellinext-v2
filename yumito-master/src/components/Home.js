import React from 'react'
import CardContainer from './CardContainer'
import HomeInfoCardContainer from './HomeInfoCardContainer'
import '../css/home.css'

function Home() {
    return (
        <div className='home-container'>
            <CardContainer/>
            <HomeInfoCardContainer/>
        </div>
    )
}

export default React.memo(Home)
