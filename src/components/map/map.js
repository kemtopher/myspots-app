import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { removeActive, setActive } from '../../store/slices/events';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken =
  'pk.eyJ1IjoiY2tlbWV6YTEiLCJhIjoiY2x1eDJlb2ZkMGoyYTJsa2xvdjNlbWdtOCJ9.sqWPYFQf4FJtw47DYoGI0g';
let markersGroup = [];

export const Map = React.memo(
  ({ lon = -84.4209138, lat = 33.7312114, events }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);
    const dispatch = useDispatch();

    console.log('LL: ', lon, lat);

    useEffect(() => {
      if (map.current) {
        if (marker.current) {
          marker.current.remove();
        }

        map.current.flyTo({
          center: [lon, lat],
          essential: true
        });
      }

      if (!map.current) {
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/light-v11',
          center: [lon, lat],
          zoom: 16
        });

        var nav = new mapboxgl.NavigationControl({
          showZoom: true
        });

        map.current.addControl(nav, 'top-left');

        map.current.on('load', () => {
          map.current.resize();
        });
      }

      // return () => map.current.remove();
    }, [lon, lat]);

    useEffect(() => {
      markersGroup.forEach((marker) => marker.remove());
      markersGroup = [];

      events.forEach((event) => {
        let markerColor;

        if (event.active) {
          markerColor = '#FF0000';
        } else {
          markerColor = '#1565c0';
        }

        let eventMarker = new mapboxgl.Marker({ color: markerColor })
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

    return (
      <>
        <div ref={mapContainer} className="map-container" />
      </>
    );
  }
);
