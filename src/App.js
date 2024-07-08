import React, { lazy, useState } from 'react';
import {
  Grid,
} from '@mui/material'
import { Map } from './components/map/map';
import { MapLoader } from './components/map-loader/map-loader';
import { SearchField } from './components/search-field/search-field';
import { RadiusSelect } from './components/radius-select/radius-select';
import { useSelector } from "react-redux";
import './App.scss';
import { RideActions } from './components/ride-actions/ride-actions';
import { RideList } from './components/ride-list/ride-list';

// const Map = lazy(() => import(webpackChunkName: 'Map', ))n

export const App = ({
	loading,
	error
}) => {
	const classes = {
		ridelist: {
			height: '100%',
		}
	}
	
	const events = useSelector(state => state.events.value);
	const coords = useSelector(state => state.coordinates.current);

	return (
		<div className="App" style={{height: '100vh'}}>
			<Grid container spacing={0} sx={{height: '100%'}}>
				<Grid item xs={12} md={8} sx={{height: '100%'}}>
					<Grid container>
						<Grid item xs={9}>
							<SearchField />
						</Grid>
						<Grid item xs={3}>
							<RadiusSelect />
						</Grid>
					</Grid>
					<Grid container sx={{height: 'calc(100% - 60px)'}}>
						<Grid item xs={12}>
							<MapLoader loading={loading} error={error}>
								<Map
									lon={coords[0]}
									lat={coords[1]}
									events={ events }
								/>
							</MapLoader>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} md={4} sx={classes.ridelist}>
					<Grid container sx={classes.ridelist}>
						<Grid item xs={12}>
							<RideActions />
						</Grid>
						<Grid item xs={12} sx={{height: 'calc(100% - 60px)'}}>
							<RideList nodes={events} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>        
		</div>
	);
}
