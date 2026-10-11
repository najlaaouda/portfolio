---
title: Fine Cash
summary: An Arabic-first ledger app for money exchange offices, where accountants log daily transfers and managers follow client balances and exchange rates.
cover: /images/projects/fine-cash/cover.webp
brand: "#FFA400"
device: mobile
showcase:
  - /images/projects/fine-cash/home.webp
  - /images/projects/fine-cash/client-balances.webp
  - /images/projects/fine-cash/exchange-rates.webp
  - /images/projects/fine-cash/add-entry.webp
  - /images/projects/fine-cash/archive.webp
  - /images/projects/fine-cash/more.webp
year: 2023
role: UX/UI Designer
platform: Mobile app (iOS)
tags: [Mobile app, UX/UI, Fintech, RTL]
category: Apps
tools: [Figma]
featured: true
order: 12
draft: false
screens:
  - title: Sign in
    note: Email and password with Face ID or fingerprint, a six-digit code for password recovery, and a help line on the first screen.
    images:
      - /images/projects/fine-cash/splash.webp
      - /images/projects/fine-cash/login.webp
      - /images/projects/fine-cash/verification.webp
  - title: Daily ledger
    note: Today's transactions with the client, beneficiary and who logged each one, a short form to add a new entry, and a clear confirmation before deleting.
    images:
      - /images/projects/fine-cash/home.webp
      - /images/projects/fine-cash/home-accountant.webp
      - /images/projects/fine-cash/add-entry.webp
      - /images/projects/fine-cash/delete-entry.webp
  - title: Client balances and archive
    note: Pick a client to see their balance in each currency, with credit and debit for the day, and browse past transactions by date.
    images:
      - /images/projects/fine-cash/client-balances.webp
      - /images/projects/fine-cash/pick-client.webp
      - /images/projects/fine-cash/archive.webp
  - title: Currencies and exchange rates
    note: Buy and sell rates against the US dollar for any day, and a list of the currencies the office works with.
    images:
      - /images/projects/fine-cash/exchange-rates.webp
      - /images/projects/fine-cash/rates-date.webp
      - /images/projects/fine-cash/currencies.webp
      - /images/projects/fine-cash/add-currency.webp
  - title: Clients, countries and settings
    note: Clients grouped by country and sorted alphabetically, a quick way to add one, and settings for language and appearance.
    images:
      - /images/projects/fine-cash/countries.webp
      - /images/projects/fine-cash/client-details.webp
      - /images/projects/fine-cash/add-client.webp
      - /images/projects/fine-cash/more.webp
---

## Overview
Fine Cash replaces the paper ledger of a money exchange and transfer office. Accountants record every transfer as it happens, and the management team follows each client's balance across currencies and keeps the day's exchange rates up to date. I designed the app as the UX/UI designer, in Arabic and right-to-left, for iOS, with separate experiences for the accountant and management roles.

## What the app needed to do
- **Log a transaction in seconds**: client, currency, amount, debit or credit, beneficiary and a note
- **Show who did what**: every entry records the accountant or manager who added it
- **Track client balances** in each currency, with the day's credit and debit
- **Publish exchange rates**: buy and sell prices against the US dollar, for today or any past date
- **Manage reference data**: currencies, countries and clients

## Design decisions
**The day is the unit of work.** The home screen is the daily ledger. A week strip or a date picker sits at the top, so moving between days takes one tap and today is always the default.

**One card, the full story.** Each transaction card shows the client, the amount, the time, the transaction number, the beneficiary and who logged it, so the list can be checked without opening anything.

**Adding is the main action.** A central add button in the tab bar opens the same short form everywhere. Client, currency and beneficiary are searchable fields, not long dropdowns.

**Money direction by colour and arrow.** Credit is green with an up arrow and debit is red with a down arrow, so the direction of money is clear even at a glance.

**Deleting is deliberate.** Removing a transaction asks for confirmation and repeats the transaction number, and removing a currency shows a bar that can be dismissed to cancel.

**Clients by country.** Exchange offices think in corridors, so clients are grouped by country, with a count per country and alphabetical sections inside.
