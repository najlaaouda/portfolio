---
title: Mastery B2B Design System
summary: The design system behind the Mastery B2B dashboard, documented as a live Arabic-first site with tokens, components and ready-made patterns, each with copy-ready HTML, Angular and React code.
cover: /images/projects/design-system/cover.webp
brand: "#FF6555"
device: web
showcase:
  - /images/projects/design-system/button.webp
  - /images/projects/design-system/mobile-button.webp
year: 2025
role: Product Designer · Design System
platform: Documentation site · Figma
tags: [Design System, Documentation, RTL]
category: Design Systems
tools: [Figma]
featured: true
order: 7
draft: false
links:
  live: https://najlaaouda.github.io/Design-system-mastery/#/
screens:
  - title: Principles
    note: Six rules that govern every visual decision, and a live preview built from the system's own components.
    images:
      - /images/projects/design-system/intro.webp
      - /images/projects/design-system/checklist.webp
  - title: Foundations
    note: Every colour, type size, space and radius, with the exact value and the token name a developer uses.
    images:
      - /images/projects/design-system/colors.webp
      - /images/projects/design-system/typography.webp
      - /images/projects/design-system/spacing.webp
      - /images/projects/design-system/radius.webp
      - /images/projects/design-system/icons.webp
  - title: Components
    note: Each component has a live preview, copy-ready code in HTML, Angular and React, and a spec table for every state.
    images:
      - /images/projects/design-system/button.webp
      - /images/projects/design-system/badge.webp
      - /images/projects/design-system/card.webp
      - /images/projects/design-system/input.webp
      - /images/projects/design-system/table.webp
      - /images/projects/design-system/toast.webp
      - /images/projects/design-system/form-controls.webp
      - /images/projects/design-system/chart.webp
      - /images/projects/design-system/sidebar.webp
  - title: Patterns
    note: Full compositions, such as the app shell and a list page, that show how the components fit together.
    images:
      - /images/projects/design-system/app-shell.webp
      - /images/projects/design-system/list-page.webp
  - title: On mobile
    note: The documentation itself is responsive, so the team can check a value from any device.
    images:
      - /images/projects/design-system/mobile-intro.webp
      - /images/projects/design-system/mobile-button.webp
      - /images/projects/design-system/mobile-colors.webp
  - title: Figma variables
    note: The source of truth. Primitive, brand and theme collections in Figma, with brand modes and light and dark themes.
    images:
      - /images/projects/design-system/figma-primitive.webp
      - /images/projects/design-system/figma-brand.webp
      - /images/projects/design-system/figma-theme.webp
---

## Overview
The Mastery B2B dashboard grew to cover many screens, and design and development needed one shared reference. I built its design system in Figma and then documented it as a live site, in Arabic and right-to-left, so every value the developers need sits in one place.

## The challenge
Without a single source of truth, colours, sizes and spacing drift between screens and between the design file and the code. Developers were guessing values from mockups, and new screens added one-off styles that didn't belong to the system.

## What the documentation includes
- **Getting started**: an introduction, installation steps and the RTL rules
- **Foundations**: colours, typography, spacing, radius, borders and shadow, icons and avatars, and breakpoints
- **Components**: buttons, badges, cards, inputs, tabs, tables, accordions, toasts, menus, form controls, pagination, breadcrumbs, progress bars, chips, charts, sidebar, header, bottom navigation, and empty and loading states
- **Patterns**: the app shell, a list page, and a hand-off checklist

## Design decisions
**One brand colour.** #FF6555 is the only accent. When something needs to stand out, it uses a grey or a status colour, never a second accent.

**Surfaces as layers, not shadows.** The page, header, card and inner block each use a slightly different grey, so depth comes from layering. Shadow is kept almost invisible, with a single level.

**Two families of radius.** Everything interactive (buttons, tabs, search, chips) is fully rounded, and containers use 8, 12 or 16px.

**One font, two weights.** Helvetica Neue LT Arabic at 400 and 700 only, with no italics and no third weight.

**Built for hand-off.** Every component shows a live preview, code to copy in HTML, Angular and React, and a spec table with the exact value for each state, so developers can match the design without guessing.
