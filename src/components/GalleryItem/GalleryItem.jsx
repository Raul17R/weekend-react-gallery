import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import './GalleryItem.css';
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Thunderstorm } from "@mui/icons-material";
import ShareIcon from '@mui/icons-material/Share';
// import ReactCardFlip from "react-card-flip";



function GalleryItem ({galleryItem, updateLikeImage}){
    let [toggle, setToggle] = useState (false);

    // galleryList.map((gallery) =>{
    return (
        <div className="images">
        <Card className="Card" sx={{maxWidth: 345}}>
        
            <CardMedia sx={{height:200}}>
                <Button variant="contained" onClick={()=> setToggle(!toggle)}>
                    {toggle ? <p>{galleryItem.description}</p>
                    :
                    <img style={{ width: 200 + 'px', height: 200 + 'px' }} src={galleryItem.path}/>
                 }
               
                </Button>
            
                 <CardContent>
                    <div className="likes">
                        <CardActions>
                        <Stack spacing={2} direction="row">
                            <Button endIcon={<ThumbUpIcon/>} variant="text" onClick={()=>updateLikeImage(galleryItem.id)}>Like {galleryItem.likes}</Button> 
                            <Button endIcon={<ShareIcon/>} variant="contained">Share</Button>
                        </Stack>
                        </CardActions>
                    </div>
                     </CardContent>
            </CardMedia>
        </Card>
         </div>
      
    )
// })
}

export default GalleryItem;