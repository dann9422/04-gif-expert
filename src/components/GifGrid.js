import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getgif } from '../helppers/getGifs';
 import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    // const [images, setimages] = useState([]);
    const {data:images,loanding} = useFetchGifs(category); 
    //     useEffect(()=>{
    //         getgif(category)
    //         .then(setimages)
    //     },[category])

    return (
        <>
        <h3 className=' animate__animated animate__lightSpeedInRight'>{category}</h3>

        {loanding && <p className=' animate__animated animate__hinge'>Loanding..</p>}
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
