"use client";

import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "./cart-provider";

export function ProductCard({ product, index = 0 }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  function addToBag() { add(product); setAdded(true); window.setTimeout(() => setAdded(false), 1500); }
  return <article className="product-card" style={{ "--card-index": index }}>
    <a className="product-image-link" href="/shop" aria-label={`View ${product.name}`}>
      <div className="product-image"><Image src={product.image} alt={`${product.name} in ${product.color}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" /><span className="product-number">{product.id}</span><span className="quick-view"><ArrowUpRight size={16} /></span></div>
    </a>
    <div className="product-info"><div><p className="product-category">{product.category}</p><h3>{product.name}</h3><p className="product-color">{product.color}</p></div><button className={`add-button ${added ? "added" : ""}`} onClick={addToBag} aria-label={`Add ${product.name} to bag`}>{added ? "Added" : <Plus size={18} strokeWidth={1.5} />}</button></div>
    <p className="price-note">Ask for price <span>·</span> DM for details</p>
  </article>;
}
