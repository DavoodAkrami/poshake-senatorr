"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../store/cart-provider";

const instagram = "https://www.instagram.com/poshake_senatorr/";

export default function CartPage() {
  const { items, count, change, remove } = useCart();
  return <main className="cart-page section-wrap">
    <p className="eyebrow"><span className="eyebrow-line" />YOUR SENATORR BAG</p><div className="cart-title-row"><h1>Your bag<span className="brand-period">.</span></h1><span>{count.toString().padStart(2, "0")} {count === 1 ? "piece" : "pieces"}</span></div>
    {items.length ? <div className="cart-layout"><div className="cart-items">{items.map((item) => <article className="cart-item" key={item.id}><div className="cart-image"><Image src={item.image} alt={`${item.name} in ${item.color}`} fill sizes="150px" /></div><div className="cart-item-info"><p className="product-category">{item.category}</p><h2>{item.name}</h2><p className="product-color">{item.color}</p><span className="price-note">Price shared over DM</span><div className="quantity-control"><button onClick={() => change(item.id, -1)} aria-label={`Remove one ${item.name}`}><Minus size={14} /></button><span>{item.quantity}</span><button onClick={() => change(item.id, 1)} aria-label={`Add one ${item.name}`}><Plus size={14} /></button></div></div><button className="remove-item" onClick={() => remove(item.id)} aria-label={`Remove ${item.name} from bag`}><Trash2 size={17} /></button></article>)}</div><aside className="cart-summary"><p className="eyebrow">A PERSONAL ENQUIRY</p><h2>Make it yours.</h2><p>We’ll help with current pricing, availability and any details you need.</p><a className="button button-dark" href={instagram} target="_blank" rel="noreferrer">Continue on Instagram <ArrowUpRight size={16} /></a><span className="summary-small">Your selection stays saved in this browser.</span></aside></div> : <div className="empty-bag"><span className="empty-bag-icon">S</span><h2>Your bag is taking a quiet moment.</h2><p>Explore the collection and add a few favourites to get started.</p><Link className="button button-dark" href="/shop">Explore the collection <ArrowUpRight size={16} /></Link></div>}
    {items.length > 0 && <Link className="continue-shopping" href="/shop"><ArrowLeft size={15} /> Continue exploring</Link>}
  </main>;
}
