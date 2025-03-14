import React from 'react';
import './Detail.css';


function Detail(props) {

    return (
        <div className='detail-container'>
            <h1>{props.info.nombre}</h1>
            {/* {<img className='image' src={convertToRawUrl(props.info.imagen)} alt={props.info.nombre} />} */}
            <p>{props.info.imagen}</p>
            <p>{props.info.añoFabricacion}</p>
            <p>{props.info.humor}</p>
        </div>
    );
};

export default Detail;