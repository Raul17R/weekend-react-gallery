import { useState } from "react";


function GalleryItem ({galleryItem, updateLikeImage}){
    let [toggle, setToggle] = useState (false);
    
    // galleryList.map((gallery) =>{
    return (
        <div>
        <button onClick={()=> setToggle(!toggle)}>
        {toggle ? <p>{galleryItem.description}</p>
        :
        <img style={{ width: 100 + 'px', height: 100 + 'px' }} src={galleryItem.path}/>

    }
    </button>
    <button onClick={()=>updateLikeImage(galleryItem.id)}>Like</button>
    <p>How many Likes= {galleryItem.likes}</p>
    </div>
    )
// })
}

export default GalleryItem;