import React from 'react'

// we didn't pass any props but every one has this default property in react, 
// i.e. children

// can make a css file but let's just use inline css
const Scroll = (props) => {

	return(
		<div style={{overflowY: 'scroll', border: '1px solid black', height: '360px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;

