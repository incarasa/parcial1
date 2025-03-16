import React from 'react';
import './Detail.css';

function convertToRawUrl(githubUrl) {

    if (typeof githubUrl !== 'string') return '';

    return githubUrl
        .replace('github.com', 'raw.githubusercontent.com')
        .replace('/blob/', '/');
}


function Detail(props) {

    const imageUrl = convertToRawUrl(props.info.imagen);

    return (
        <div className='detail-container'>
            <h1>{props.info.nombre}</h1>
            {<img className='image' src={imageUrl} alt={props.info.nombre} />}
            <p>{props.info.añoFabricacion}</p>
            <p>{props.info.humor}</p>
        </div>
    );
};

export default Detail;