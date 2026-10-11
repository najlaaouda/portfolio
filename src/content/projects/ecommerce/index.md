---
title: VOX Fashion Store
summary: A multi-page fashion and family e-commerce website, built by hand in HTML, CSS, Bootstrap and jQuery, from the home page and catalogue to the product page, cart and sign up.
cover: /images/projects/ecommerce/cover.webp
brand: "#7DAF3B"
device: web
showcase:
  - /images/projects/ecommerce/home.webp
year: 2021
role: Front-end Developer
platform: Website
tags: [Website, E-commerce, Front-end]
category: Websites
tools: [HTML, CSS, Bootstrap, jQuery]
featured: true
order: 999
draft: false
links:
  live: https://najlaaouda.github.io/ecommerce-site/
screens:
  - title: Home
    note: A mall slider with a floating category bar, a 3D carousel of the shops, new arrivals, a live deal-of-the-day countdown, best offers, ads and a "coming soon" list.
    images:
      - /images/projects/ecommerce/home.webp
  - title: Browsing the catalogue
    note: A category landing with banners, and a product list filtered by category, price range, colour, size and brand, with sorting and pages.
    images:
      - /images/projects/ecommerce/all-products.webp
      - /images/projects/ecommerce/products.webp
  - title: Product and cart
    note: A product page with a gallery, sizes, colours with their own quantity, a sticky cart total, reviews and related items, then an order review before checkout.
    images:
      - /images/projects/ecommerce/product-details.webp
      - /images/projects/ecommerce/cart.webp
  - title: Account
    note: One short form to create an account, with terms, a newsletter opt-in and sign up with Facebook.
    images:
      - /images/projects/ecommerce/sign-up.webp
      - /images/projects/ecommerce/login.webp
---

## Overview
VOX is a store website for "everything a family needs": women's, men's and kids' clothing, shoes, watches and gifts. I built the front end myself, as a static multi-page site, in 2021. It is live on GitHub Pages.

## Pages
- **Home**: slider, shop carousel, new arrivals, deal of the day, best offers, coming soon and customer reviews
- **All products** and **Products**: category banners and a filterable product grid
- **Product details**: gallery, size and colour options, reviews, related products
- **My cart**: order review with totals, last orders and saved items
- **Sign up** and **Log in**

## How it was built
**Bootstrap grid** for the layout and the header, navigation and footer shared across every page.

**jQuery plugins** for the moving parts: Owl Carousel for product rows and reviews, Flipster for the 3D shop carousel, and a countdown timer for the daily deal.

**Product cards from data.** The suggested-products rows are rendered from a small JavaScript array, so a card is written once and repeated.

**One visual language.** A single green accent for actions, prices and badges, dark bars for navigation, and "New" and discount labels on every card.
