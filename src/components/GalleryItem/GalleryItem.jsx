import { useState } from "react";
import galleryItem from '../GalleryItem/GalleryItem.jsx';
import GalleryList from "../GalleryList/GalleryList.jsx";

function GalleryItem (gallery,{galleryList}){
    let [toggle, setToggle] = useState (false);
    let galleryDescription = () =>{
        if (toggle === true){
            return <p>{gallery.description}Description</p>
        }else{
            return <div><img style={{width:100 + 'px', height:100+'px'}}src={gallery.path}></img></div>
        }
    }
    // galleryList.map((gallery) =>{
    return (
    <li key={gallery.id}>
        {gallery.description} Description: {
            galleryDescription()
        }
        <button onClick={()=> setToggle (!toggle)}
        {...toggle ? 'Hide' : 'Show'}><img style={{width:100 + 'px', height:100+'px'}}src={gallery.path}/></button>
        {/* <button onClick={() => like(gallery.like)}>Like</button> */}

    </li>
    )
// })
}

export default GalleryItem;