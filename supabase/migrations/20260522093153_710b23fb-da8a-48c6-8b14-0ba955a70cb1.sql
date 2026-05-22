
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text NOT NULL,
  price integer NOT NULL,
  image_url text NOT NULL,
  category text NOT NULL DEFAULT 'gadget',
  features jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read on products"
ON products FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Allow public insert on contact_submissions"
ON contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);

INSERT INTO products (name, slug, description, price, image_url, category, features)
VALUES
('Meridian Mechanical Keyboard', 'meridian-keyboard', 'Compact 75% mechanical keyboard with hot-swappable switches, PBT keycaps, and custom sound dampening for a satisfying typing experience.', 14900, '/images/keyboard.jpg', 'peripherals', '["Hot-swappable switches", "PBT keycaps", "RGB backlight", "USB-C + wireless"]'::jsonb),
('Nova Wireless Earbuds', 'nova-earbuds', 'Premium true wireless earbuds with adaptive noise cancellation, 30-hour battery life, and crystal-clear call quality.', 12900, '/images/earbuds.jpg', 'audio', '["Active noise cancellation", "30h battery", "IPX4 water resistant", "Multipoint connection"]'::jsonb),
('Arc Desk Lamp', 'arc-desk-lamp', 'Minimalist LED desk lamp with adjustable color temperature, wireless charging base, and touch-sensitive controls.', 8900, '/images/lamp.jpg', 'lighting', '["Adjustable color temp", "Wireless charging", "Touch controls", "Auto-dimming"]'::jsonb),
('Pulse Smart Watch', 'pulse-watch', 'Elegant smartwatch with health tracking, always-on display, and 7-day battery life in a refined titanium case.', 24900, '/images/watch.jpg', 'wearables', '["Heart rate monitoring", "Always-on OLED", "7-day battery", "Titanium case"]'::jsonb),
('Dock Pro USB-C Hub', 'dock-pro-hub', '7-in-1 USB-C hub with HDMI 4K@60Hz, 100W power delivery, and dual SD card reader for maximum productivity.', 7900, '/images/hub.jpg', 'accessories', '["HDMI 4K@60Hz", "100W power delivery", "Dual SD reader", "2x USB-A"]'::jsonb),
('Base Wireless Charger', 'base-charger', 'Premium aluminum wireless charging pad with MagSafe alignment, LED status ring, and 15W fast charging.', 5900, '/images/charger.jpg', 'accessories', '["15W fast charging", "Aluminum build", "LED status ring", "Foreign object detection"]'::jsonb);
