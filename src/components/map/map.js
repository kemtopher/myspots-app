import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setActive } from "../../store/slices/events";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoiY2tlbWV6YTEiLCJhIjoiY2x1eDJlb2ZkMGoyYTJsa2xvdjNlbWdtOCJ9.sqWPYFQf4FJtw47DYoGI0g';

export const Map = React.memo(({ lon, lat, events }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);
    const dispatch = useDispatch();
    console.log("Map reload")

    useEffect(() => {
        if (map.current) {
            if (marker.current) {
                marker.current.remove();
            }
    
            map.current.flyTo({
                center: [lon, lat],
                essential: true
            });
    
            // marker.current = new mapboxgl.Marker({color: '#FF0000'}).setLngLat([lon, lat]).addTo(map.current);
        }

        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [lon, lat],
                zoom: 16,
                // scrollZoom: false
            });

            var nav = new mapboxgl.NavigationControl({
                showZoom: true
            });
        
            map.current.addControl(nav, "top-left");
    
            map.current.on("load", () => {
                map.current.resize();
            });
        }

        // return () => map.current.remove();
    }, [lon, lat]);

    useEffect(() => {
        if (!events) return;

        events.forEach((event) => {
            const popup = new mapboxgl.Popup({ offset: 25 }).setText(
                'Construction on the Washington Monument began in 1848.'
            );

            const marker = new mapboxgl.Marker()
            .setLngLat([event.location.coordinates[0], event.location.coordinates[1]])
            .setPopup(popup)
            .addTo(map.current);

            marker.getElement().addEventListener('click', () => {
                dispatch(setActive(event));
            })
        })
    }, [events, dispatch]);


    return (
        <>
            <div ref={mapContainer} className="map-container" />
        </>
    )
})
