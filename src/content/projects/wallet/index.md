---
title: Wallet
summary: An Arabic-first wallet app for field agents to top up, withdraw and collect money from their clients, with a receipt for every transaction.
cover: /images/projects/wallet/cover.webp
brand: "#3F3669"
device: mobile
showcase:
  - /images/projects/wallet/home.webp
  - /images/projects/wallet/receipt.webp
  - /images/projects/wallet/clients.webp
  - /images/projects/wallet/client-summary.webp
  - /images/projects/wallet/transactions.webp
  - /images/projects/wallet/requests.webp
year: 2025
role: UX/UI Designer
platform: Mobile app (Android)
tags: [Mobile app, UX/UI, Fintech, RTL]
category: Apps
tools: [Figma]
featured: true
order: 4
draft: false
screens:
  - title: Home and transactions
    note: The agent's balance, four key totals and three actions up front, followed by today's transactions with their status.
    images:
      - /images/projects/wallet/home.webp
      - /images/projects/wallet/receipt.webp
      - /images/projects/wallet/requests.webp
  - title: Clients
    note: Search and filter clients by status and debt, open a client's profile, and see their financial summary and earnings over the year.
    images:
      - /images/projects/wallet/clients.webp
      - /images/projects/wallet/client-info.webp
      - /images/projects/wallet/client-summary.webp
      - /images/projects/wallet/add-client.webp
      - /images/projects/wallet/assign-device.webp
  - title: Reports
    note: Every transaction in one list, filtered by date range, type and client, ready to export or share.
    images:
      - /images/projects/wallet/transactions.webp
      - /images/projects/wallet/reports-date.webp
      - /images/projects/wallet/pick-client.webp
---

## Overview
Wallet is an app for field agents who manage money for a network of clients. An agent tops up a client's balance, withdraws from it, collects payments, and keeps track of what each client owes. I designed the app as the UX/UI designer, in Arabic and right-to-left, for Android.

## What the app needed to do
- **Show the agent where things stand**: their own balance, total client debt, approved and pending collections, and the number of clients
- **Move money in three ways**: add credit, withdraw credit and collect a payment, each for a chosen client and amount
- **Prove every transaction** with a receipt the agent can share with the client
- **Manage clients**: add them with several branch addresses, assign POS devices to a branch, and follow each client's balance and earnings
- **Report on everything** by date, transaction type and client

## Design decisions
**Numbers first.** The home screen opens on the agent's balance and four totals, so the questions agents ask most are answered before they tap anything.

**Three actions, one pattern.** Add credit, withdraw and collect sit together under the totals, and all three follow the same steps: pick a client, enter an amount, confirm.

**Status you can scan.** Every transaction and request carries a coloured status, green for completed or approved, orange for pending and red for rejected, so problems stand out in a long list.

**A receipt after every transaction.** The success screen shows the amount, the client, the date, the client's balance before and after, and the agent's name, with one button to share it.

**Warn before what can't be undone.** Assigning a POS device to a branch is permanent, so the screen says so plainly before the agent confirms.

**Filters that match how agents think.** Reports offer ready-made ranges, such as this week, this month, last month and this year, with a custom range when needed.
