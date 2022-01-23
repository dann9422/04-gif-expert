import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({id,title,url}) => {
    // console.log(id,title,url)
    return (
        <div className='card animate__animated animate__lightSpeedInRight'>
           <img src={url} alt={title}></img>
           <p>{title}</p>
        </div>
    )
}


GifGridItem.prototype={
    title: PropTypes.string.isRequiered,
    url : PropTypes.string.isRequired

}

