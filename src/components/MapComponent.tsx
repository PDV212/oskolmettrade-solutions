import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) {
      console.log('MapContainer ref is not available');
      return;
    }

    console.log('Initializing Mapbox...');
    
    // Initialize map with the provided token
    mapboxgl.accessToken = 'pk.eyJ1IjoicGR2MjEyIiwiYSI6ImNtZXZmODVwZDBlbzUybHNoOGZjdmFmbW0ifQ.T13IG5O0bU0RCnMMcnB-1Q';
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [37.667087, 55.745509], // Москва, ул. Александра Солженицына
        zoom: 15,
        attributionControl: false
      });

      console.log('Mapbox map created successfully');

      // Wait for map to load before adding controls and markers
      map.current.on('load', () => {
        console.log('Mapbox map loaded');
        
        // Add navigation controls
        if (map.current) {
          map.current.addControl(
            new mapboxgl.NavigationControl(),
            'top-right'
          );

          // Add marker for office location
          new mapboxgl.Marker({ color: '#3b82f6' })
            .setLngLat([37.667087, 55.745509])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML(
                  '<div class="p-2"><h3 class="font-semibold">ОСКОЛ-МЕТ-ТРЕЙД</h3><p class="text-sm">109004, г. Москва,<br>ул. Александра Солженицына, д. 40, стр. 1</p></div>'
                )
            )
            .addTo(map.current);
        }
      });

      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
      });

    } catch (error) {
      console.error('Error initializing Mapbox:', error);
      return;
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default MapComponent;