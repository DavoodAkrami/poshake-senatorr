import "./styles.css";
import { CartProvider } from "./store/cart-provider";
import { SiteHeader } from "./store/site-header";

export const metadata = {
  title: "Senatorr — Modern Menswear",
  description: "A considered edit of modern knitwear and everyday essentials from Senatorr.",
  openGraph: { title: "Senatorr — Modern Menswear", description: "Quiet confidence, worn every day." }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="announcement"><span>THE SENATORR EDIT</span><span>Modern essentials, considered.</span><a href="https://www.instagram.com/poshake_senatorr/" target="_blank" rel="noreferrer">Follow our story <span aria-hidden="true">↗</span></a></div>
          <SiteHeader />
          {children}
          <footer className="footer">
            <div className="footer-brand"><a className="wordmark" href="/" aria-label="Senatorr home"><span className="brand-mark">S</span><span>SENATORR<span className="brand-period">.</span></span></a><p>Everyday pieces, chosen with intention.</p></div>
            <div className="footer-links"><a href="/shop">Shop the collection</a><a href="https://www.instagram.com/poshake_senatorr/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="/cart">Your bag</a></div>
            <div className="footer-note">Product prices and availability are shared by DM.<br />© {new Date().getFullYear()} Senatorr</div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
