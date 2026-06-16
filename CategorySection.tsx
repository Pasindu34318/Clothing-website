import { categories } from "../data/products";
import { Category } from "../types";

interface CategorySectionProps {
  onCategorySelect: (category: string | null) => void;
  selectedCategory: string | null;
}

export function CategorySection({
  onCategorySelect,
  selectedCategory,
}: CategorySectionProps) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">
            Shop by Category
          </h2>
          <p className="text-stone-500">Find your perfect style</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category: Category) => (
            <button
              key={category.id}
              onClick={() =>
                onCategorySelect(
                  selectedCategory === category.id ? null : category.id
                )
              }
              className={`group relative aspect-[3/4] rounded-xl overflow-hidden transition-all ${
                selectedCategory === category.id
                  ? "ring-4 ring-amber-600 ring-offset-2"
                  : ""
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <h3 className="text-white font-bold text-lg">{category.name}</h3>
                <p className="text-stone-300 text-sm">{category.count} items</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}