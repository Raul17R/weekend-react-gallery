import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {
  let [galleryArray, setGalleryArray] = useState([]);
  let [updateLikeImage, setlikeImage] = useState(0);

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



   const likeImage = (galleryId) =>{
    axios({
      methos:'PUT',
      url: `/gallery/likes/${galleryId}`,
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
        <p>Gallery goes here</p>
        <GalleryList galleryArray={galleryArray}
        updateLikeImage={updateLikeImage}
        />
        <h2>HELLO</h2>
        {/* <img src="images/goat_small.jpg"/> */}
        {/* <img src='images/char1.JPG'/> */}
      </div>
    );
}

export default App;
