import React, { useState, useMemo } from 'react';
import { Filter, Grid3X3, List, Search, ChevronDown, ChevronRight, Package, Wrench, Flame, Building2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import OptimizedImage from '@/components/ui/optimized-image';

// Типы для каталога
interface ProductItem {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  tags: string[];
  price?: string;
  image?: string;
  description: string;
  specifications?: Record<string, string>;
}

interface CatalogSection {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  subcategories: string[];
  products: ProductItem[];
}

const CatalogNavigation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedSections, setExpandedSections] = useState<string[]>(['equipment']);

  // Данные каталога
  const catalogSections: CatalogSection[] = [
    {
      id: 'equipment',
      name: 'Металлообрабатывающее оборудование',
      icon: Wrench,
      color: 'text-primary',
      subcategories: [
        'Обрабатывающие центры с ЧПУ',
        'Токарные станки',
        'Шлифовальные станки',
        'Гидравлические прессы',
        'Роботизированные системы'
      ],
      products: [
        {
          id: 'cnc-vertical-1',
          name: 'Вертикальный обрабатывающий центр VMC-850',
          category: 'equipment',
          subcategory: 'Обрабатывающие центры с ЧПУ',
          tags: ['ЧПУ', 'вертикальный', 'высокая точность'],
          price: 'По запросу',
          image: '/lovable-uploads/b5b9d48f-fa70-463f-b4c5-98e99b19fbaa.png',
          description: 'Высокоточный вертикальный обрабатывающий центр для обработки сложных деталей',
          specifications: {
            'Рабочая зона': '850×500×500 мм',
            'Точность': '±0.005 мм',
            'Мощность шпинделя': '7.5 кВт'
          }
        },
        {
          id: 'lathe-cnc-1',
          name: 'Токарный станок с ЧПУ CNC-320',
          category: 'equipment',
          subcategory: 'Токарные станки',
          tags: ['токарный', 'ЧПУ', 'автоматизация'],
          price: 'По запросу',
          image: '/lovable-uploads/9037fa8f-e102-4232-a549-87fbfcd6bdd2.png',
          description: 'Современный токарный станок с системой ЧПУ для серийного производства',
          specifications: {
            'Диаметр обработки': '320 мм',
            'Длина обработки': '750 мм',
            'Система ЧПУ': 'Fanuc 0i-TD'
          }
        },
        {
          id: 'robot-welder-1',
          name: 'Роботизированный сварочный комплекс',
          category: 'equipment',
          subcategory: 'Роботизированные системы',
          tags: ['робот', 'сварка', 'автоматизация'],
          price: 'По запросу',
          image: '/lovable-uploads/761c2c04-8071-4122-94b3-bb0d459d2e87.png',
          description: 'Полностью автоматизированный сварочный комплекс с промышленными манипуляторами',
          specifications: {
            'Рабочий радиус': '2100 мм',
            'Грузоподъемность': '20 кг',
            'Точность позиционирования': '±0.08 мм'
          }
        }
      ]
    },
    {
      id: 'materials',
      name: 'Металлургическое сырье',
      icon: Package,
      color: 'text-accent',
      subcategories: [
        'Руды и концентраты',
        'Ферросплавы',
        'Легирующие элементы',
        'Огнеупорные материалы'
      ],
      products: [
        {
          id: 'manganese-ore',
          name: 'Марганцевая руда МР-25',
          category: 'materials',
          subcategory: 'Руды и концентраты',
          tags: ['марганец', 'руда', 'высокое качество'],
          description: 'Высококачественная марганцевая руда для металлургического производства',
          image: '/lovable-uploads/a6f5d8cf-10e5-4159-9959-51419a44edc9.png',
          specifications: {
            'Содержание Mn': '25-30%',
            'Влажность': 'не более 8%',
            'Фракция': '0-40 мм'
          }
        },
        {
          id: 'ferrochrome',
          name: 'Феррохром FeCr60',
          category: 'materials',
          subcategory: 'Ферросплавы',
          tags: ['феррохром', 'ферросплав', 'высокоуглеродистый'],
          description: 'Высокоуглеродистый феррохром для производства нержавеющей стали',
          image: '/lovable-uploads/9676f778-2096-4758-bdfe-13e24c70089a.png',
          specifications: {
            'Содержание Cr': '60-65%',
            'Содержание C': '6-8%',
            'Размер': '10-50 мм'
          }
        }
      ]
    },
    {
      id: 'furnaces',
      name: 'Металлургические печи',
      icon: Flame,
      color: 'text-secondary',
      subcategories: [
        'Индукционные печи',
        'Дуговые печи',
        'Печи сопротивления',
        'Вакуумные печи'
      ],
      products: [
        {
          id: 'induction-furnace',
          name: 'Индукционная печь ИП-10',
          category: 'furnaces',
          subcategory: 'Индукционные печи',
          tags: ['индукция', 'плавка', 'высокая эффективность'],
          description: 'Высокоэффективная индукционная печь для плавки металлов',
          image: '/lovable-uploads/edf23884-f593-4722-b789-00f5ca57510a.png',
          specifications: {
            'Емкость': '10 тонн',
            'Мощность': '6000 кВт',
            'Частота': '250 Гц'
          }
        }
      ]
    },
    {
      id: 'manufacturing',
      name: 'Изделия производства ВСЗ',
      icon: Building2,
      color: 'text-primary',
      subcategories: [
        'Детали для нефтегаза',
        'Атомное машиностроение',
        'Общее машиностроение',
        'Специальные изделия'
      ],
      products: [
        {
          id: 'valve-body',
          name: 'Корпус арматуры',
          category: 'manufacturing',
          subcategory: 'Детали для нефтегаза',
          tags: ['арматура', 'нефтегаз', 'точная обработка'],
          description: 'Прецизионная обработка корпусов арматуры для нефтегазовой отрасли',
          specifications: {
            'Материал': 'Сталь 20Х13',
            'Точность': '6-7 квалитет',
            'Шероховатость': 'Ra 1.6'
          }
        }
      ]
    }
  ];

  // Получение всех продуктов
  const allProducts = useMemo(() => {
    return catalogSections.reduce((acc, section) => {
      return [...acc, ...section.products];
    }, [] as ProductItem[]);
  }, []);

  // Фильтрация продуктов
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Фильтр по категории
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Фильтр по подкатегории
    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
    }

    // Поиск по названию и описанию
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Фильтр по тегам
    if (activeFilters.length > 0) {
      filtered = filtered.filter(product =>
        activeFilters.some(filter =>
          product.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
        )
      );
    }

    return filtered;
  }, [allProducts, selectedCategory, selectedSubcategory, searchQuery, activeFilters]);

  // Получение всех тегов для фильтров
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allProducts.forEach(product => {
      product.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [allProducts]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSearchQuery('');
  };

  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">Каталог продукции</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный каталог нашей продукции и услуг с расширенными возможностями поиска и фильтрации
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Боковая панель с фильтрами */}
          <div className="lg:col-span-1 space-y-6">
            {/* Поиск */}
            <Card className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Поиск в каталоге..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </Card>

            {/* Активные фильтры */}
            {(activeFilters.length > 0 || selectedCategory !== 'all' || selectedSubcategory !== 'all') && (
              <Card className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Активные фильтры</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-xs"
                  >
                    Очистить все
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory !== 'all' && (
                    <Badge variant="secondary" className="text-xs">
                      {catalogSections.find(s => s.id === selectedCategory)?.name}
                      <X 
                        className="ml-1 w-3 h-3 cursor-pointer" 
                        onClick={() => setSelectedCategory('all')}
                      />
                    </Badge>
                  )}
                  {selectedSubcategory !== 'all' && (
                    <Badge variant="secondary" className="text-xs">
                      {selectedSubcategory}
                      <X 
                        className="ml-1 w-3 h-3 cursor-pointer" 
                        onClick={() => setSelectedSubcategory('all')}
                      />
                    </Badge>
                  )}
                  {activeFilters.map(filter => (
                    <Badge key={filter} variant="secondary" className="text-xs">
                      {filter}
                      <X 
                        className="ml-1 w-3 h-3 cursor-pointer" 
                        onClick={() => removeFilter(filter)}
                      />
                    </Badge>
                  ))}
                </div>
              </Card>
            )}

            {/* Навигация по разделам */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4">Разделы каталога</h3>
              <div className="space-y-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory('all');
                  }}
                >
                  Все разделы
                </Button>
                {catalogSections.map(section => (
                  <div key={section.id}>
                    <Collapsible
                      open={expandedSections.includes(section.id)}
                      onOpenChange={() => toggleSection(section.id)}
                    >
                      <CollapsibleTrigger asChild>
                        <Button
                          variant={selectedCategory === section.id ? 'default' : 'ghost'}
                          className="w-full justify-between"
                          onClick={() => {
                            setSelectedCategory(section.id);
                            setSelectedSubcategory('all');
                          }}
                        >
                          <div className="flex items-center">
                            <section.icon className={`w-4 h-4 mr-2 ${section.color}`} />
                            <span className="text-sm">{section.name}</span>
                          </div>
                          {expandedSections.includes(section.id) ? 
                            <ChevronDown className="w-4 h-4" /> : 
                            <ChevronRight className="w-4 h-4" />
                          }
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 mt-1">
                        {section.subcategories.map(subcategory => (
                          <Button
                            key={subcategory}
                            variant={selectedSubcategory === subcategory ? 'secondary' : 'ghost'}
                            size="sm"
                            className="w-full justify-start ml-6 text-xs"
                            onClick={() => {
                              setSelectedCategory(section.id);
                              setSelectedSubcategory(subcategory);
                            }}
                          >
                            {subcategory}
                          </Button>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                ))}
              </div>
            </Card>

            {/* Теги для фильтрации */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4">Фильтры по тегам</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Badge
                    key={tag}
                    variant={activeFilters.includes(tag) ? 'default' : 'outline'}
                    className="cursor-pointer text-xs"
                    onClick={() => 
                      activeFilters.includes(tag) ? removeFilter(tag) : addFilter(tag)
                    }
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3">
            {/* Панель управления */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  Найдено: {filteredProducts.length} товаров
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Сетка продуктов */}
            {filteredProducts.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
                {filteredProducts.map(product => (
                  <Card key={product.id} className="overflow-hidden card-industrial">
                    {viewMode === 'grid' ? (
                      <>
                        {product.image && (
                          <div className="aspect-video relative">
                            <OptimizedImage
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <h4 className="font-semibold mb-2">{product.name}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {product.tags.map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          {product.price && (
                            <div className="text-primary font-semibold">{product.price}</div>
                          )}
                          <Button size="sm" className="w-full mt-3">
                            Подробнее
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="flex gap-4 p-4">
                        {product.image && (
                          <div className="w-24 h-24 flex-shrink-0">
                            <OptimizedImage
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover rounded"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{product.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {product.tags.map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          {product.price && (
                            <div className="text-primary font-semibold text-sm">{product.price}</div>
                          )}
                        </div>
                        <div className="flex-shrink-0">
                          <Button size="sm">Подробнее</Button>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Товары не найдены</h3>
                <p className="text-muted-foreground mb-4">
                  Попробуйте изменить критерии поиска или очистить фильтры
                </p>
                <Button onClick={clearAllFilters}>
                  Очистить фильтры
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogNavigation;