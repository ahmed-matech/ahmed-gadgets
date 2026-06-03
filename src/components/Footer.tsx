import { Link } from "@tanstack/react-router";
import { Github, Twitter, Instagram, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border/40 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-semibold tracking-tight text-foreground">
              Ahmed<span className="text-accent"> Gadgets</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Minimal tech gadgets and accessories, thoughtfully designed for everyday focus.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-foreground">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground">
                <Github className="h-4 w-4" />
              </a>
              <a href="mailto:hello@forestandtech.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Shop</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">All products</Link></li>
              <li><Link to="/cart" className="hover:text-foreground">Cart</Link></li>
              <li><Link to="/checkout" className="hover:text-foreground">Checkout</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/40 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} Ahmed Gadgets. All rights reserved.</p>
          <p>Designed with care.</p>
        </div>
      </div>
    </footer>
  );
}
