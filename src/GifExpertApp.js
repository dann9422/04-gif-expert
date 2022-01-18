import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['one punch','samurai X','Dragon ball'])


    // const handleAdd=()=>{
    //     setcategories([...categories,'HunterXhunter']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}/>
            <hr></hr>
            <ol>
                {categories.map(category =>{
                    return <li key={category}>{category}</li>
                })}
                
            </ol>
        </>
    )
}
