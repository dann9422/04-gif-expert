import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setcategories}) => {

    const [inputValue, setinputValue] = useState('')
    const handleInpuntChange = (e)=>{

        setinputValue(e.target.value);
        console.log('handleInpuntChange llamdo');
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
            <p>{inputValue}</p>
            <input type="text" placeholder='Ingrese la categoria que desea buscar'
            value={inputValue}
            onChange={handleInpuntChange}/>
            
           
        </form>
    )
}


AddCategory.prototype={
    setcategories: PropTypes.func.isRequired

}