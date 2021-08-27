import React from 'react';
import './Card.css';

const Card = (props) => {
    const {name, email, id} = props;
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/皮心${id}?500x500`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{props.greeting}</p>
            </div>
        </div>
    );
}

export default Card;