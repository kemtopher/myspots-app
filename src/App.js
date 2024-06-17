import React from 'react';
import {
  Grid,
} from '@mui/material'
import { Map } from './components/map/map';
import { SearchField } from './components/search-field/search-field';
import { useSelector } from "react-redux";
import './App.scss';

export const App = () => {
	const events = useSelector(state => state.events.value);
	const coords = useSelector(state => state.coordinates.current);

	return (
		<div className="App">
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<SearchField />
					<Map
						lon={coords.lon}
						lat={coords.lat}
						events={ events }
					/>
				</Grid>
				<Grid item xs={4}>
					
				</Grid>
			</Grid>        
		</div>
	);
}
