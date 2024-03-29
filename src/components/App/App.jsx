import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {
  let [galleryArray, setGalleryArray] = useState([]);
  let [likeImage, setlikeImage] = useState(0);

  useEffect(() => {
    console.log('useEffect Page Load');
    fetchGalleryList();
   }, []);


    const fetchGalleryList = () =>{
      axios({
        method: 'GET',
        url: '/gallery',
      }).then(response => {
        setGalleryArray(response.data);
        console.log(response.data);
      }).catch(error => {
        console.log(error);
        alert('Something went wrong in GET');
      })
    }
  
   const updateLikeImage = (galleryId) =>{
    axios({
      method:'PUT',
      url: `/gallery/like/${galleryId}`,
    }).then(response =>{
      fetchGalleryList();
    }).catch((error) =>{
      console.log('Error in PUT', error);
    })
   }
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* <div className='images'> */}
          <div className='images'></div>
            <GalleryList galleryArray={galleryArray}
            updateLikeImage={updateLikeImage}
        />
        {/* </div> */}
        {/* <h2>HELLO</h2> */}
        {/* <img src="images/goat_small.jpg"/> */}
        {/* <img src='images/char1.JPG'/> */}
      </div>
    );
}

export default App;
