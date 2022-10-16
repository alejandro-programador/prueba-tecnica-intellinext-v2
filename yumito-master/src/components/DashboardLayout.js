import React from 'react'
import CheckNavbar from './CheckNavbar';
import {Switch, Route} from 'react-router-dom';
import Footer from './Footer'
import Home from './Home'
import Menu from './Menu'
import Hot from './Hot'
import NewRoute from './New'
import Rising from './Rising'
import EditProfile from './EditProfile'
import CheckOut from './CheckOut';

function DashboardLayout(props) {
  //console.log("dashLayout rendered");
    const matchPath = props.match.path;  
  return (
        <div className="dashboardLayout">
        <CheckNavbar/> 
        <Switch>
        <Route 
        exact path={`${matchPath}`} 
        render={(props) => (matchPath === "/" ? 
        (<Home {...props} />) : 
        (matchPath ==="/menu" ? 
        (<Menu {...props} />) :
        (matchPath ==="/hot" ? 
        (<Hot {...props} />) :
        (matchPath ==="/new" ? 
        (<NewRoute {...props} />) :
        (matchPath ==="/rising" ? 
        (<Rising {...props} />) : 
        (matchPath ==="/checkout" ? 
        (<CheckOut {...props} />) : 
        (<EditProfile {...props} />)))))))}/>
        </Switch>
        <Footer/>
        </div>
        
    )
}

export default React.memo(DashboardLayout)
