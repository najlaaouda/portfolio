---
title: Rafid Wallet
summary: A mobile wallet for prepaid and virtual cards. Send money, pay bills and manage cards from one app.
cover: /images/projects/rafid/cover.webp
brand: "#B3170F"
device: mobile
showcase:
  - /images/projects/rafid/home.webp
  - /images/projects/rafid/card.webp
  - /images/projects/rafid/send.webp
  - /images/projects/rafid/pay-bill.webp
  - /images/projects/rafid/details-card.webp
  - /images/projects/rafid/map-2.webp
year: 2023
role: UX/UI Designer
platform: Mobile app (iOS · Android)
tags: [Mobile app, UX/UI, Fintech]
category: Apps
tools: [Figma]
featured: true
order: 2
draft: false
links:
  prototype: /prototypes/rafid/
screens:
  - title: Onboarding and identity
    note: A short intro, identity documents uploaded in-app, and biometric sign-in offered once the account is ready.
    images:
      - /images/projects/rafid/splash.webp
      - /images/projects/rafid/2.webp
      - /images/projects/rafid/new-card-8.webp
      - /images/projects/rafid/enable-biometric.webp
  - title: Home and cards
    note: Balances on swipeable cards, quick actions up front, and every card's details and controls one tap away.
    images:
      - /images/projects/rafid/home.webp
      - /images/projects/rafid/card.webp
      - /images/projects/rafid/details-card.webp
  - title: Send and pay
    note: Choose an amount with the fee shown before sending, and pay a bill by date or by scanning its QR code.
    images:
      - /images/projects/rafid/send.webp
      - /images/projects/rafid/pay-bill.webp
  - title: Agents near you
    note: A map of agents and service points, with distance, opening hours and contact details.
    images:
      - /images/projects/rafid/map-2.webp
---

> The client's name and logo have been changed for confidentiality. "Rafid" is a placeholder brand created for this case study.

## Overview
Rafid is a mobile wallet built around prepaid, virtual and physical cards. I designed the app as the UX/UI designer, covering onboarding, identity verification, card management, money transfers, bill payments and an agent map.

## What the app needed to do
- **Open an account from the phone**, including identity verification with a passport, national ID or driver's licence
- **Hold several cards in one place**: prepaid, virtual and physical, each with its own balance
- **Move money** to saved recipients, by account number or by QR code
- **Pay bills** by looking them up by date or scanning a QR code
- **Find agents and service points** nearby

## Design decisions
**Cards as the home screen.** The balance lives on the card itself, and cards swipe horizontally, so the most checked number is the first thing users see.

**Three actions, always in reach.** Top up, send and pay bill sit directly under the cards. Recent transactions follow, with money out in red and money in in green.

**Fees before confirming.** When sending, the transfer fee and the total amount are shown before the user continues, so there are no surprises.

**Identity checks broken into small steps.** Verification is split into short screens: personal details, address, phone, document type, then photo upload, each with one clear action.

**Card control in one place.** Card number, CVV and PIN are hidden by default with a "show" option, and the card can be deactivated at any time if it is lost or stolen.
