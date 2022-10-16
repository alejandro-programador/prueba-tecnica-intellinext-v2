import React,{useContext} from 'react'
import {itemContext} from '../App';

function MenuCard({data}) {
    //console.log("menucard rendered");
    const iL = useContext(itemContext);
    
    return (
        <>
        <div key ={data.id} className="col-6 menuCard d-flex">
            <div className="d-flex flex-column itemDescription">
                <div>
                    <div className="h5">{data.title}</div>
                    <div><a href={`https://www.reddit.com/user/${data.author}/`} target="_blank">{data.author}</a></div>
                </div>
                </div>
            <div className="menuCardImg position-relative">
                { 
                    ( data.post_hint ) ? 
                        <img alt="" className="img-fluid img-rounded" src={data.thumbnail}/>
                    :
                        <img alt="" className="img-fluid img-rounded" src="https://codoacodo.app/sites/default/files/img/product/noimage_1.jpg" />
                }
            </div>
        </div>
      </>
    )
}

export default React.memo(MenuCard);
