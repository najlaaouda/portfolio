---
title: Grocery Delivery App
summary: An Arabic-first grocery delivery app that connects shoppers, local stores and couriers, from browsing the shelf to rating the delivery.
cover: /images/projects/grocery-delivery/cover.webp
brand: "#1F9E67"
device: mobile
showcase:
  - /images/projects/grocery-delivery/shop.webp
  - /images/projects/grocery-delivery/store-products.webp
  - /images/projects/grocery-delivery/cart.webp
  - /images/projects/grocery-delivery/tracking-map.webp
  - /images/projects/grocery-delivery/order-status.webp
  - /images/projects/grocery-delivery/store-account.webp
year: 2020
role: UX/UI Designer
platform: Mobile app (iOS)
tags: [Mobile app, UX/UI, E-commerce, RTL]
category: Apps
tools: [Figma]
featured: true
order: 0
draft: false
screens:
  - title: Shopping
    note: Categories up front, nearby stores with their delivery fee, each store's shelf filtered by aisle, search with recent terms, and a favourites list.
    images:
      - /images/projects/grocery-delivery/shop.webp
      - /images/projects/grocery-delivery/stores.webp
      - /images/projects/grocery-delivery/store-products.webp
      - /images/projects/grocery-delivery/search.webp
      - /images/projects/grocery-delivery/favorites.webp
  - title: Cart and checkout
    note: A cart with quantities by weight or piece, promo codes, cash, card or wallet payment, and a clear path when the store marks some items as unavailable.
    images:
      - /images/projects/grocery-delivery/cart.webp
      - /images/projects/grocery-delivery/promo-code.webp
      - /images/projects/grocery-delivery/payment.webp
      - /images/projects/grocery-delivery/card-details.webp
      - /images/projects/grocery-delivery/unavailable-items.webp
      - /images/projects/grocery-delivery/substitutions.webp
      - /images/projects/grocery-delivery/order-sent.webp
  - title: Orders and tracking
    note: Past and current orders, the courier's route on a live map with arrival time, a step-by-step order status, and separate ratings for the store and the courier.
    images:
      - /images/projects/grocery-delivery/my-orders.webp
      - /images/projects/grocery-delivery/tracking-map.webp
      - /images/projects/grocery-delivery/order-status.webp
      - /images/projects/grocery-delivery/rate-store.webp
      - /images/projects/grocery-delivery/rate-courier.webp
  - title: Wallet and account
    note: Top up the wallet with a preset or custom amount, saved addresses picked on a map, and notifications for every change in an order.
    images:
      - /images/projects/grocery-delivery/account.webp
      - /images/projects/grocery-delivery/top-up.webp
      - /images/projects/grocery-delivery/top-up-amount.webp
      - /images/projects/grocery-delivery/top-up-done.webp
      - /images/projects/grocery-delivery/add-address.webp
      - /images/projects/grocery-delivery/notifications.webp
  - title: Store app
    note: An open/closed switch, incoming orders to prepare item by item, reasons when an order is declined, the product catalogue with units, the store's own couriers and bank details for payouts.
    images:
      - /images/projects/grocery-delivery/store-account.webp
      - /images/projects/grocery-delivery/incoming-orders.webp
      - /images/projects/grocery-delivery/store-order-details.webp
      - /images/projects/grocery-delivery/reject-reasons.webp
      - /images/projects/grocery-delivery/products.webp
      - /images/projects/grocery-delivery/add-product-unit.webp
      - /images/projects/grocery-delivery/couriers.webp
      - /images/projects/grocery-delivery/bank-details.webp
  - title: Courier app
    note: Go online to receive orders, see the route from store to customer with distance and fee, mark each step of the delivery, and read past ratings.
    images:
      - /images/projects/grocery-delivery/courier-account.webp
      - /images/projects/grocery-delivery/searching-orders.webp
      - /images/projects/grocery-delivery/courier-route.webp
      - /images/projects/grocery-delivery/courier-order.webp
      - /images/projects/grocery-delivery/courier-ratings.webp
---

## Overview
This is a grocery delivery marketplace for Saudi Arabia. Shoppers order fruit, vegetables and household goods from stores near them, stores prepare the orders, and couriers deliver them. I designed the app as the UX/UI designer, in Arabic and right-to-left, for iOS, with one app holding three experiences: shopper, store and courier.

## What the app needed to do
- **Serve three roles from one app**: shoppers, stores and couriers each get their own sign-up, home and tab bar
- **Let shoppers buy from local stores**, by category or by store, with prices by weight or by piece
- **Handle missing stock**: stores can mark items as unavailable and shoppers choose what to do next
- **Track every order** on a map and through clear status steps, until it is delivered and rated
- **Give stores the tools to run**: orders, products, their own couriers, subscriptions and payouts
- **Keep money simple**: cash on delivery, card, or an in-app wallet that can be topped up

## Design decisions
**Choose your role first.** The very first screen asks for the language and whether you are a shopper, a store or a courier. Everything after that, from the sign-up fields to the tab bar, follows that choice, so no one sees screens that are not for them.

**Stores sign up in steps.** A store's registration asks for the owner, then the store, then the documents (commercial register and tax certificate), and finally whether the store has its own delivery. Long forms feel shorter when each step has one topic.

**Missing items are a choice, not a failure.** When a store cannot find an item, the shopper sees exactly which items are missing and can remove them, swap them or cancel the order, instead of receiving a smaller order without warning.

**One status, three views.** The same order moves through the same steps for everyone: accepted, collected, on the way, delivered. The shopper follows it, the store updates it and the courier completes it, so all three always agree.

**Weight and pieces, side by side.** Groceries are sold in kilograms, grams and pieces. Products carry their unit from the moment the store adds them, and the cart shows quantity steppers with the unit next to the number.

**Rate the store and the courier separately.** A late delivery should not hurt a good store, and a missing item should not hurt a good courier, so each one has its own short rating after the order.
