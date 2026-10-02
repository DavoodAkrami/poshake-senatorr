"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "senatorr-bag-v1";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try { setItems(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")); } catch { setItems([]); }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const value = useMemo(() => ({
    items,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    add: (product) => setItems((current) => {
      const cartKey = product.cartKey || product.id;
      const existing = current.find((item) => (item.cartKey || item.id) === cartKey);
      return existing ? current.map((item) => (item.cartKey || item.id) === cartKey ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, cartKey, quantity: 1 }];
    }),
    change: (id, delta) => setItems((current) => current.map((item) => (item.cartKey || item.id) === id ? { ...item, quantity: item.quantity + delta } : item).filter((item) => item.quantity > 0)),
    remove: (id) => setItems((current) => current.filter((item) => (item.cartKey || item.id) !== id)),
    clear: () => setItems([])
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used within CartProvider");
  return value;
}
