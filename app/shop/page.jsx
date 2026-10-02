"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { products } from "../store/products";
import { ProductCard } from "../store/product-card";

const categories = ["All pieces", "Knitwear", "Polos", "Sweatshirts"];

export default function ShopPage() {
  const [category, setCategory] = useState("All pieces");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  useEffect(() => {
    const initialCategory = new URLSearchParams(window.location.search).get("category");
    if (categories.includes(initialCategory)) setCategory(initialCategory);
  }, []);
  const visible = useMemo(() => {
    const result = products.filter((item) => (category === "All pieces" || item.category === category) && `${item.name} ${item.color} ${item.category}`.toLowerCase().includes(query.toLowerCase()));
    if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "color") result.sort((a, b) => a.color.localeCompare(b.color));
    return result;
  }, [category, query, sort]);

  return <main className="shop-page section-wrap">
    <div className="shop-topline"><p className="eyebrow"><span className="eyebrow-line" />SENATORR / THE COLLECTION</p><span>01 — 09 / EDITION ONE</span></div>
    <div className="shop-heading"><div><h1>Find your <em>favourite.</em></h1><p>A considered collection of pieces for wherever the day takes you.</p></div><div className="shop-count">{visible.length.toString().padStart(2, "0")} <span>pieces</span></div></div>
    <div className="shop-toolbar"><div className="category-tabs" role="tablist" aria-label="Filter by category">{categories.map((item) => <button key={item} role="tab" aria-selected={category === item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="shop-tools"><label className="search-field"><Search size={17} strokeWidth={1.6} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search pieces" aria-label="Search pieces" />{query && <button onClick={() => setQuery("")} aria-label="Clear search"><X size={15} /></button>}</label><button className="filter-mobile" onClick={() => setFiltersOpen((value) => !value)}><SlidersHorizontal size={16} /> Filters</button><label className="sort-field"><span>Sort:</span><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products"><option value="featured">Featured</option><option value="name">Name</option><option value="color">Color</option></select></label></div></div>
    {filtersOpen && <div className="mobile-filter-panel">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => { setCategory(item); setFiltersOpen(false); }}>{item}<span>{item === "All pieces" ? products.length : products.filter((p) => p.category === item).length}</span></button>)}</div>}
    {visible.length ? <div className="product-grid shop-grid">{visible.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div> : <div className="empty-search"><span>Nothing found just yet.</span><p>Try another search or browse the full collection.</p><button className="button button-dark" onClick={() => { setQuery(""); setCategory("All pieces"); }}>Show all pieces</button></div>}
    <div className="shop-footnote"><span>Prices and availability are shared by DM.</span><a href="https://www.instagram.com/poshake_senatorr/" target="_blank" rel="noreferrer">Ask us on Instagram ↗</a></div>
  </main>;
}
