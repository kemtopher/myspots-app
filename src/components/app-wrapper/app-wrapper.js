import React, { useEffect } from 'react';
import { App } from "../../App";
import { useGeolocation } from '../../hooks/useGeoLocation';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../../store/slices/coordinates';

export const AppWrapper = () => {
  console.log("AppWrapper causing rerender...");
    const { loading, error, data } = useGeolocation();
    const dispatch = useDispatch();

    useEffect(() => {
      if(!data.latitude || !data.longitude) return;

      dispatch(setCurrent([data.longitude, data.latitude]));
    }, [data, dispatch])

  return (
    <App loading={loading} error={error} />
  )
}
