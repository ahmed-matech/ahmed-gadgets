import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, ShieldCheck, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ahmed Gadgets" },
      { name: "description", content: "Learn about Ahmed Gadgets — our story, mission, and the people behind minimal tech." },
      { property: "og:title", content: "About — Ahmed Gadgets" },
      { property: "og:description", content: "Our story, mission, and the people behind Ahmed Gadgets." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, title: "Thoughtful design", desc: "Every product is refined until nothing else can be removed." },
  { icon: ShieldCheck, title: "Built to last", desc: "Premium materials and a 2-year warranty on everything we ship." },
  { icon: Leaf, title: "Sustainable", desc: "Recyclable packaging and eco-conscious sourcing." },
  { icon: Users, title: "Customer-first", desc: "Real humans, fast responses, no scripted support." },
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">About Ahmed Gadgets</h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/70">
            We design minimal tech accessories for people who care about how things look, feel, and last.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Our story</h2>
            <p className="mt-4 text-muted-foreground">
              Ahmed Gadgets started with a simple idea — tech should feel calm, not chaotic. We were tired of cluttered desks
              and gadgets that screamed for attention. So we built the opposite: quiet objects that just work.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today we ship to customers worldwide, but we still obsess over every detail — from the weight of a charger to
              the texture of a cable.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Our mission</h2>
            <p className="mt-4 text-muted-foreground">
              Make essential tech that respects your space, your time, and the planet. Less, but better.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">What we stand for</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6">
                <v.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 text-sm font-semibold text-foreground">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Questions? We're here.</h2>
        <p className="mt-2 text-muted-foreground">Reach out anytime — we usually reply within a day.</p>
        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Contact us
        </Link>
      </section>
    </main>
  );
}
