import React, { Fragment, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoiY2tlbWV6YTEiLCJhIjoiY2x1eDJlb2ZkMGoyYTJsa2xvdjNlbWdtOCJ9.sqWPYFQf4FJtw47DYoGI0g';

export const Map = ({lon= '-84', lat= '33', zoom = 8}) => {
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

        marker.current = new mapboxgl.Marker({color: '#FF0000'}).setLngLat([lon, lat]).addTo(map.current);


        events.forEach((event, index) => {
            new mapboxgl.Marker().setLngLat([event.lon, event.lat]).addTo(map.current);
        })
    }, [lon, lat]);

    return (
        <>
            <div ref={mapContainer} className="map-container" />
        </>
    )
}

const events = [
    { "city": "Tokyo", "lon": 139.6917, "lat": 35.6895 },
    { "city": "Delhi", "lon": 77.1025, "lat": 28.7041 },
    { "city": "Shanghai", "lon": 121.4737, "lat": 31.2304 },
    { "city": "São Paulo", "lon": -46.6333, "lat": -23.5505 },
    { "city": "Mexico City", "lon": -99.1332, "lat": 19.4326 },
    { "city": "Cairo", "lon": 31.2357, "lat": 30.0444 },
    { "city": "Mumbai", "lon": 72.8777, "lat": 19.0760 },
    { "city": "Beijing", "lon": 116.4074, "lat": 39.9042 },
    { "city": "Dhaka", "lon": 90.4125, "lat": 23.8103 },
    { "city": "Osaka", "lon": 135.5023, "lat": 34.6937 },
    { "city": "New York", "lon": -74.0060, "lat": 40.7128 },
    { "city": "Karachi", "lon": 67.0011, "lat": 24.8607 },
    { "city": "Buenos Aires", "lon": -58.3816, "lat": -34.6037 },
    { "city": "Chongqing", "lon": 106.5516, "lat": 29.5630 },
    { "city": "Istanbul", "lon": 28.9784, "lat": 41.0082 },
    { "city": "Kolkata", "lon": 88.3639, "lat": 22.5726 },
    { "city": "Manila", "lon": 120.9842, "lat": 14.5995 },
    { "city": "Lagos", "lon": 3.3792, "lat": 6.5244 },
    { "city": "Rio de Janeiro", "lon": -43.1729, "lat": -22.9068 },
    { "city": "Guangzhou", "lon": 113.2644, "lat": 23.1291 },
    { "city": "Los Angeles", "lon": -118.2437, "lat": 34.0522 },
    { "city": "Moscow", "lon": 37.6173, "lat": 55.7558 },
    { "city": "Kinshasa", "lon": 15.2663, "lat": -4.4419 },
    { "city": "Tianjin", "lon": 117.3616, "lat": 39.3434 },
    { "city": "Paris", "lon": 2.3522, "lat": 48.8566 },
    { "city": "Shenzhen", "lon": 114.0579, "lat": 22.5431 },
    { "city": "Jakarta", "lon": 106.8456, "lat": -6.2088 },
    { "city": "London", "lon": -0.1276, "lat": 51.5074 },
    { "city": "Bangalore", "lon": 77.5946, "lat": 12.9716 },
    { "city": "Lima", "lon": -77.0428, "lat": -12.0464 },
    { "city": "Bangkok", "lon": 100.5018, "lat": 13.7563 },
    { "city": "Chennai", "lon": 80.2707, "lat": 13.0827 },
    { "city": "Seoul", "lon": 126.9780, "lat": 37.5665 },
    { "city": "Bogotá", "lon": -74.0721, "lat": 4.7110 },
    { "city": "Hyderabad", "lon": 78.4867, "lat": 17.3850 },
    { "city": "Ho Chi Minh City", "lon": 106.6297, "lat": 10.8231 },
    { "city": "Nagoya", "lon": 136.9066, "lat": 35.1815 },
    { "city": "Chicago", "lon": -87.6298, "lat": 41.8781 },
    { "city": "Hong Kong", "lon": 114.1694, "lat": 22.3193 },
    { "city": "Pune", "lon": 73.8567, "lat": 18.5204 },
    { "city": "Khartoum", "lon": 32.5599, "lat": 15.5007 },
    { "city": "Luanda", "lon": 13.2343, "lat": -8.8390 },
    { "city": "Ahmedabad", "lon": 72.5714, "lat": 23.0225 },
    { "city": "Kuala Lumpur", "lon": 101.6869, "lat": 3.1390 },
    { "city": "Xi'an", "lon": 108.9398, "lat": 34.3416 },
    { "city": "Belo Horizonte", "lon": -43.9378, "lat": -19.9167 },
    { "city": "Madrid", "lon": -3.7038, "lat": 40.4168 },
    { "city": "Nairobi", "lon": 36.8219, "lat": -1.2921 },
    { "city": "Addis Ababa", "lon": 38.7578, "lat": 9.0084 },
    { "city": "Taipei", "lon": 121.5654, "lat": 25.0330 },
    { "city": "Alexandria", "lon": 29.9187, "lat": 31.2001 },
    { "city": "Toronto", "lon": -79.3832, "lat": 43.6532 },
    { "city": "Dar es Salaam", "lon": 39.2083, "lat": -6.7924 },
    { "city": "Miami", "lon": -80.1918, "lat": 25.7617 },
    { "city": "Wuhan", "lon": 114.3055, "lat": 30.5928 },
    { "city": "Sydney", "lon": 151.2093, "lat": -33.8688 },
    { "city": "Santiago", "lon": -70.6483, "lat": -33.4489 },
    { "city": "Pune", "lon": 73.8567, "lat": 18.5204 },
    { "city": "Surat", "lon": 72.8311, "lat": 21.1702 },
    { "city": "Abidjan", "lon": -4.0083, "lat": 5.3599 },
    { "city": "Harbin", "lon": 126.5347, "lat": 45.8038 },
    { "city": "Casablanca", "lon": -7.5898, "lat": 33.5731 },
    { "city": "Hamburg", "lon": 9.9937, "lat": 53.5511 },
    { "city": "Puebla", "lon": -98.2063, "lat": 19.0414 },
    { "city": "Phoenix", "lon": -112.0740, "lat": 33.4484 },
    { "city": "Dallas", "lon": -96.7970, "lat": 32.7767 },
    { "city": "Guadalajara", "lon": -103.3496, "lat": 20.6597 },
    { "city": "Yokohama", "lon": 139.6380, "lat": 35.4437 },
    { "city": "Kano", "lon": 8.5228, "lat": 12.0022 },
    { "city": "Brasília", "lon": -47.9292, "lat": -15.7801 },
    { "city": "Accra", "lon": -0.1860, "lat": 5.6037 },
    { "city": "Fukuoka", "lon": 130.4017, "lat": 33.5904 },
    { "city": "Medellín", "lon": -75.5636, "lat": 6.2442 },
    { "city": "Jinan", "lon": 117.1199, "lat": 36.6512 },
    { "city": "Hangzhou", "lon": 120.1551, "lat": 30.2741 },
    { "city": "Melbourne", "lon": 144.9631, "lat": -37.8136 },
    { "city": "Riyadh", "lon": 46.6753, "lat": 24.7136 },
    { "city": "Hanoi", "lon": 105.8342, "lat": 21.0285 },
    { "city": "Berlin", "lon": 13.4050, "lat": 52.5200 },
    { "city": "Cape Town", "lon": 18.4241, "lat": -33.9249 },
    { "city": "Montreal", "lon": -73.5673, "lat": 45.5017 },
    { "city": "Algiers", "lon": 3.0588, "lat": 36.7372 },
    { "city": "Qingdao", "lon": 120.3826, "lat": 36.0662 },
    { "city": "Durban", "lon": 31.0218, "lat": -29.8587 },
    { "city": "Casablanca", "lon": -7.5898, "lat": 33.5731 },
    { "city": "Almaty", "lon": 76.8958, "lat": 43.2389 },
    { "city": "Changsha", "lon": 112.9388, "lat": 28.2282 },
    { "city": "Kuwait City", "lon": 47.9774, "lat": 29.3759 },
    { "city": "Shenyang", "lon": 123.4315, "lat": 41.8057 },
    { "city": "Barcelona", "lon": 2.1734, "lat": 41.3851 },
    { "city": "Kabul", "lon": 69.2075, "lat": 34.5553 },
    { "city": "Rome", "lon": 12.4964, "lat": 41.9028 },
    { "city": "Zhengzhou", "lon": 113.6254, "lat": 34.7466 },
    { "city": "Hyderabad", "lon": 68.3737, "lat": 25.3960 },
    { "city": "Ankara", "lon": 32.8597, "lat": 39.9334 },
    { "city": "Porto Alegre", "lon": -51.2300, "lat": -30.0346 },
    { "city": "Shijiazhuang", "lon": 114.5149, "lat": 38.0428 },
    { "city": "Jaipur", "lon": 75.7873, "lat": 26.9124 }
];
