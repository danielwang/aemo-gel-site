import React from 'react';
import icon from './img/lock.png';

export default function InteralLink({url, label}) {
    return(
        <>
            <a target="_blank" href={url}> <img src={icon} /> {label}</a>
        </>
        
    )
}