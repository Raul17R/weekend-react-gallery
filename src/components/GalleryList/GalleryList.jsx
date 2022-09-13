import axios from "axios";
import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({galleryArray, updateLikeImage}){


    return (
        <div>
            {
                
                galleryArray.map((galleryItem) =>{
                    return (
                        <div >
                        <GalleryItem
                            key={galleryItem.id}
                            galleryItem={galleryItem}
                            updateLikeImage={updateLikeImage}
                        />
                        </div>
                    )
                    
                })

             
            }
        </div>
    )

}
export default GalleryList;