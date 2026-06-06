import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getProducts } from "@/lib/shop.functions";
import { ProductCard } from "@/components/ProductCard";

const productsQueryOptions = queryOptions({
  queryKey: ["products"],
  queryFn: () => getProducts(),
});

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "All Products — Ahmed Gadgets" },
      { name: "description", content: "Browse the full Ahmed Gadgets collection — minimal tech accessories thoughtfully designed." },
      { property: "og:title", content: "All Products — Ahmed Gadgets" },
      { property: "og:description", content: "Browse the full Ahmed Gadgets collection." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQueryOptions),
  component: ProductsPage,
});

function ProductsPage() {
  const { data: products } = useSuspenseQuery(productsQueryOptions);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="border-b border-border pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">All Products</h1>
          <p className="mt-2 text-muted-foreground">
            {products?.length ?? 0} {(products?.length ?? 0) === 1 ? "item" : "items"} in the collection
          </p>
        </div>

        {products && products.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-muted-foreground">No products available yet.</p>
        )}
      </div>
    </main>
  );
}
