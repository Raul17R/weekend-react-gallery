import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {
  let [pictureDescription, setPictureDescription] = useState('');
  let [galleryList, setGalleryList] = useState([]);
  let [galleryItem, setGalleryItem] = useState([]);

  useEffect(() => {
    console.log('useEffect Page Load');
    fetchGalleryList();
   }, []);
    const fetchGalleryList = () =>{
      axios({
        method: 'GET',
        url: '/gallery',
      }).then(response => {
        setGalleryList(response.data);
        console.log(response.data);
      }).catch(error => {
        console.log(error);
        alert('Something went wrong in GET');
      })
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryItem galleryItem={galleryItem}/>
        <GalleryList galleryList={galleryList} />
        <h2>HELLO</h2>
        {/* <img src="images/goat_small.jpg"/> */}
        {/* <img src='images/char1.JPG'/> */}
      </div>
    );
}

export default App;
