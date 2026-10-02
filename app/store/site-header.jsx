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
      <button className="icon-button mobile-menu" onClick={() => setOpen(true)} aria-label="باز کردن فهرست"><Menu size={20} strokeWidth={1.6} /></button>
      <Link className="wordmark" href="/" aria-label="صفحه اصلی سناتور"><span className="brand-mark">S</span><span>SENATORR<span className="brand-period">.</span></span></Link>
      <nav className="desktop-nav" aria-label="فهرست اصلی"><Link href="/shop">همه محصولات</Link><Link href="/shop?category=بافتنی">بافتنی</Link><Link href="/shop?category=پولوشرت">پولوشرت</Link><a href="https://www.instagram.com/poshake_senatorr/" target="_blank" rel="noreferrer">اینستاگرام ما</a></nav>
      <div className="header-actions"><Link className="search-link" href="/shop"><Search size={18} strokeWidth={1.6} /><span>جست‌وجو</span></Link><Link className="bag-link" href="/cart" aria-label={`سبد خرید، ${new Intl.NumberFormat("fa-IR").format(count)} محصول`}><ShoppingBag size={19} strokeWidth={1.6} /><span>سبد خرید</span><span className="bag-count">{new Intl.NumberFormat("fa-IR").format(count)}</span></Link></div>
    </header>
    {open && <div className="mobile-drawer-backdrop" onClick={() => setOpen(false)}>
      <aside className="mobile-drawer" onClick={(event) => event.stopPropagation()} aria-label="فهرست راهبری">
        <div className="drawer-head"><Link className="wordmark" href="/" onClick={() => setOpen(false)}><span className="brand-mark">S</span><span>SENATORR<span className="brand-period">.</span></span></Link><button className="icon-button" onClick={() => setOpen(false)} aria-label="بستن فهرست"><X size={21} /></button></div>
        <p className="eyebrow">سناتور را کشف کنید</p><Link onClick={() => setOpen(false)} href="/shop">همه محصولات <span>↗</span></Link><Link onClick={() => setOpen(false)} href="/shop?category=بافتنی">بافتنی <span>↗</span></Link><Link onClick={() => setOpen(false)} href="/shop?category=پولوشرت">پولوشرت <span>↗</span></Link><Link onClick={() => setOpen(false)} href="/cart">سبد خرید <span>↗</span></Link>
        <a className="drawer-social" href="https://www.instagram.com/poshake_senatorr/" target="_blank" rel="noreferrer">اینستاگرام ↗</a>
      </aside>
    </div>}
  </>;
}
