import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [37.667087, 55.745509], // Москва, ул. Александра Солженицына
      zoom: 15,
    });

    // Add navigation controls
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
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken);
      setShowTokenInput(false);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h4 className="font-semibold mb-2">Интерактивная карта</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Для отображения карты введите ваш Mapbox Public Token
          </p>
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="text-sm"
            />
            <Button onClick={handleTokenSubmit} className="w-full">
              Показать карту
            </Button>
            <p className="text-xs text-muted-foreground">
              Получить токен можно на{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default MapComponent;