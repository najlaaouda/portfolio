---
title: Residential Complex App
summary: A mobile app for the residents of a residential complex, where they pay electricity, water, gas and internet bills, renew their rent contracts and keep every receipt in one place.
cover: /images/projects/residents-app/cover.webp
brand: "#E21512"
device: mobile
showcase:
  - /images/projects/residents-app/home.webp
  - /images/projects/residents-app/invoice-due.webp
  - /images/projects/residents-app/invoice-details-1.webp
  - /images/projects/residents-app/history.webp
  - /images/projects/residents-app/rental-details.webp
  - /images/projects/residents-app/setting.webp
year: 2023
role: UX/UI Designer
platform: Mobile app (iOS)
tags: [Mobile app, UX/UI, Property, Payments]
category: Apps
tools: [Figma]
featured: true
order: 9
draft: false
screens:
  - title: Home
    note: A greeting with the last login time, the bills that are due in a swipeable row, and every service the complex offers, with a badge counting what is waiting to be paid.
    images:
      - /images/projects/residents-app/home.webp
      - /images/projects/residents-app/invoice-due.webp
      - /images/projects/residents-app/electricity.webp
  - title: Paying a bill
    note: The bill details first, then the payment method. A saved card can be used as is or changed, a new card can be entered right inside the form, and the pay button only turns active once a method is ready.
    images:
      - /images/projects/residents-app/invoice-details.webp
      - /images/projects/residents-app/invoice-details-1.webp
      - /images/projects/residents-app/invoice-details-2.webp
      - /images/projects/residents-app/invoice-details-3.webp
  - title: Rent contracts
    note: Every contract with its amount and whether it has been renewed, the full rental period and apartment number, past renewals, and one button to renew for the same period.
    images:
      - /images/projects/residents-app/rental.webp
      - /images/projects/residents-app/rental-details.webp
  - title: History and notifications
    note: Paid receipts by month with search and a date filter, the full bill details in a sheet, and notifications grouped by day with unread ones marked.
    images:
      - /images/projects/residents-app/history.webp
      - /images/projects/residents-app/history-popup.webp
      - /images/projects/residents-app/not.webp
  - title: Account and cards
    note: Personal details, saved cards with a clear default, adding a card in a sheet, and deleting the account with an optional reason.
    images:
      - /images/projects/residents-app/setting.webp
      - /images/projects/residents-app/setting-personal.webp
      - /images/projects/residents-app/personal-delete-account.webp
      - /images/projects/residents-app/credit-cards.webp
      - /images/projects/residents-app/credit-cards-add-new-card.webp
  - title: Security and language
    note: Password rules shown before the user types, fingerprint and Face ID switches, and a choice between English, Arabic and Kurdish.
    images:
      - /images/projects/residents-app/setting-password.webp
      - /images/projects/residents-app/setting-change-password.webp
      - /images/projects/residents-app/setting-language.webp
      - /images/projects/residents-app/setting-privacy.webp
  - title: Empty states
    note: One pattern for every empty list, with a soft illustration, a short line on what will show up here, and a way forward.
    images:
      - /images/projects/residents-app/electricity-1.webp
      - /images/projects/residents-app/credit-cards-1.webp
      - /images/projects/residents-app/history-1.webp
      - /images/projects/residents-app/not-1.webp
---

## Overview
This is the residents' app of a residential complex. Instead of paying utility bills at an office and keeping paper receipts, residents see what they owe, pay it by card, renew their rent contract and look back at any past payment from their phone. I designed the app as the UX/UI designer for iOS, in English with Arabic and Kurdish as language options, from the home screen to settings and empty states.

## What the app needed to do
- **Show what is due** across electricity, water, gas and internet, with the last day to pay each bill
- **Pay in a few taps**, with a saved card or a new one, and confirm the payment clearly
- **Handle rent**: see each contract, its period and past renewals, and renew it
- **Keep a record** of every paid bill that can be searched and filtered by date
- **Manage the account**: personal details, cards, security, language and account deletion

## Design decisions
**Due bills come first.** The home screen opens on the bills waiting to be paid, before the list of services. Each card carries the amount, the bill date and a yellow note with the deadline, so the most important question is answered without opening anything.

**Services count what is waiting.** Each service tile shows a red badge with the number of bills due, so the resident knows where to go next. Tapping a tile lists that service's bills, and "See All" lists every bill together.

**Payment in one screen.** Bill details and the payment method sit on the same page. The resident can pay with a saved card, change it, or choose "Pay Now" and enter a card inline, with a note that the card details are secure. The pay button repeats the amount and stays disabled until a method is ready.

**A clear end to every payment.** A sheet confirms the payment with the amount and the service it was for, and the receipt goes straight into History.

**Rent renewal without paperwork.** The contract screen lists the dates, the period, the apartment number and the total, shows previous renewals, and renewing for the same period is one button.

**Red means act.** One brand red is used for primary buttons, active tabs, links and badges. Secondary actions such as Cancel, Change and the date filter use a light red background, and green is kept for paid and renewed states.

**Empty is not a dead end.** Every list that can be empty has its own message and a button to refresh or add, so a new resident is never left on a blank screen.
