import { useState } from "react";
import galleryItem from '../GalleryList/GalleryList.jsx';

function GalleryItem (picture, like){
    const [toggle, setToggle] = useState (false);
    const displayDescription = () =>{
        if (toggle === true){
            return<div>{picture.description}</div>
        }else{
            return <div>???</div>
        }
    }

    return <li key={picture.id}>
        {picture.name} Description: {
        displayDescription()
        }
        <button onClick={()=> setToggle (!toggle)}
        {...toggle ? 'Hide' : 'Show'}>Toggle</button>
        <button onClick={() => like(picture.id)}>Like</button>
    </li>
}

export default GalleryItem;