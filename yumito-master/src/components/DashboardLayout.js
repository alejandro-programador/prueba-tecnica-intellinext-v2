import React from 'react'
import CheckNavbar from './CheckNavbar';
import {Switch, Route} from 'react-router-dom';
import Footer from './Footer'
import Home from './Home'
import Hot from './Hot'
import NewRoute from './New'
import Rising from './Rising'

function DashboardLayout(props) {
  const matchPath = props.match.path;  

  return (
        <div className="dashboardLayout">
        <CheckNavbar/> 
        <Switch>
        <Route 
        exact path={`${matchPath}`} 
        render={(props) => (matchPath === "/" ? 
        (<Home {...props} />) : 
        (matchPath ==="/hot" ? 
        (<Hot {...props} />) :
        (matchPath ==="/new" ? 
        (<NewRoute {...props} />) :
        (matchPath ==="/rising" ? 
        (<Rising {...props} />) :
        (<Home {...props} />)))))}/>
        </Switch>
        <Footer/>
        </div>
    )
}

export default React.memo(DashboardLayout)
