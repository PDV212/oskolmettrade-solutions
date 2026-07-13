/**
 * CatalogNavigation — multilingual catalog UI.
 *
 * Claim-safety policy applied:
 *  - No Product / Offer / Brand / AggregateOffer JSON-LD is emitted.
 *  - No price, no currency, no InStock, no manufacturer, no country of
 *    origin, no certificate, no "high-quality" / "high-efficiency" /
 *    "fully automated" wording.
 *  - Product specifications are only rendered when the underlying
 *    CatalogProduct has verified specifications with a document source.
 *    (None currently do — evidence pending.)
 *  - Product images are qualified as illustrations via imageAlt.
 *  - Search is strictly local: no fetch / XHR / sendBeacon / storage.
 *  - CTA scrolls to same-page #contacts; it does not imply a details page.
 */
import { useMemo, useState } from "react";
import {
  Building2,
  ChevronDown,
  ChevronRight,
  Flame,
  Grid3X3,
  List,
  Package,
  Search,
  Wrench,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import OptimizedImage from "@/components/ui/optimized-image";
import CatalogImage from "@/components/CatalogImage";
import {
  CATALOG_CATEGORIES,
  CATALOG_PRODUCTS,
  CATALOG_UI,
  type CatalogCategory,
  type CatalogLanguage,
  type CatalogProduct,
} from "@/data/catalog";

// Map original public-upload image URLs to the responsive derivative slug
// under src/assets/catalog/. Adding a new catalog image requires generating
// derivatives and adding a mapping entry here.
const CATALOG_IMAGE_SLUGS: Record<string, string> = {
  "/lovable-uploads/b5b9d48f-fa70-463f-b4c5-98e99b19fbaa.png": "cnc-machine",
  "/lovable-uploads/9037fa8f-e102-4232-a549-87fbfcd6bdd2.png": "cnc-320",
  "/lovable-uploads/761c2c04-8071-4122-94b3-bb0d459d2e87.png": "robotic-welding",
  "/lovable-uploads/a6f5d8cf-10e5-4159-9959-51419a44edc9.png": "manganese-ore-mr25",
  "/lovable-uploads/9676f778-2096-4758-bdfe-13e24c70089a.png": "ferrochrome-fecr60",
  "/lovable-uploads/edf23884-f593-4722-b789-00f5ca57510a.png": "induction-furnace-ip10",
};


interface CatalogNavigationProps {
  language?: CatalogLanguage;
}

const iconMap = {
  wrench: Wrench,
  package: Package,
  flame: Flame,
  building: Building2,
} as const;

const CatalogNavigation = ({ language = "ru" }: CatalogNavigationProps) => {
  const t = CATALOG_UI[language];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategoryId, setSelectedSubcategoryId] =
    useState<string>("all");
  const [activeTagFilters, setActiveTagFilters] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "equipment",
  ]);

  const localizeTag = (
    tag: { ru: string; en: string; zh: string },
  ): string => tag[language];

  const allTagsForLanguage = useMemo(() => {
    const set = new Set<string>();
    CATALOG_PRODUCTS.forEach((p) =>
      p.tags.forEach((tag) => set.add(localizeTag(tag))),
    );
    return Array.from(set);
  }, [language]);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return CATALOG_PRODUCTS.filter((product) => {
      if (
        selectedCategory !== "all" &&
        product.categoryId !== selectedCategory
      ) {
        return false;
      }
      if (
        selectedSubcategoryId !== "all" &&
        product.subcategoryId !== selectedSubcategoryId
      ) {
        return false;
      }
      if (activeTagFilters.length > 0) {
        const productTags = product.tags.map(localizeTag);
        const anyMatch = activeTagFilters.some((f) => productTags.includes(f));
        if (!anyMatch) return false;
      }
      if (query.length > 0) {
        const haystack = [
          product.name[language],
          product.summary[language],
          product.model ?? "",
          ...product.tags.map(localizeTag),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [language, searchQuery, selectedCategory, selectedSubcategoryId, activeTagFilters]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  const addTagFilter = (tag: string) => {
    if (!activeTagFilters.includes(tag)) {
      setActiveTagFilters([...activeTagFilters, tag]);
    }
  };

  const removeTagFilter = (tag: string) => {
    setActiveTagFilters(activeTagFilters.filter((f) => f !== tag));
  };

  const clearAllFilters = () => {
    setActiveTagFilters([]);
    setSelectedCategory("all");
    setSelectedSubcategoryId("all");
    setSearchQuery("");
  };

  const scrollToContacts = () => {
    const el = document.getElementById("contacts");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (typeof window !== "undefined") {
      window.location.href = "mailto:oskolmettrade@yandex.ru";
    }
  };

  const findCategory = (id: string): CatalogCategory | undefined =>
    CATALOG_CATEGORIES.find((c) => c.id === id);

  const findSubcategoryLabel = (
    categoryId: string,
    subId: string,
  ): string | undefined =>
    findCategory(categoryId)?.subcategories.find((s) => s.id === subId)
      ?.label[language];

  const renderProductCard = (product: CatalogProduct) => {
    const name = product.name[language];
    const summary = product.summary[language];
    const alt = product.imageAlt[language];
    const localizedTags = product.tags.map(localizeTag);

    return (
      <Card key={product.id} className="overflow-hidden card-industrial">
        {viewMode === "grid" ? (
          <article>
            {product.image && (
              <figure className="w-24 h-24 mx-auto mb-4 pt-4">
                <OptimizedImage
                  src={product.image}
                  alt={alt}
                  className="w-full h-full object-cover rounded"
                  loading="lazy"
                />
              </figure>
            )}
            <div className="p-4">
              <h3 className="font-semibold mb-2">{name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{summary}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {localizedTags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="text-primary font-semibold text-sm">
                {t.termsOnRequest}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {t.conservativeNote}
              </p>
              <Button
                size="sm"
                className="w-full mt-3"
                type="button"
                onClick={scrollToContacts}
              >
                {t.ctaLabel}
              </Button>
            </div>
          </article>
        ) : (
          <article className="flex gap-4 p-4">
            {product.image && (
              <figure className="w-24 h-24 flex-shrink-0">
                <OptimizedImage
                  src={product.image}
                  alt={alt}
                  className="w-full h-full object-cover rounded"
                  loading="lazy"
                />
              </figure>
            )}
            <div className="flex-1">
              <h3 className="font-semibold mb-1">{name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{summary}</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {localizedTags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="text-primary font-semibold text-sm">
                {t.termsOnRequest}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {t.conservativeNote}
              </p>
            </div>
            <div className="flex-shrink-0 self-center">
              <Button size="sm" type="button" onClick={scrollToContacts}>
                {t.ctaLabel}
              </Button>
            </div>
          </article>
        )}
      </Card>
    );
  };

  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="heading-section mb-4">{t.sectionHeading}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.sectionIntro}
          </p>
        </header>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <Card className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="search"
                  name="catalog-filter"
                  autoComplete="off"
                  aria-label={t.searchAriaLabel}
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </Card>

            {(activeTagFilters.length > 0 ||
              selectedCategory !== "all" ||
              selectedSubcategoryId !== "all") && (
              <Card className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{t.activeFilters}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-xs"
                  >
                    {t.clearAll}
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory !== "all" && (
                    <Badge variant="secondary" className="text-xs">
                      {findCategory(selectedCategory)?.label[language]}
                      <button
                        type="button"
                        aria-label={t.removeFilterLabel(
                          findCategory(selectedCategory)?.label[language] ?? "",
                        )}
                        onClick={() => {
                          setSelectedCategory("all");
                          setSelectedSubcategoryId("all");
                        }}
                        className="ml-1"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  )}
                  {selectedSubcategoryId !== "all" && (
                    <Badge variant="secondary" className="text-xs">
                      {findSubcategoryLabel(
                        selectedCategory,
                        selectedSubcategoryId,
                      )}
                      <button
                        type="button"
                        aria-label={t.removeFilterLabel(
                          findSubcategoryLabel(
                            selectedCategory,
                            selectedSubcategoryId,
                          ) ?? "",
                        )}
                        onClick={() => setSelectedSubcategoryId("all")}
                        className="ml-1"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  )}
                  {activeTagFilters.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                      <button
                        type="button"
                        aria-label={t.removeFilterLabel(tag)}
                        onClick={() => removeTagFilter(tag)}
                        className="ml-1"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </Card>
            )}

            <Card className="p-4">
              <h3 className="font-semibold mb-4">{t.sections}</h3>
              <nav aria-label={t.sections} className="space-y-2">
                <Button
                  variant={selectedCategory === "all" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedSubcategoryId("all");
                  }}
                >
                  {t.allSections}
                </Button>
                {CATALOG_CATEGORIES.map((section) => {
                  const Icon = iconMap[section.iconKey];
                  const label = section.label[language];
                  const isExpanded = expandedSections.includes(section.id);
                  return (
                    <div key={section.id}>
                      <Collapsible
                        open={isExpanded}
                        onOpenChange={() => toggleSection(section.id)}
                      >
                        <CollapsibleTrigger asChild>
                          <Button
                            variant={
                              selectedCategory === section.id
                                ? "default"
                                : "ghost"
                            }
                            className="w-full justify-between"
                            aria-label={t.expandSectionLabel(label)}
                            onClick={() => {
                              setSelectedCategory(section.id);
                              setSelectedSubcategoryId("all");
                            }}
                          >
                            <span className="flex items-center">
                              <Icon className="w-4 h-4 mr-2 text-primary" />
                              <span className="text-sm">{label}</span>
                            </span>
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="space-y-1 mt-1">
                          {section.subcategories.map((sub) => (
                            <Button
                              key={sub.id}
                              variant={
                                selectedSubcategoryId === sub.id
                                  ? "secondary"
                                  : "ghost"
                              }
                              size="sm"
                              className="w-full justify-start ml-6 text-xs"
                              onClick={() => {
                                setSelectedCategory(section.id);
                                setSelectedSubcategoryId(sub.id);
                              }}
                            >
                              {sub.label[language]}
                            </Button>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  );
                })}
              </nav>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-4">{t.tagFilters}</h3>
              <div className="flex flex-wrap gap-2">
                {allTagsForLanguage.map((tag) => (
                  <Badge
                    key={tag}
                    variant={
                      activeTagFilters.includes(tag) ? "default" : "outline"
                    }
                    className="cursor-pointer text-xs"
                    onClick={() =>
                      activeTagFilters.includes(tag)
                        ? removeTagFilter(tag)
                        : addTagFilter(tag)
                    }
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-muted-foreground">
                {t.foundCount(filteredProducts.length)}
              </span>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  aria-label={t.gridViewLabel}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  aria-label={t.listViewLabel}
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {filteredProducts.map(renderProductCard)}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t.emptyTitle}</h3>
                <p className="text-muted-foreground mb-4">{t.emptyBody}</p>
                <Button onClick={clearAllFilters} type="button">
                  {t.clearFilters}
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
