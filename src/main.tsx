import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CacheManager from './utils/cacheManager.ts'

// Инициализируем кеширование
const cacheManager = CacheManager.getInstance();
cacheManager.init();

// Предзагрузка критических ресурсов
const criticalImages = [
  '/assets/hero-industrial.jpg',
  '/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png'
];

cacheManager.preloadImages(criticalImages).catch(console.warn);

createRoot(document.getElementById("root")!).render(<App />);
