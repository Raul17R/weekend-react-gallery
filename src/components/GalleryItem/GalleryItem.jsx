import { useState } from "react";
import GalleryList from "../GalleryList/GalleryList.jsx";
import galleryItem from '../GalleryList/GalleryList.jsx';

function GalleryItem (gallery, like, galleryItem){
    let [toggle, setToggle] = useState (false);
    let galleryDescription = () =>{
        if (toggle === true){
            return <div>{gallery.description}</div>
        }else{
            return <div>???</div>
        }
    }

    return <li key={gallery.id}>
        {gallery.description} Description: {
        galleryDescription()
        }
        <button onClick={()=> setToggle (!toggle)}
        {...toggle ? 'Hide' : 'Show'}>Toggle</button>
        <button onClick={() => like(gallery.like)}>Like</button>

    </li>
    
}

export default GalleryItem;