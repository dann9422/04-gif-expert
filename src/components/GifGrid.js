import React, { useEffect, useState } from 'react'
import { getgif } from '../helppers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const [images, setimages] = useState([]);
        useEffect(()=>{
            getgif(category)
            .then(setimages)
        },[category])

    
        


    return (
        <>
        <h3>{category}</h3>
        <div className='card-grid'>
                {
                    images.map(img=>(
                        <GifGridItem
                        key={img.id}
                        {...img }
                        
                        />
                    ))
                }
            
        </div>
        </>
    )
}
