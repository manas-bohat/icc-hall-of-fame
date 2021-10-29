import React from 'react'
import Card from './Card'
import './App.css'

const CardList = ({robots}) =>
{
	const cardArray = [];
	for(let i=0; i<robots.length; i++)
	{
		cardArray.push(<Card key={robots[i].id} 
		name={robots[i].name} 
		id={robots[i].id} 
		cricinfo={robots[i].cricinfo}
		insta={robots[i].insta}
		wiki={robots[i].wikipedia}
		image={robots[i].image}
		breadth={robots[i].breadth}
		length={robots[i].length}
		/>)
	}

	if(cardArray.length === 0)
	{
		return (
			<div>
				<p> Sorry, this player is not in the ICC Hall of Fame (yet). </p>
				<p> Players need to be retired atleast 6 years ago to be *considered* 
				for induction into the ICC Hall of Fame.
				 </p>
			</div>
		);
	}

	return (


		<div>
		{
			/* ANDREI's WAY */
			// robots.map((user, i) => {
			// 	return (
			// 		<Card key={robots[i].id} 
			// 		name={robots[i].name} 
			// 		id={robots[i].id} 
			// 		email={robots[i].email}
			// 	/>

			// 	);
			// })

			cardArray

			
		}
	    </div>
	);
	
}

export default CardList;


