import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['one punch'])


    // const handleAdd=()=>{
    //     setcategories([...categories,'HunterXhunter']);
    // }
    return (
        <>
            <h2 className='textoPrincipal'>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}/>
            <hr></hr>
            <ol>
                {categories.map(category =>
            <GifGrid 
            key={category}
            category={category}
            />
)}
                
            </ol>
        </>
    )
}
