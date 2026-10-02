"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../store/cart-provider";

const instagram = "https://www.instagram.com/poshake_senatorr/";

export default function CartPage() {
  const { items, count, change, remove } = useCart();
  return <main className="cart-page section-wrap">
    <p className="eyebrow"><span className="eyebrow-line" />سبد خرید شما</p><div className="cart-title-row"><h1>سبد خرید<span className="brand-period">.</span></h1><span>{new Intl.NumberFormat("fa-IR").format(count)} محصول</span></div>
    {items.length ? <div className="cart-layout"><div className="cart-items">{items.map((item) => <article className="cart-item" key={item.cartKey || item.id}><div className="cart-image"><Image src={item.image} alt={`${item.name}، رنگ ${item.color}`} fill sizes="150px" /></div><div className="cart-item-info"><p className="product-category">{item.category}</p><h2>{item.name}</h2><p className="product-color">{item.color}</p>{item.variant && <p className="product-color">سایز: {item.variant}</p>}<span className="price-note">قیمت از طریق دایرکت اعلام می‌شود</span><div className="quantity-control"><button onClick={() => change(item.cartKey || item.id, -1)} aria-label={`حذف یک عدد از ${item.name}`}><Minus size={14} /></button><span>{new Intl.NumberFormat("fa-IR").format(item.quantity)}</span><button onClick={() => change(item.cartKey || item.id, 1)} aria-label={`افزودن یک عدد از ${item.name}`}><Plus size={14} /></button></div></div><button className="remove-item" onClick={() => remove(item.cartKey || item.id)} aria-label={`حذف ${item.name} از سبد خرید`}><Trash2 size={17} /></button></article>)}</div><aside className="cart-summary"><p className="eyebrow">درخواست اختصاصی</p><h2>انتخابتان را نهایی کنید.</h2><p>برای اطلاع از قیمت روز، موجودی و جزئیات محصولات، از طریق دایرکت با ما در ارتباط باشید.</p><a className="button button-dark" href={instagram} target="_blank" rel="noreferrer">ادامه در اینستاگرام <ArrowUpRight size={16} /></a><span className="summary-small">سبد شما در همین مرورگر ذخیره می‌شود.</span></aside></div> : <div className="empty-bag"><span className="empty-bag-icon">S</span><h2>سبد خریدتان منتظر انتخاب شماست.</h2><p>مجموعه را ببینید و محصولات دلخواهتان را اضافه کنید.</p><Link className="button button-dark" href="/shop">دیدن مجموعه <ArrowUpRight size={16} /></Link></div>}
    {items.length > 0 && <Link className="continue-shopping" href="/shop"><ArrowLeft size={15} /> ادامه گشت‌وگذار</Link>}
  </main>;
}
