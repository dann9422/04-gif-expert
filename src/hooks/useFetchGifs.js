import { useEffect, useState } from "react";
import { getgif } from '../helppers/getGifs';



export const useFetchGifs = (category) => {
  const [state,setState] = useState({

    data:[],
    loanding:true

  });
  useEffect(()=>{
    getgif(category)
    .then(imgs=>{
        setTimeout(()=>{
            setState({
                data:imgs,
                loanding:false
            })
        },2000)
    })
  },[category])
  
return state;

};
