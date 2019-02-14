import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
	return (
		<div>
			<input
				className="pa3 br3 b--green bg-light-green" 
				type="search" 
				placeholder="search robots"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;