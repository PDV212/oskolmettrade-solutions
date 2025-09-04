import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CacheManager from './utils/cacheManager.ts'

// Инициализируем кеширование и оптимизации производительности
const cacheManager = CacheManager.getInstance();
cacheManager.init();

// Предзагрузка критических ресурсов для ускорения
const criticalImages = [
  '/assets/hero-industrial.jpg',
  '/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png',
  '/lovable-uploads/adb38e62-ebf5-4d0f-92a9-272c1f38c8f4.png'
];

// Lazy loading для некритичных изображений
const lazyImages = [
  '/assets/equipment-manufacturing.jpg',
  '/assets/metallurgy-furnace.jpg', 
  '/assets/raw-materials.jpg'
];

// Предзагружаем критичные изображения немедленно
cacheManager.preloadImages(criticalImages).catch(console.warn);

// Lazy load некритичных изображений через 2 секунды
setTimeout(() => {
  cacheManager.preloadImages(lazyImages).catch(console.warn);
}, 2000);

// Оптимизация производительности
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
