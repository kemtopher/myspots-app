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
  const mapMarker = useRef(null);
  const dispatch = useDispatch();
  const tempCoords = useSelector((state) => state.coordinates.current);
  const [geoCoords, setGeoCoords] = useState([]);
  const markersGroup = useRef([]);
  const tempMarker = useRef(null);

  useEffect(() => {
    // map setup and maintenance
    if (mapRef.current) {
      if (mapMarker.current) {
        mapMarker.current.remove();
      }

      mapRef.current.flyTo({
        center: [tempCoords[0], tempCoords[1]],
        essential: true
      });
    }

    if (!mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [tempCoords[0], tempCoords[1]],
        zoom: 16
      });

      const nav = new mapboxgl.NavigationControl({
        showZoom: true
      });

      const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      });

      mapRef.current.addControl(nav, 'top-left');
      mapRef.current.addControl(geolocate, 'top-left');
      // add full screen control
      // mapRef.current.addControl(new mapboxgl.FullscreenControl(), 'top-left');

      mapRef.current.on('load', () => {
        mapRef.current.resize();
        geolocate.trigger();
      });

      geolocate.on('geolocate', function (e) {
        const lon = e.coords.longitude;
        const lat = e.coords.latitude;
        setGeoCoords([lon, lat]);
      });
    }

    return () => {}
  }, [tempCoords]);

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
