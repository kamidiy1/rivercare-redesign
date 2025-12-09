# rivercare-redesign
Navigation clarity: Reduced menu to 10 clear items with consistent labels; added a mobile collapsible nav and a visible “Donate”/“Volunteer” CTA.

Information architecture: Grouped content into logical sections (Home, About, Programs, Impact, Events, Volunteer, Donate, News, Gallery, Contact).

Readability & typography: Larger base font, tighter line length, consistent heading hierarchy (H1→H2→H3), improved spacing.

Color & contrast: Chosen accessible palette with sufficient contrast for text, buttons, and links.

Responsive layout: Mobile-first grid; cards/images scale without horizontal scroll; tap targets ≥ 44px.

Accessibility (a11y): Semantic landmarks (header, main, footer), skip-to-content link, descriptive alt text, keyboard-friendly controls.

Performance: Optimized image sizes (responsive dimensions), avoided heavy/auto-playing embeds, lean CSS/JS from Bootstrap CDN.

Content structure: Rewrote sections into scannable blocks (short paragraphs, bullets, clear headings) instead of walls of text.

Calls to action: Prominent, repeated CTAs on Home and relevant pages (Donate/Volunteer/Apply).

Forms & feedback: Simple contact form with inline confirmation message; clear labels and required fields.

Media gallery: Uniform thumbnails with captions/alt text; consistent aspect ratios to prevent layout shifts.

Link hygiene: All relative links (GitHub Pages-safe), no broken/absolute paths; consistent file/folder naming.

News/Events clarity: Standardized card/list patterns with date, place, and quick tags (Lecture, Workshop, Cleanup).

Consistency: Shared header/footer, spacing scale, button styles, and card components across pages.

Future-ready hooks: Easy swap for real donation processor (PayPal/Stripe) and contact form service (Formspree); placeholder stats ready for real data.

