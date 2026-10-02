"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpLeft, Check, Instagram } from "lucide-react";
import { useState } from "react";
import { useCart } from "./cart-provider";

const instagram = "https://www.instagram.com/poshake_senatorr/";

export function ProductDetail({ product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  function addToBag() {
    add(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return <main className="product-detail section-wrap">
    <div className="pdp-breadcrumb"><Link href="/">خانه</Link><span>/</span><Link href="/shop">مجموعه</Link><span>/</span><span>{product.name}</span></div>
    <div className="pdp-layout">
      <div className="pdp-visual">
        <div className="pdp-image"><Image src={product.image} alt={`${product.name} به رنگ ${product.color}`} fill priority sizes="(max-width: 800px) 100vw, 55vw" /></div>
        <span className="pdp-image-index">SENATORR / {new Intl.NumberFormat("fa-IR", { minimumIntegerDigits: 2, useGrouping: false }).format(Number(product.id))}</span>
      </div>
      <div className="pdp-copy">
        <p className="eyebrow"><span className="eyebrow-line" />{product.category}</p>
        <h1>{product.name}</h1>
        <p className="pdp-color">{product.color}</p>
        <p className="pdp-description">{product.note}</p>
        <div className="pdp-rule" />
        <div className="pdp-enquiry"><span className="pdp-enquiry-mark">S</span><div><strong>برای اطلاع از قیمت و موجودی</strong><p>جزئیات سایزبندی و موجودی این محصول را از طریق دایرکت بپرسید.</p></div></div>
        <div className="pdp-actions"><button className={`button button-dark pdp-add ${added ? "is-added" : ""}`} onClick={addToBag}>{added ? <>به سبد خرید اضافه شد <Check size={16} /></> : <>افزودن به سبد خرید <ArrowRight size={16} /></>}</button><a className="button button-outline" href={instagram} target="_blank" rel="noreferrer"><Instagram size={16} /> پرسش در اینستاگرام <ArrowUpLeft size={16} /></a></div>
        <p className="pdp-saved-note">انتخاب شما در سبد خرید این مرورگر ذخیره می‌شود.</p>
        <Link className="pdp-back-link" href="/shop"><ArrowRight size={15} /> بازگشت به مجموعه</Link>
      </div>
    </div>
  </main>;
}
