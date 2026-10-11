---
title: Sonaa Maintenance Platform
summary: An Arabic-first maintenance platform where companies manage assets, work orders and field technicians, with a web dashboard for managers and a mobile app for technicians and clients.
cover: /images/projects/sonaa/cover.webp
brand: "#0B76BE"
device: web
showcase:
  - /images/projects/sonaa/add-asset.webp
  - /images/projects/sonaa/mobile-work-orders.webp
year: 2025
role: UX/UI Designer
platform: Web app · Mobile app
tags: [Dashboard, Mobile app, UX/UI, CMMS, RTL]
category: Dashboards
tools: [Figma]
featured: true
order: 10
draft: false
screens:
  - title: Assets and work orders
    note: Register an asset with its details, owner, warranty and files, then open a work order against it, with service, fees, priority and expected duration.
    images:
      - /images/projects/sonaa/add-asset.webp
      - /images/projects/sonaa/new-work-order.webp
  - title: Setup
    note: Locations with sub-locations and custom fields, suppliers, service categories and the services the company offers, each added from a short form.
    images:
      - /images/projects/sonaa/add-location.webp
      - /images/projects/sonaa/new-supplier.webp
      - /images/projects/sonaa/new-category.webp
      - /images/projects/sonaa/new-service.webp
  - title: Work orders on the go
    note: Managers follow every work order as a list with progress, as columns by status, or on a map of where technicians are.
    images:
      - /images/projects/sonaa/mobile-work-orders.webp
      - /images/projects/sonaa/mobile-work-orders-board.webp
      - /images/projects/sonaa/mobile-work-orders-map.webp
  - title: Technicians and assignment
    note: Technicians and groups in one place, with rules that assign new work orders automatically by location, specialty and availability.
    images:
      - /images/projects/sonaa/mobile-technicians.webp
      - /images/projects/sonaa/mobile-add-group.webp
      - /images/projects/sonaa/mobile-auto-assign.webp
  - title: In the field
    note: Technicians scan an asset's QR code to open it, close the job with hours, costs and the client's signature, and keep a history of their work.
    images:
      - /images/projects/sonaa/mobile-scan-qr.webp
      - /images/projects/sonaa/mobile-close-work-order.webp
      - /images/projects/sonaa/mobile-history.webp
  - title: Client requests
    note: Clients ask for a quote or a repair on their asset in a few fields, and get a clear confirmation once it is sent.
    images:
      - /images/projects/sonaa/mobile-quote-request.webp
      - /images/projects/sonaa/mobile-quote-sent.webp
      - /images/projects/sonaa/mobile-request-sent.webp
---

## Overview
Sonaa is a maintenance management platform (CMMS) for companies that look after buildings, equipment and vehicles. I designed it as the UX/UI designer, in Arabic and right-to-left: a web dashboard for account owners and managers, and a mobile app for managers, field technicians and clients.

## What the platform needed to do
- **Keep a record of every asset**: type, code, status, owner, warranty and attachments, with sub-assets under a parent
- **Turn requests into work orders** and follow each one from assignment to closing
- **Send the right technician**, by hand or automatically
- **Work in the field**: find the asset, record the work, the parts and the cost, and get the client's sign-off
- **Let clients ask for service** and quotes without a phone call

## Information architecture
The dashboard sidebar follows the work: Home, Work orders, Maintenance requests, Assets, Inventory, Invoices, Reports, and Clients and suppliers. Company settings have their own sidebar for the company profile, technicians and groups, roles, locations, services and notifications.

In the app, the bottom bar puts the **QR scanner in the centre**, because in the field the fastest way to anything is the asset in front of you.

## Design decisions
**Quick add, always in reach.** A "Quick add" button sits in the top bar, so a new asset, request or work order is one click away from any page.

**Long forms, broken into parts.** Asset details are grouped into collapsible sections, and a new work order is split into three steps: order details, tasks, then spare parts.

**Codes generated for you.** Asset codes can be generated automatically, so teams don't have to invent a numbering scheme.

**Three views of the same work.** Managers on the move can see work orders as a list with progress rings, as status columns, or on a map, depending on the question they are asking.

**Assignment that runs itself.** Rules for automatic assignment are written in plain language: how long to wait for a technician to accept, reassign on rejection, and match by location, specialty and workload.

**Closing with proof.** A work order can't be closed without the client's signature, and the closing screen shows hours worked and the full cost before it is submitted.
