import React from 'react';

const SearchBox = ({searchChange}) =>{
	return(
		<div className='pa2'>
		<input 
		type='search' 
		placeholder='search robots' 
		className='bg-light-blue br3 pa3 ma2 bw2'
		onChange={searchChange}
		/>
		</div>
	);
}

export default SearchBox;