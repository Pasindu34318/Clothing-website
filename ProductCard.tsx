import { Heart, Star } from "lucide-react";
import { Product } from "../types";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden cursor-pointer" onClick={onClick}>
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-emerald-600 text-white text-xs font-medium px-2 py-1 rounded-full">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="bg-rose-600 text-white text-xs font-medium px-2 py-1 rounded-full">
              SALE
            </span>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
            isLiked
              ? "bg-rose-100 text-rose-600"
              : "bg-white/80 text-stone-400 hover:text-rose-600"
          }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
        </button>

        {/* Quick Add */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 to-transparent p-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={onClick}
            className="w-full bg-white text-stone-900 font-medium py-2 rounded-lg hover:bg-amber-50 transition-colors text-sm"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3
          className="font-medium text-stone-900 mb-1 cursor-pointer hover:text-amber-700 transition-colors line-clamp-1"
          onClick={onClick}
        >
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? "text-amber-400 fill-current"
                    : "text-stone-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-stone-400">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-stone-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-stone-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Colors */}
        <div className="flex gap-1 mt-2">
          {product.colors.slice(0, 4).map((color) => (
            <div
              key={color}
              className="w-4 h-4 rounded-full border border-stone-200"
              style={{
                backgroundColor:
                  color.toLowerCase() === "white"
                    ? "#fff"
                    : color.toLowerCase() === "black"
                    ? "#1a1a1a"
                    : color.toLowerCase() === "navy"
                    ? "#1e3a5f"
                    : color.toLowerCase() === "gray"
                    ? "#9ca3af"
                    : color.toLowerCase() === "burgundy"
                    ? "#722f37"
                    : color.toLowerCase() === "cream"
                    ? "#f5f5dc"
                    : color.toLowerCase() === "olive"
                    ? "#708238"
                    : color.toLowerCase() === "khaki"
                    ? "#c3b091"
                    : color.toLowerCase() === "camel"
                    ? "#c19a6b"
                    : color.toLowerCase() === "indigo"
                    ? "#4b0082"
                    : color.toLowerCase() === "sage"
                    ? "#9dc183"
                    : color.toLowerCase() === "charcoal"
                    ? "#36454f"
                    : color.toLowerCase() === "stone"
                    ? "#8b8b83"
                    : "#d4d4d4",
              }}
              title={color}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-stone-400">+{product.colors.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  );
}