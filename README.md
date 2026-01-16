# ODIZO Landing Page Replica

A fully responsive landing page inspired by ODIZO's website. I built this to practice responsive web design and improve my skills. Originally started with Tailwind, but I have since refactored the entire project to use pure Vanilla CSS and JavaScript.

## Tech Stack

- **HTML5** - For the semantic structure
- **CSS3** - For custom styling, transitions, and responsive layouts (Tailwind removed)
- **JavaScript** - For interactive components and form logic

## What's Inside

This landing page includes all the essential sections you'd expect from a modern website:

- **Responsive Navigation** - The navbar adjusts perfectly across all screen sizes. On mobile, menu items stack neatly, while on desktop they spread out horizontally.
- **Hero Section** - Big, bold branding with a tagline and call-to-action button.
- **About Us Section** - Company info with some stats and mission statement.
- **Contact Form** - A sleek form with proper styling and focus states.
- **FAQ Section** - A clean, functional accordion to handle common questions.
- **Footer** - Contact details and social media links.

## New Features (Week 2 Updates)

I’ve reached the end of **Week 2** and completed all assigned tasks. Here is what I added:

- **Vanilla CSS ** - I removed the Tailwind CDN and rewrote all the styles in a dedicated `styles.css` file. I used a bit of AI to help optimize the CSS transitions 
- **Interactive Navbar** - Added a collapsible mobile menu. It uses a hamburger toggle that animates and slides the menu in/out on smaller screens.
- **FAQ Accordion** - Built a custom accordion section from scratch. It allows users to expand/collapse questions, keeping the UI clean and interactive.
- **Form Validation** - Added JavaScript logic to the contact form. It checks for proper data types (like valid email formats) and ensures fields aren't empty before submitting.

## Responsive Design

The page looks good on everything - phones, tablets, and desktops. I moved away from utility classes and used custom CSS Media Queries to handle the layout:

- **Mobile (< 768px)**: Compact layout, stacked menu items, vertical content sections.
- **Tablet (768px - 1024px)**: Better spacing, optimized for medium screens.
- **Desktop (> 1024px)**: Full horizontal layout with all the breathing room.

## Design Choices

Went with a dark theme (black background with grays) because it looks modern and professional. Added blue accents for buttons and highlights to make interactive elements pop. Used monospace fonts to give it that tech/developer vibe.

The contact form has a nice glassmorphism effect with the gray-800 background and subtle borders. All buttons have smooth hover transitions - nothing too flashy, just clean and professional.

## How to Use

Super simple - just download or clone the repo and open the HTML file in any browser. No build tools, no npm install, no dependencies to worry about. It just works.

```bash
# Clone the repo
git clone [https://github.com/Hiteshpy07/internship-Odizo.git](https://github.com/Hiteshpy07/internship-Odizo.git)

# Open the file
open index.html