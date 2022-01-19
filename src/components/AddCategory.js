import React, { useState } from 'react'
import propTypes from 'prop-types';

export const AddCategory = ({setcategories}) => {

    const [inputValue, setinputValue] = useState('')
    const handleInpuntChange = (e)=>{

        setinputValue(e.target.value);
    }

    const handleSubmit =(e)=>{
e.preventDefault();
// console.log('enviado desde el formulario ')
if(inputValue.trim().length>2){
    setcategories(cats=>[inputValue,...cats]);
setinputValue('');
}


}
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={inputValue}
            onChange={handleInpuntChange}/>
            
           
        </form>
    )
}


AddCategory.propTypes={
    setcategories:propTypes.func.isRequired
}