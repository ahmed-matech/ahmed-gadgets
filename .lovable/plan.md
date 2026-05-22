# E-Commerce Shop Plan

## Overview
Build a minimal tech gadgets store with Forest & Moss palette.

## Database Schema
- **products**: id, name, slug, description, price, image_url, category, features (JSON), created_at
- **contact_submissions**: id, name, email, subject, message, created_at

## Pages
- `/` - Shop listing with product grid
- `/products/$slug` - Product detail with Add to Cart
- `/cart` - Cart review and checkout button
- `/checkout` - Simulated checkout with success message
- `/contact` - Contact form with validation

## Design
- Forest & Moss palette (#1a3c2a, #2d5a3d, #5a8a5c, #a0c49d)
- Clean minimal aesthetic, generous whitespace
- Semantic tokens in styles.css

## Cart Logic
- localStorage-based cart
- Add/remove/update quantity
- Cart badge in header

## Tech Stack
- TanStack Start + React + Tailwind CSS v4
- Lovable Cloud for database
- Simulated checkout (Stripe declined)
- Server functions for data fetching and contact form
