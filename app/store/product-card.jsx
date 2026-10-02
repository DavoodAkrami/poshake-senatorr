"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "./cart-provider";

export function ProductCard({ product, index = 0 }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  function addToBag() { add(product); setAdded(true); window.setTimeout(() => setAdded(false), 1500); }
  return <article className="product-card" style={{ "--card-index": index }}>
    <Link className="product-image-link" href={`/product/${product.id}`} aria-label={`مشاهده ${product.name}`}>
      <div className="product-image"><Image src={product.image} alt={`${product.name}، رنگ ${product.color}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" /><span className="product-number">{new Intl.NumberFormat("fa-IR", { minimumIntegerDigits: 2, useGrouping: false }).format(Number(product.id))}</span><span className="quick-view"><ArrowUpLeft size={16} /></span></div>
    </Link>
    <div className="product-info"><div><p className="product-category">{product.category}</p><h3><Link href={`/product/${product.id}`}>{product.name}</Link></h3><p className="product-color">{product.color}</p></div><button className={`add-button ${added ? "added" : ""}`} onClick={addToBag} aria-label={`افزودن ${product.name} به سبد خرید`}>{added ? "افزوده شد" : <Plus size={18} strokeWidth={1.5} />}</button></div>
    <p className="price-note">استعلام قیمت <span>·</span> جزئیات در دایرکت</p>
  </article>;
}
