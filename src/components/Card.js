import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt ="Jane Doe" src={`https://www.robohash.org/${id}?100x100`} className="w-100"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;