import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGeolocation } from './hooks/useGeoLocation';
import { setCurrent } from './store/slices/coordinates';
// import { AppNavigation } from './components/app-navigation/app-navigation';
import { AppStage } from './components/app-stage/app-stage';
import './App.scss';


export const App = () => {
  const { loading, error, data } = useGeolocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.latitude || !data.longitude) return;

    dispatch(setCurrent([data.longitude, data.latitude]));
  }, [data, dispatch]);
  
  return (
    <div className="App" style={{ height: '100vh' }}>
      {/* <AppNavigation /> */}
      <AppStage loading={loading} error={error} />
    </div>
  );
};
