---
title: Altamim
summary: An Arabic-first point-of-sale app for shops that sell prepaid recharge and gift cards, from picking a card to printing it, with a rewards wallet that turns sales into balance.
cover: /images/projects/altamim/cover.webp
brand: "#F58220"
device: mobile
showcase:
  - /images/projects/altamim/home.webp
  - /images/projects/altamim/card-details-cart.webp
  - /images/projects/altamim/cart.webp
  - /images/projects/altamim/invoice.webp
  - /images/projects/altamim/rewards-wallet.webp
  - /images/projects/altamim/transactions.webp
year: 2025
role: UX/UI Designer
platform: Mobile app (Android POS)
tags: [Mobile app, UX/UI, Fintech, POS, RTL]
category: Apps
tools: [Figma]
featured: true
order: 12
draft: false
screens:
  - title: Home
    note: The shop's balance at the top of every screen, quick access to favourite companies, and every category shown as its own card artwork. A floating pill keeps the cart one tap away.
    images:
      - /images/projects/altamim/home.webp
      - /images/projects/altamim/home-cart.webp
      - /images/projects/altamim/payment-cards.webp
  - title: Selling a card
    note: Pick a value and a quantity, see the total and the balance left after the sale, then print right away or add it to the cart.
    images:
      - /images/projects/altamim/card-details.webp
      - /images/projects/altamim/card-details-cart.webp
      - /images/projects/altamim/added-to-cart.webp
      - /images/projects/altamim/card-details-in-cart.webp
  - title: Cart and invoice
    note: Cards from several companies in one cart, checked out in one step, with a printable invoice when the sale goes through.
    images:
      - /images/projects/altamim/cart.webp
      - /images/projects/altamim/invoice.webp
      - /images/projects/altamim/invoice-summary.webp
  - title: Favourites
    note: Shops pin the companies they sell most, add more with a search, and remove them just as easily.
    images:
      - /images/projects/altamim/favorites.webp
      - /images/projects/altamim/add-favorites.webp
      - /images/projects/altamim/favorites-edit.webp
  - title: Transaction history
    note: Every sale and top-up in one list, searchable by transaction number or company, filtered by date, with a reprint button on each sale.
    images:
      - /images/projects/altamim/transactions.webp
      - /images/projects/altamim/transactions-date.webp
      - /images/projects/altamim/topups.webp
      - /images/projects/altamim/transactions-rewards.webp
  - title: Reports and rewards wallet
    note: The daily closing balance sits behind a password. The rewards wallet shows what the shop has earned and converts it to balance in two taps.
    images:
      - /images/projects/altamim/reports.webp
      - /images/projects/altamim/reports-password.webp
      - /images/projects/altamim/daily-closing.webp
      - /images/projects/altamim/rewards-wallet.webp
      - /images/projects/altamim/reward-convert.webp
  - title: Settings and PIN
    note: A two-digit PIN protects sensitive actions. It is set, changed and recovered from settings, alongside notifications, help and sign out.
    images:
      - /images/projects/altamim/settings.webp
      - /images/projects/altamim/pin-add.webp
      - /images/projects/altamim/settings-pin.webp
      - /images/projects/altamim/pin-change.webp
      - /images/projects/altamim/pin-enter.webp
      - /images/projects/altamim/change-password.webp
      - /images/projects/altamim/notifications.webp
      - /images/projects/altamim/help-center.webp
---

## Overview
Altamim runs on the Android POS devices in shops that sell prepaid cards: mobile recharge, internet and gift cards. The shop keeps a balance with Altamim, sells cards from it, and prints each card for the customer on the spot. I designed the app as the UX/UI designer, in Arabic and right-to-left, and later designed an update that added a PIN and a rewards wallet.

## What the app needed to do
- **Sell fast at the counter**: find a company, pick a value and quantity, print
- **Sell several cards at once** through a cart that mixes companies
- **Keep the balance in view** so the shop always knows what it can still sell
- **Reprint anything**: every past sale can be printed again from the history
- **Close the day** with a daily balance report the owner can trust
- **Reward the shop** for its sales, and let it turn those rewards into balance

## Design decisions
**Balance on every screen.** The balance sits in the header everywhere, so shopkeepers never have to leave a sale to check it.

**Two ways to finish a sale.** Most customers want one card, so Print is right there on the card screen. Add to cart covers the bigger orders without slowing down the common one.

**Show the result before it happens.** The card screen shows the balance that will be left after the sale, so mistakes are caught before printing.

**Favourites for the busiest companies.** Each shop sells a handful of companies most of the time, so those go in quick access on the home screen.

**Lock what matters, not everything.** The daily report and the rewards wallet sit behind a password or a two-digit PIN. Selling stays one tap away.

**Rewards that turn into money.** The rewards wallet shows the total earned and offers one action, convert to balance. Each conversion then appears in the transaction history like any other movement.
