import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeActive, setActive } from '../../store/slices/events';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken =
  'pk.eyJ1IjoiY2tlbWV6YTEiLCJhIjoiY2x1eDJlb2ZkMGoyYTJsa2xvdjNlbWdtOCJ9.sqWPYFQf4FJtw47DYoGI0g';
let markersGroup = [];
let tempMarker;

export const Map = React.memo(({ events }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const dispatch = useDispatch();
  const tempCoords = useSelector((state) => state.coordinates.current);
  const [geoCoords, setGeoCoords] = useState([]);

  useEffect(() => {
    if (map.current) {
      if (marker.current) {
        marker.current.remove();
      }

      map.current.flyTo({
        center: [tempCoords[0], tempCoords[1]],
        essential: true
      });
    }

    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [tempCoords[0], tempCoords[1]],
        cooperativeGestures: true,
        zoom: 16
      });

      const nav = new mapboxgl.NavigationControl({
        showZoom: false
      });

      const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      });

      map.current.addControl(nav, 'top-left');
      map.current.addControl(geolocate, 'top-left');

      map.current.on('load', () => {
        map.current.resize();
        geolocate.trigger();
      });

      geolocate.on('geolocate', function (e) {
        const lon = e.coords.longitude;
        const lat = e.coords.latitude;
        setGeoCoords([lon, lat]);
      });
    }

    // return () => map.current.remove();
  }, [tempCoords]);

  useEffect(() => {
    markersGroup.forEach((marker) => marker.remove());
    markersGroup = [];

    events.forEach((event) => {
      let markerColor, scale;

      if (event.active) {
        markerColor = '#FF0000';
      } else {
        markerColor = '#1565c0';
      }

      if (event.focused) {
        scale = 1.25;
      } else {
        scale = 1;
      }

      let eventMarker = new mapboxgl.Marker({
        color: markerColor,
        scale: scale
      })
        .setLngLat([
          event.location.coordinates[0],
          event.location.coordinates[1]
        ])
        .addTo(map.current);

      eventMarker.getElement().addEventListener('click', () => {
        if (event.active) {
          dispatch(removeActive(event));
        } else {
          dispatch(setActive(event));
        }
      });

      markersGroup = [...markersGroup, eventMarker];
    });
  });

  useEffect(() => {
    if (tempMarker) tempMarker.remove();

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

    tempMarker = new mapboxgl.Marker({ color: '#656565', scale: 1 })
      .setLngLat([tempCoords[0], tempCoords[1]])
      .addTo(map.current);
  }, [events, tempCoords, geoCoords]);

  return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  );
});
