import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Set Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1IjoicGR2MjEyIiwiYSI6ImNtZXZmODVwZDBlbzUybHNoOGZjdmFmbW0ifQ.T13IG5O0bU0RCnMMcnB-1Q';

    // Initialize the map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [37.667087, 55.745509],
      zoom: 15
    });

    // Add navigation control
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker
    new mapboxgl.Marker()
      .setLngLat([37.667087, 55.745509])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          '<div><strong>ОСКОЛ-МЕТ-ТРЕЙД</strong><br/>109004, г. Москва, ул. А. Солженицына, д. 40, стр. 1</div>'
        )
      )
      .addTo(map.current);

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default MapComponent;