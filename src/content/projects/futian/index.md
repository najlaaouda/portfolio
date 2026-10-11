---
title: Futian Shipping App
summary: One place for traders importing from China to Erbil to track orders, payments, shipments and currency.
cover: /images/projects/futian/cover.webp
brand: "#1D2089"
device: mobile
showcase:
  - /images/projects/futian/home.webp
  - /images/projects/futian/orders.webp
  - /images/projects/futian/orders-details.webp
  - /images/projects/futian/shipments.webp
  - /images/projects/futian/shipments-1.webp
  - /images/projects/futian/activity.webp
year: 2023
role: UX/UI Designer
platform: Mobile app (iOS · Android)
tags: [Mobile app, UX/UI, Logistics, Fintech]
category: Apps
tools: [Figma]
featured: true
order: 1
draft: false
screens:
  - title: Sign in and home
    note: Phone sign-in with a one-time code, then today's rates and both balances at a glance.
    images:
      - /images/projects/futian/splash-1.webp
      - /images/projects/futian/verification.webp
      - /images/projects/futian/home.webp
  - title: Orders and payments
    note: What was bought, what was paid and what is still owed, with instalments broken down.
    images:
      - /images/projects/futian/orders.webp
      - /images/projects/futian/orders-details.webp
  - title: Shipments
    note: Each shipment with its status and items, down to cartons and price per piece.
    images:
      - /images/projects/futian/shipments.webp
      - /images/projects/futian/shipments-1.webp
  - title: Money in and out
    note: Deposits and withdrawals in dollars and yuan, plus the rate history between them.
    images:
      - /images/projects/futian/activity.webp
      - /images/projects/futian/currency.webp
---

## Overview
Futian is a logistics company that ships goods for traders and individuals buying from China and receiving them in Erbil, Iraq. I designed the customer app end to end as the UX/UI designer: information architecture, user flows and every screen.

## The problem
Importing from China means juggling a lot of moving parts. Customers struggled to:

- **Follow their goods** through each shipping stage until they reach Erbil
- **Keep track of purchases and payments**: what has been paid, what is still owed, and when
- **Work across two currencies**, dollars and Chinese yuan, and know the rate that applied
- **See the real cost** of each order and shipment in one place


## The goal
Give customers a single app where they can manage their purchases, follow their shipments, organise their accounts and payments, and see the status and cost of their goods from China all the way to Erbil.

## Information architecture
The app is built around five tabs that match the questions customers ask most:

- **Home**: How much do I have, and what is today's rate?
- **Order list**: What did I buy, and what do I still owe?
- **Shipments**: Where are my goods?
- **Activity**: What money went in and out?
- **Currency rate**: What was the rate on a given day?

## Design decisions
**Money owed is always visible.** On the order list, the remaining amount sits in red next to the order total, so nobody has to open an order to see what is left to pay.

**Status at a glance.** Orders and shipments use colour-coded status chips (amber for partial payment, blue for open, green for closed or completed, sand for in transit), so a long list can be scanned in seconds.

**Two currencies side by side.** Dollar and yuan balances sit next to each other with their flags, and every transaction shows the exchange rate and converted amount.

**Detail without clutter.** Shipment items are collapsed to name, total and quantity, and expand to show cartons and price per piece only when needed.

**Simple sign-in.** Customers sign in with their phone number and a one-time verification code, with no password to remember.
