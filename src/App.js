import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Map } from './components/map/map';
import { MapLoader } from './components/map-loader/map-loader';
import { useSelector } from 'react-redux';
import { SpotlistHeader } from './components/spotlist-header/spotlist-header';
import { SpotList } from './components/spot-list/spot-list';
import { SpotForm } from './components/spot-form/spot-form';
import './App.scss';


export const App = ({ loading, error }) => {
  const classes = {
    spotlist: {
      height: '100%'
    }
  };

  const events = useSelector((state) => state.events.value);
  const [eventsFilter, setEventsFilter] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
 
  useEffect(() => {
    if (eventsFilter === null || eventsFilter === 'show-all') {
      setFilteredEvents(events);
      setShowForm(false);
    } 
    else if (eventsFilter === 'add-spot') {
      setFilteredEvents(events);
      setShowForm(true);
    }
    else {
      setFilteredEvents(events);
      setShowForm(false);
    }
  }, [events, eventsFilter]);

  return (
    <div className="App" style={{ height: '100vh' }}>
      <Grid container spacing={0} sx={{ height: '100%' }}>
        <Grid item xs={12} md={8} sx={{ height: '100%' }}>
          <Grid container sx={{ height: '100%' }}>
            <Grid item xs={12}>
              <MapLoader loading={loading} error={error}>
                <Map events={filteredEvents} />
              </MapLoader>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} sx={classes.spotlist}>
          <Grid container sx={classes.spotlist}>
            <Grid item xs={12}>
              <SpotlistHeader eventsFilter={eventsFilter} setEventsFilter={setEventsFilter} />
            </Grid>
            <Grid item xs={12} sx={{ height: 'calc(100% - 60px)' }}>
              { showForm ? <SpotForm /> : <SpotList nodes={filteredEvents} /> }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
