import { useState } from "react";
import { X, Star, Minus, Plus, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Product } from "../types";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  addToCart: (product: Product, size: string) => void;
}

export function ProductModal({ product, onClose, addToCart }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    if (selectedSize) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product, selectedSize);
      }
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5 text-stone-600" />
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Image */}
          <div className="lg:w-1/2 aspect-square lg:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.isNew && (
                <span className="bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full">
                  NEW ARRIVAL
                </span>
              )}
              {product.isSale && (
                <span className="bg-rose-100 text-rose-700 text-xs font-medium px-3 py-1 rounded-full">
                  ON SALE
                </span>
              )}
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mb-2">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-amber-400 fill-current"
                        : "text-stone-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-stone-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-stone-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-stone-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-stone-600 mb-6">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-stone-700">
                  Size
                </label>
                <button className="text-sm text-amber-700 hover:text-amber-800">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "border-amber-600 bg-amber-50 text-amber-700"
                        : "border-stone-200 hover:border-stone-400 text-stone-600"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="text-sm font-medium text-stone-700 mb-2 block">
                Color: <span className="font-normal text-stone-500">{product.colors[0]}</span>
              </label>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border-2 border-transparent hover:border-stone-400 transition-colors"
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
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-sm font-medium text-stone-700 mb-2 block">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-stone-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-stone-50 transition-colors"
                  >
                    <Minus className="w-4 h-4 text-stone-600" />
                  </button>
                  <span className="px-4 py-2 text-stone-900 font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-stone-50 transition-colors"
                  >
                    <Plus className="w-4 h-4 text-stone-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`flex-1 py-3 ${
                  selectedSize
                    ? "bg-amber-600 hover:bg-amber-700"
                    : "bg-stone-300 cursor-not-allowed"
                }`}
              >
                {selectedSize ? "Add to Cart" : "Select Size"}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsLiked(!isLiked)}
                className={`border-stone-200 ${
                  isLiked ? "text-rose-500 border-rose-500" : "text-stone-400"
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-stone-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-stone-500">Free shipping</p>
                  <p className="text-stone-900 font-medium">On orders over $150</p>
                </div>
                <div>
                  <p className="text-stone-500">Returns</p>
                  <p className="text-stone-900 font-medium">30-day free returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}