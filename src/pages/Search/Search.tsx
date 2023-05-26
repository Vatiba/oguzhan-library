import React, { useState } from 'react'
// components
import Container from '@app/components/Container';
import Player from '@app/components/Player';
import { useGetArticles } from '@app/hooks/query/Article';

function Search() {

	return (
		<Container>
			<Player
				src='/src/assets/audio/DJ-Alex-Man-I-m-Blue.mp3'
			/>
		</Container>
	)
}

export default Search;