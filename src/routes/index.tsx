import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { queryOptions } from "@tanstack/react-query";
import { getProducts } from "@/lib/shop.functions";
import { ProductCard } from "@/components/ProductCard";

const productsQueryOptions = queryOptions({
  queryKey: ["products"],
  queryFn: () => getProducts(),
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forest & Tech — Minimal Gadgets" },
      { name: "description", content: "Minimal tech gadgets and accessories, thoughtfully designed." },
      { property: "og:title", content: "Forest & Tech — Minimal Gadgets" },
      { property: "og:description", content: "Minimal tech gadgets and accessories, thoughtfully designed." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQueryOptions),
  component: ShopPage,
});

function ShopPage() {
  const { data: products } = useSuspenseQuery(productsQueryOptions);

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-primary px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-1/4 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Gadgets that feel right
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/70 sm:text-xl">
            Minimal tech accessories, thoughtfully designed for the modern workspace.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">All Products</h2>
          <span className="text-sm text-muted-foreground">{products?.length ?? 1} items</span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
