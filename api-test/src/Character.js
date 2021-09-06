import React from 'react';

const Character = (props) => {
    const {name, height, brith_year} = props;
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* <img src={`https://robohash.org/皮心${id}?size=200x200`} alt='st'/> */}
            <div>
                <h2>{name}</h2>
                <p>{height}</p>
                <p>{brith_year}</p>
            </div>
        </div>
    );
}

export default Character;