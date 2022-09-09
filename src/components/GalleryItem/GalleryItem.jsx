import { useState } from "react";
import galleryItem from '../GalleryItem/GalleryItem.jsx';
import GalleryList from "../GalleryList/GalleryList.jsx";

function GalleryItem (gallery,{galleryList}){
    let [toggle, setToggle] = useState (false);
    let galleryDescription = () =>{
        if (toggle === true){
            return <button></button>
        }else{
            return <div>{gallery.description}</div>
        }
    }

    return (
    <li key={gallery.id}>
        {gallery.description} Description: {
            galleryDescription()
        }
        <button onClick={()=> setToggle (!toggle)}
        {...toggle ? 'Hide' : 'Show'}><img style={{width:100 + 'px', height:100+'px'}}src={gallery.path}/>Hi</button>
        {/* <button onClick={() => like(gallery.like)}>Like</button> */}

    </li>
    )
}

export default GalleryItem;