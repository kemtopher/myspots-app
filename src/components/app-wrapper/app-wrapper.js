import React, { useEffect } from 'react';
import { App } from "../../App";
import { useGeolocation } from '../../hooks/useGeoLocation';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../../store/slices/coordinates';

export const AppWrapper = () => {
    const coords = useGeolocation();
    const dispatch = useDispatch();

    useEffect(() => {
      if(!coords.data.latitude || !coords.data.longitude) return;

      dispatch(setCurrent({lon: coords.data.longitude, lat: coords.data.latitude}));
    }, [coords, dispatch])

  return (
    <App />
  )
}
