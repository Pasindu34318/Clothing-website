import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative bg-stone-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e3927d4e2eb4?w=1600"
          alt="Fashion"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
            New Collection 2024
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Timeless Elegance,
            <br />
            Modern Style
          </h2>
          <p className="text-stone-300 text-lg mb-8 max-w-lg">
            Discover our curated collection of premium clothing designed for the
            modern individual. Quality craftsmanship meets contemporary design.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8"
            >
              Shop Collection
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-900"
            >
              View Lookbook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}