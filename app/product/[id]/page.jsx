import { notFound } from "next/navigation";
import { products } from "../../store/products";
import { ProductDetail } from "../../store/product-detail";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);
  return { title: product ? `${product.name} | سناتور` : "محصول پیدا نشد | سناتور" };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
