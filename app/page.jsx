import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "./store/products";
import { ProductCard } from "./store/product-card";

export default function HomePage() {
  return <main>
    <section className="hero section-wrap">
      <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" />THE NEW EVERYDAY</p><h1>Quiet confidence.<br /><em>Every day.</em></h1><p className="hero-intro">A considered edit of modern knitwear and everyday essentials, made to move with you.</p><div className="hero-actions"><Link className="button button-dark" href="/shop">Explore the collection <ArrowRight size={16} /></Link><span className="hero-note">The Senatorr edit<br />Vol. 01 — The essentials</span></div><a href="#new-arrivals" className="scroll-cue"><ArrowDownRight size={17} /> Scroll to discover</a></div>
      <div className="hero-visual"><div className="hero-image-main"><Image src={products[4].image} alt="Navy contrast collar knit polo" fill priority sizes="(max-width: 900px) 100vw, 55vw" /></div><div className="hero-image-float"><Image src={products[2].image} alt="Ivory crest crewneck" fill sizes="180px" /></div><div className="hero-stamp"><span>01</span><span>CURATED<br />FOR YOU</span></div><p className="hero-caption">Texture, tone, and the details that matter.</p></div>
      <div className="hero-index"><span>01</span><span className="hero-index-rule" /><span>09</span></div>
    </section>

    <section className="value-strip"><p><span>01</span> Thoughtfully selected</p><span className="value-divider" /><p><span>02</span> Everyday, elevated</p><span className="value-divider" /><p><span>03</span> A personal edit</p></section>

    <section className="section-wrap arrivals" id="new-arrivals"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" />THE COLLECTION</p><h2>Considered <em>essentials.</em></h2></div><Link className="text-link" href="/shop">View all pieces <ArrowUpRight size={16} /></Link></div><div className="product-grid home-grid">{products.slice(0, 4).map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div></section>

    <section className="manifesto section-wrap"><div className="manifesto-art"><Image src={products[6].image} alt="Warm striped knit sweater from the Senatorr collection" fill sizes="(max-width: 768px) 100vw, 42vw" /><span className="manifesto-chip">THE DETAILS, MADE EASY</span></div><div className="manifesto-copy"><p className="eyebrow"><span className="eyebrow-line" />OUR POINT OF VIEW</p><h2>Less noise.<br /><em>More character.</em></h2><p>Pieces that feel right the moment you put them on. A thoughtful palette, tactile knits, and the kind of details you notice over time.</p><Link className="text-link" href="/shop">Find your everyday <ArrowRight size={16} /></Link></div></section>

    <section className="closing-cta"><p className="eyebrow"><span className="eyebrow-line" />YOUR NEXT FAVOURITE</p><h2>Good things<br /><em>start with a feeling.</em></h2><Link className="button button-light" href="/shop">Shop the edit <ArrowRight size={16} /></Link></section>
  </main>;
}
