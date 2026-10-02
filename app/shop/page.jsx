"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { products } from "../store/products";
import { ProductCard } from "../store/product-card";

const categories = ["همه محصولات", "بافتنی", "پولوشرت", "دورس"];

export default function ShopPage() {
  const [category, setCategory] = useState("همه محصولات");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  useEffect(() => {
    const initialCategory = new URLSearchParams(window.location.search).get("category");
    if (categories.includes(initialCategory)) setCategory(initialCategory);
  }, []);
  const visible = useMemo(() => {
    const result = products.filter((item) => (category === "همه محصولات" || item.category === category) && `${item.name} ${item.color} ${item.category}`.toLowerCase().includes(query.toLowerCase()));
    if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name, "fa"));
    if (sort === "color") result.sort((a, b) => a.color.localeCompare(b.color, "fa"));
    return result;
  }, [category, query, sort]);

  return <main className="shop-page section-wrap">
    <div className="shop-topline"><p className="eyebrow"><span className="eyebrow-line" />سناتور / مجموعه</p><span>۰۱ — ۰۹ / مجموعه اول</span></div>
    <div className="shop-heading"><div><h1>انتخاب <em>دلخواهتان.</em></h1><p>مجموعه‌ای از لباس‌ها برای هر روز و هر حال‌وهوا.</p></div><div className="shop-count">{new Intl.NumberFormat("fa-IR", { minimumIntegerDigits: 2, useGrouping: false }).format(visible.length)} <span>محصول</span></div></div>
    <div className="shop-toolbar"><div className="category-tabs" role="tablist" aria-label="فیلتر بر اساس دسته‌بندی">{categories.map((item) => <button key={item} role="tab" aria-selected={category === item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="shop-tools"><label className="search-field"><Search size={17} strokeWidth={1.6} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جست‌وجوی محصولات" aria-label="جست‌وجوی محصولات" />{query && <button onClick={() => setQuery("")} aria-label="پاک کردن جست‌وجو"><X size={15} /></button>}</label><button className="filter-mobile" onClick={() => setFiltersOpen((value) => !value)}><SlidersHorizontal size={16} /> فیلترها</button><label className="sort-field"><span>مرتب‌سازی:</span><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="مرتب‌سازی محصولات"><option value="featured">پیشنهادی</option><option value="name">نام</option><option value="color">رنگ</option></select></label></div></div>
    {filtersOpen && <div className="mobile-filter-panel">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => { setCategory(item); setFiltersOpen(false); }}>{item}<span>{item === "همه محصولات" ? products.length : products.filter((p) => p.category === item).length}</span></button>)}</div>}
    {visible.length ? <div className="product-grid shop-grid">{visible.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div> : <div className="empty-search"><span>محصولی پیدا نشد.</span><p>عبارت دیگری را جست‌وجو کنید یا همه محصولات را ببینید.</p><button className="button button-dark" onClick={() => { setQuery(""); setCategory("همه محصولات"); }}>نمایش همه محصولات</button></div>}
    <div className="shop-footnote"><span>قیمت و موجودی از طریق دایرکت اعلام می‌شود.</span><a href="https://www.instagram.com/poshake_senatorr/" target="_blank" rel="noreferrer">پرسش در اینستاگرام ↗</a></div>
  </main>;
}
