import { Map } from './components/map/map';
import { SearchField } from './components/search-field/search-field';
import './App.scss';

function App() {
  return (
      <div className="App">
        <SearchField />
        <Map
          lon={84.3877}
          lat={33.7488}
        />
      </div>
  );
}

export default App;
