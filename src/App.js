import './App.scss';
import { Events } from './events';
import { Map } from './components/map/map';

function App() {
  return (
      <div className="App">
        <h1>Hey there</h1>
        <Map
          lon={84.3877}
          lat={33.7488}
        />
      </div>
  );
}

export default App;
