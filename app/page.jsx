import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "./store/products";
import { ProductCard } from "./store/product-card";

export default function HomePage() {
  return <main>
    <section className="hero section-wrap">
      <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" />انتخاب تازه سناتور</p><h1>باوقار و ساده.<br /><em>برای هر روز.</em></h1><p className="hero-intro">مجموعه‌ای منتخب از بافت‌های مدرن و لباس‌های روزمره؛ برای همراهی با روزهای شما.</p><div className="hero-actions"><Link className="button button-dark" href="/shop">دیدن مجموعه <ArrowRight size={16} /></Link><span className="hero-note">انتخاب سناتور<br />مجموعه ۰۱ — ضروری‌ها</span></div><a href="#new-arrivals" className="scroll-cue"><ArrowDownRight size={17} /> دیدن محصولات</a></div>
      <div className="hero-visual"><div className="hero-image-main"><Image src={products[4].image} alt="پولوشرت بافت سرمه‌ای با یقه متضاد" fill priority sizes="(max-width: 900px) 100vw, 55vw" /></div><div className="hero-image-float"><Image src={products[2].image} alt="دورس روشن با نشان گلدوزی‌شده" fill sizes="180px" /></div><div className="hero-stamp"><span>۰۱</span><span>انتخاب<br />برای شما</span></div><p className="hero-caption">بافت، رنگ و جزئیاتی که اهمیت دارند.</p></div>
      <div className="hero-index"><span>۰۱</span><span className="hero-index-rule" /><span>۰۹</span></div>
    </section>

    <section className="value-strip"><p><span>۰۱</span> انتخاب‌شده با دقت</p><span className="value-divider" /><p><span>۰۲</span> روزمره، باکیفیت‌تر</p><span className="value-divider" /><p><span>۰۳</span> انتخابی برای شما</p></section>

    <section className="section-wrap arrivals" id="new-arrivals"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" />مجموعه سناتور</p><h2>ضروری‌های <em>روزمره.</em></h2></div><Link className="text-link" href="/shop">دیدن همه محصولات <ArrowUpRight size={16} /></Link></div><div className="product-grid home-grid">{products.slice(0, 4).map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div></section>

    <section className="manifesto section-wrap"><div className="manifesto-art"><Image src={products[6].image} alt="پلیور راه‌راه بافت از مجموعه سناتور" fill sizes="(max-width: 768px) 100vw, 42vw" /><span className="manifesto-chip">جزئیاتی که به‌چشم می‌آیند</span></div><div className="manifesto-copy"><p className="eyebrow"><span className="eyebrow-line" />نگاه ما</p><h2>هیاهوی کمتر.<br /><em>شخصیت بیشتر.</em></h2><p>لباس‌هایی که از همان لحظه اول حس خوبی دارند؛ رنگ‌هایی سنجیده، بافت‌های خوش‌لمس و جزئیاتی که با گذر زمان بیشتر به‌چشم می‌آیند.</p><Link className="text-link" href="/shop">انتخاب لباس روزمره <ArrowRight size={16} /></Link></div></section>

    <section className="closing-cta"><p className="eyebrow"><span className="eyebrow-line" />انتخاب بعدی شما</p><h2>انتخاب خوب<br /><em>با یک حس خوب شروع می‌شود.</em></h2><Link className="button button-light" href="/shop">دیدن مجموعه <ArrowRight size={16} /></Link></section>
  </main>;
}
