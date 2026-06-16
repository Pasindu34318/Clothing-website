import { useState } from "react";
import { Search, Menu, User, ShoppingBag, X } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onCategorySelect: (category: string | null) => void;
  selectedCategory: string | null;
}

export function Header({
  cartCount,
  onCartClick,
  onCategorySelect,
  selectedCategory,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { label: "New Arrivals", category: null },
    { label: "Tops", category: "tops" },
    { label: "Bottoms", category: "bottoms" },
    { label: "Outerwear", category: "outerwear" },
    { label: "Dresses", category: "dresses" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-stone-200">
      {/* Announcement Bar */}
      <div className="bg-stone-900 text-white text-center py-2 text-sm">
        Free shipping on orders over $150 | Use code WELCOME15 for 15% off
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-stone-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => onCategorySelect(null)}
          >
            <h1 className="text-2xl font-bold tracking-tight text-stone-900">
              ATELIER
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onCategorySelect(item.category)}
                className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                  selectedCategory === item.category
                    ? "text-amber-700 border-b-2 border-amber-700 pb-1"
                    : "text-stone-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden sm:flex items-center bg-stone-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none ml-2 text-sm w-32 lg:w-48"
              />
            </div>

            {/* User */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="w-5 h-5 text-stone-600" />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingBag className="w-5 h-5 text-stone-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onCategorySelect(item.category);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  selectedCategory === item.category
                    ? "bg-amber-50 text-amber-700 font-medium"
                    : "text-stone-600 hover:bg-stone-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-stone-200">
              <div className="flex items-center bg-stone-100 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none ml-2 text-sm w-full"
                />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}