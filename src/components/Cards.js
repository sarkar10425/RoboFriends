import React from 'react';

const Cards = (props) =>{
  const {id,name,email}=props;
    return (
      <div className='tc bg-light-green dib pa3 ma2 br3 bw2 grow shadow-5'>
        <img src={`https://robohash.org/${id}?20x20`} alt={"Robo"} />
        <div>
        	<h1>{name}</h1>
        	<h2>{email}</h2>
        </div>
      </div>
    );
}

export default Cards;