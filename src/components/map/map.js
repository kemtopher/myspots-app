import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeActive, setActive } from '../../store/slices/events';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2tlbWV6YTEiLCJhIjoiY2x4ZGpjZmNqMDZtMTJwcG9ld3pwMDN5NCJ9.1E0pZwfmESAK8TQeYxqjYg';

export const Map = ({ events }) => {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const geolocateRef = useRef(null);
  const resizeObsRef = useRef(null);
  
  const mapMarker = useRef(null);
  const dispatch = useDispatch();
  const tempCoords = useSelector((state) => state.coordinates.current);
  const [geoCoords, setGeoCoords] = useState([]);
  const markersGroup = useRef([]);
  const tempMarker = useRef(null);

  useEffect(() => {
    // map setup and maintenance
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: tempCoords,
      zoom: 16
    });
    mapRef.current = map;

    const nav = new mapboxgl.NavigationControl({
      showZoom: true
    });
    map.addControl(nav, 'top-left');

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    });
    map.addControl(geolocate, 'top-left');
    geolocateRef.current = geolocate;

    const onLoad = () => {
      map.resize();
      geolocate.trigger();
    }
    
    map.once('load', onLoad);

    const onGeolocate = (e) => {
      setGeoCoords([e.coords.longitude, e.coords.latitude]);
    };
    geolocate.on('geolocate', onGeolocate);

    const resizer = new ResizeObserver(() => map.resize());
    resizeObsRef.current = resizer;
    resizer.observe(mapContainer.current);

    return () => {
      geolocate.off('geolocate', onGeolocate);
      map.off('load', onLoad);
      resizer.disconnect();
      map.remove();
      mapRef.current = null;
      geolocateRef.current = null;
    }
  }, []);

  useEffect(() => {
    // marker setup
    if (!mapRef.current) return;

    markersGroup.current.forEach(marker => marker.remove());
    markersGroup.current = [];

    events.forEach((event) => {
      const mapMarker = new mapboxgl.Marker({
        color: event.active ? '#FF0000' : '#1565c0',
        scale: event.focused ? 1.25 : 1
      })
      .setLngLat(event.location.coordinates)
      .addTo(mapRef.current);

      mapMarker.getElement().addEventListener('click', () => {
        if (event.active) { 
          dispatch(removeActive(event)); 
        } else { 
          dispatch(setActive(event));
        }
      });

      markersGroup.current.push(mapMarker);
    });

    return () => {
      markersGroup.current.forEach(marker => marker.remove());
      markersGroup.current = [];
    }
  }, [dispatch, events]);

  useEffect(() => {
    // revisit this because stringify O(n) & brittle
    // maybe some sort of numeric compare
    if (tempMarker.current) tempMarker.current.remove();

    const tempArr = JSON.stringify(tempCoords);
    const eventArr = JSON.stringify(
      events.map((event) => {
        return event.location.coordinates;
      })
    );
    const geoCoordsArr = JSON.stringify(geoCoords);

    let coordsPresent = eventArr.indexOf(tempArr);
    let sameCoords = geoCoordsArr.indexOf(tempArr);

    if (sameCoords !== -1) return;
    if (coordsPresent !== -1) return;

    tempMarker.current = new mapboxgl.Marker({ color: '#656565', scale: 1 })
      .setLngLat([tempCoords[0], tempCoords[1]])
      .addTo(mapRef.current);

      return () => tempMarker.current.remove();
  }, [events, tempCoords, geoCoords]);

  return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  );
}
