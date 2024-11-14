import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrent } from './store/slices/coordinates';
import { useGeolocation } from './hooks/useGeoLocation';
import useWindowDimensions from './hooks/useWindowDemensions';
import { AppStage } from './components/app-stage/app-stage';
import { NavigationBar } from './components/navigation-bar/navigation-bar';

export const App = () => {
  const { loading, error, data } = useGeolocation();
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();

  useEffect(() => {
    if (!data.latitude || !data.longitude) return;

    dispatch(setCurrent([data.longitude, data.latitude]));
  }, [data, dispatch]);

  return (
    <div className="App" style={{ height: height }}>
      <NavigationBar />
      <AppStage loading={loading} error={error} />
    </div>
  );
};
