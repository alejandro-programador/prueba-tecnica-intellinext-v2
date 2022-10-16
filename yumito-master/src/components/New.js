import React,{useContext} from 'react'
import CategoryBar from './CategoryBar'
import RestaurantMenu from './RestaurantMenu'
import {itemContext} from '../App';
var store =require('store');

function New() {
    const iL = useContext(itemContext);
    const orderedItems =store.get('orderedItems');
    let {list}=iL.state ?? orderedItems ;

    return (
        <div>
            <CategoryBar/>
            <RestaurantMenu url="https://www.reddit.com/r/programminghorror/new/.json?limit=5"/>
        </div>
    )
}

export default React.memo(New)
