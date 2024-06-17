import {
  Grid,
  Item,
} from '@mui/material'
import { Map } from './components/map/map';
import { SearchField } from './components/search-field/search-field';
import { useGeolocation } from './hooks/useGeoLocation';
import './App.scss';

function App() {
  const coordinates = useGeolocation();

  return (
      <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={8}>
		  <Map
              lon={ coordinates.data.longitude }
              lat={ coordinates.data.latitude }
            />
          </Grid>
          <Grid item xs={4}>
		  	<SearchField />
          </Grid>
        </Grid>        
      </div>
  );
}

export default App;
