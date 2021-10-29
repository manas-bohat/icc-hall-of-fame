import React from 'react';
import './Cards.css'

const Card = function({name, id, cricinfo, insta, wiki, image, breadth, length}) {
	return (

		<div className="bg-light-green dib b3 pa3 ma2 grow bw2 shadow-5">
			<img src={image} alt="pic" width={breadth} height={length}/>
			<div className="tc">
				<h3> {name} </h3>
				<div> {cricinfo} </div>
				<span> {insta} </span>
				<span> {wiki} </span>
			</div>
		</div>
	);
}

export default Card;
