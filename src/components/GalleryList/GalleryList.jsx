import axios from "axios";
import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({galleryList}){


    return (
        <div>
            {
                
                galleryList.map((gallery) =>{
                    return <div key={gallery.id}>
                         <GalleryItem
                            key={gallery.id}
                            gallery={gallery}
                         />
                        <button ><img style={{width:100 + 'px', height:100+'px'}}src={gallery.path}/>
                        </button>
                        {gallery.description}
                    </div>
                    
                })

             
            }
        </div>
    )

}
export default GalleryList;