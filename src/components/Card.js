import React from "react";

const Card = (props) => {
	console.log(props);
	return (
		<div className={`card ${props.color}`}>
			<div className='item-box'>
				<div className='post-date'>{props.date}</div>
				<div className='item-heading'>{props.title}</div>
				<div className='card-body'>
					<p className='card-text'>{props.description}</p>
				</div>
				<div className='read-more-box'>
					<button className='btn btn-teritary'>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
