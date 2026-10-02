import "./styles.css";
import { CartProvider } from "./store/cart-provider";
import { SiteHeader } from "./store/site-header";

export const metadata = {
  title: "سناتور | پوشاک مردانه",
  description: "مجموعه‌ای منتخب از بافت‌های مدرن و لباس‌های روزمره سناتور.",
  openGraph: { title: "سناتور | پوشاک مردانه", description: "سادگیِ ماندگار برای هر روز." }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <CartProvider>
          <div className="announcement"><span>انتخاب سناتور</span><span>پوشاک روزمره با نگاهی دقیق</span><a href="https://www.instagram.com/poshake_senatorr/" target="_blank" rel="noreferrer">روایت ما در اینستاگرام <span aria-hidden="true">↗</span></a></div>
          <SiteHeader />
          {children}
          <footer className="footer">
            <div className="footer-brand"><a className="wordmark" href="/" aria-label="صفحه اصلی سناتور"><span className="brand-mark">S</span><span>SENATORR<span className="brand-period">.</span></span></a><p>انتخابی روزمره، با دقت و سلیقه.</p></div>
            <div className="footer-links"><a href="/shop">مشاهده مجموعه</a><a href="https://www.instagram.com/poshake_senatorr/" target="_blank" rel="noreferrer">اینستاگرام ↗</a><a href="/cart">سبد خرید</a></div>
            <div className="footer-note">قیمت و موجودی محصولات از طریق دایرکت اعلام می‌شود.<br />© {new Date().getFullYear()} سناتور</div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
