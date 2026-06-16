import { products } from "../data/products";
import { Product } from "../types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  selectedCategory: string | null;
  onProductClick: (product: Product) => void;
  addToCart: (product: Product, size: string) => void;
}

export function ProductGrid({
  selectedCategory,
  onProductClick,
  addToCart,
}: ProductGridProps) {
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const categoryTitle = selectedCategory
    ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
    : "All Products";

  return (
    <section className="py-12 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-stone-900">{categoryTitle}</h2>
            <p className="text-stone-500 text-sm mt-1">
              {filteredProducts.length} products
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <select className="bg-white border border-stone-200 rounded-lg px-4 py-2 text-sm text-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}