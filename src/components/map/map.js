import React, { Fragment, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoiY2tlbWV6YTEiLCJhIjoiY2x1eDJlb2ZkMGoyYTJsa2xvdjNlbWdtOCJ9.sqWPYFQf4FJtw47DYoGI0g';

export const Map = React.memo(({lon = 30, lat = 15, zoom = 8}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);

    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lon, lat],
            zoom: zoom
        });

        map.current.on("load", () => {
            map.current.resize();
        });
    }, [lon, lat, zoom])

    useEffect(() => {
        if (!map.current) return;

        if (marker.current) {
            marker.current.remove();
        }

        map.current.flyTo({
            center: [lon, lat],
            essential: true
        });

        marker.current = new mapboxgl.Marker().setLngLat([lon, lat]).addTo(map.current);
    }, [lon, lat]);

    return (
        <>
            <div ref={mapContainer} className="map-container" />
        </>
    )
})
