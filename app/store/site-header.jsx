"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "./cart-provider";

export function SiteHeader() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  return <>
    <header className="site-header">
      <button className="icon-button mobile-menu" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu size={20} strokeWidth={1.6} /></button>
      <Link className="wordmark" href="/" aria-label="Senatorr home"><span className="brand-mark">S</span><span>SENATORR<span className="brand-period">.</span></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Link href="/shop">Shop all</Link><Link href="/shop?category=Knitwear">Knitwear</Link><Link href="/shop?category=Polos">Polos</Link><a href="https://www.instagram.com/poshake_senatorr/" target="_blank" rel="noreferrer">Our Instagram</a></nav>
      <div className="header-actions"><Link className="search-link" href="/shop"><Search size={18} strokeWidth={1.6} /><span>Search</span></Link><Link className="bag-link" href="/cart" aria-label={`Shopping bag, ${count} items`}><ShoppingBag size={19} strokeWidth={1.6} /><span>Bag</span><span className="bag-count">{count}</span></Link></div>
    </header>
    {open && <div className="mobile-drawer-backdrop" onClick={() => setOpen(false)}>
      <aside className="mobile-drawer" onClick={(event) => event.stopPropagation()} aria-label="Navigation menu">
        <div className="drawer-head"><Link className="wordmark" href="/" onClick={() => setOpen(false)}><span className="brand-mark">S</span><span>SENATORR<span className="brand-period">.</span></span></Link><button className="icon-button" onClick={() => setOpen(false)} aria-label="Close navigation"><X size={21} /></button></div>
        <p className="eyebrow">Discover Senatorr</p><Link onClick={() => setOpen(false)} href="/shop">Shop all <span>↗</span></Link><Link onClick={() => setOpen(false)} href="/shop?category=Knitwear">Knitwear <span>↗</span></Link><Link onClick={() => setOpen(false)} href="/shop?category=Polos">Polos <span>↗</span></Link><Link onClick={() => setOpen(false)} href="/cart">Your bag <span>↗</span></Link>
        <a className="drawer-social" href="https://www.instagram.com/poshake_senatorr/" target="_blank" rel="noreferrer">Instagram ↗</a>
      </aside>
    </div>}
  </>;
}
