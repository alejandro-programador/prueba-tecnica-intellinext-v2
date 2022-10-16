import React, {useEffect,useState} from 'react'
import axios from 'axios';
import MenuCard from './MenuCard';
var store =require('store');

function RestaurantMenu(props) {
  const [items,setitems]=useState(store.get('items') ?? []);
  const [loading,setLoading]=useState(store.get('loading') ?? true);
  const [error, setError]=useState(store.get('error') ?? '');
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    const getData = (url) => {
      axios.get(url)
      .then( response => {
        let posts = response.data.data.children;

        setPosts(posts);
      } )
      .catch( error => console.log(error))
    }

    getData(props.url);
  },[] )

  useEffect( () => {
    store.set('items', posts);
  },[posts] )
    
    return (
      <>
      <div className='dataMain container-fluid'>
        <div className='row justify-content-center pb-5'>
        {
          items.map( (post, index) => {
            return (
                <MenuCard data={post.data} key={index} /> 
              )
          } )
        }
        </div>
      </div>
      </>
    )
}

export default React.memo(RestaurantMenu)
