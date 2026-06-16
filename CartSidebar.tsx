import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { CartItem } from "../types";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  removeFromCart: (productId: number, size: string) => void;
  updateQuantity: (productId: number, size: string, quantity: number) => void;
  total: number;
}

export function CartSidebar({
  isOpen,
  onClose,
  items,
  removeFromCart,
  updateQuantity,
  total,
}: CartSidebarProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-stone-900/50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-200">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-stone-600" />
              <h2 className="text-lg font-bold text-stone-900">Your Cart</h2>
              <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2 py-1 rounded-full">
                {items.length} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-stone-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-stone-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-stone-400" />
                </div>
                <p className="text-stone-600 font-medium mb-2">Your cart is empty</p>
                <p className="text-stone-400 text-sm">Add some items to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-4 bg-stone-50 p-3 rounded-xl"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-stone-900 text-sm truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-stone-500 text-xs">Size: {item.size}</p>
                      <p className="text-amber-700 font-semibold mt-1">
                        ${item.product.price}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-stone-200 rounded-lg bg-white">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.size, item.quantity - 1)
                            }
                            className="p-1 hover:bg-stone-50"
                          >
                            <Minus className="w-3 h-3 text-stone-600" />
                          </button>
                          <span className="px-2 text-sm text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.size, item.quantity + 1)
                            }
                            className="p-1 hover:bg-stone-50"
                          >
                            <Plus className="w-3 h-3 text-stone-600" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size)}
                          className="p-1 text-stone-400 hover:text-rose-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-stone-200 p-6 bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-stone-600">Subtotal</span>
                <span className="text-xl font-bold text-stone-900">${total.toFixed(2)}</span>
              </div>
              <p className="text-stone-400 text-xs mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                Proceed to Checkout
              </Button>
              <button
                onClick={onClose}
                className="w-full text-center text-stone-600 text-sm mt-3 hover:text-stone-900 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}