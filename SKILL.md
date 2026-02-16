---
name: scroll-reveal-animation
description: Smooth Claude-style scroll-triggered animations using Framer Motion in React/Next.js. Use when the user wants to add scroll animations, fade-in effects, whileInView animations, staggered reveals, or smooth entrance animations to sections, cards, text, or any UI elements. Also use when the user says "animate on scroll," "fade in on scroll," "smooth animations," "stagger children," or "scroll reveal."
---

# Smooth Scroll Animations

Reusable Framer Motion animation components for smooth, Claude-style scroll-triggered reveals in React/Next.js.

## Setup

Requires `framer-motion` as a dependency. The animation file must be a client component (`"use client"`).

Create or update the shared animations file using the template in `assets/animations.tsx`.

## Components

### AnimatedSection
Wrap any section or div to fade+slide up on scroll.

```tsx
<AnimatedSection className="py-20">
  <h2>This section fades in</h2>
</AnimatedSection>

<AnimatedSection as="div" className="grid grid-cols-2 gap-10">
  <div>Left column</div>
  <div>Right column</div>
</AnimatedSection>
```

### AnimatedChildren + AnimatedItem
Wrap a parent container with `AnimatedChildren`, then each child with `AnimatedItem` for staggered reveals.

```tsx
<AnimatedChildren className="grid grid-cols-3 gap-6">
  <AnimatedItem><Card /></AnimatedItem>
  <AnimatedItem><Card /></AnimatedItem>
  <AnimatedItem><Card /></AnimatedItem>
</AnimatedChildren>
```

### AnimatedText
For heading and paragraph reveals inside an `AnimatedChildren` container.

```tsx
<AnimatedChildren className="text-center">
  <AnimatedText as="h2" className="text-4xl font-bold">Title</AnimatedText>
  <AnimatedText as="p" className="text-lg">Subtitle text</AnimatedText>
</AnimatedChildren>
```

## Animation Values

| Property | Value | Purpose |
|----------|-------|---------|
| Easing | `[0.16, 1, 0.3, 1]` | Gentle deceleration curve |
| Duration | `0.8s` | Slow, smooth reveal |
| Y offset | `40px` | Noticeable upward slide |
| Stagger | `0.12s` | Cascading child delay |
| Delay | `0.1s` | Initial pause before stagger |
| Viewport margin | `-80px` | Trigger slightly before element enters view |
| Viewport once | `true` | Animate only on first appearance |

## Usage Patterns

**Independent row animations** - Use `AnimatedSection` on each row so they animate individually on scroll:

```tsx
<div>
  <AnimatedSection as="div" className="grid grid-cols-2">
    <div>Row 1 left</div>
    <div>Row 1 right</div>
  </AnimatedSection>
  <AnimatedSection as="div" className="grid grid-cols-2">
    <div>Row 2 left</div>
    <div>Row 2 right</div>
  </AnimatedSection>
</div>
```

**Staggered card grid** - Use `AnimatedChildren` + `AnimatedItem` when children should cascade:

```tsx
<AnimatedSection>
  <AnimatedChildren className="grid grid-cols-3 gap-6">
    {items.map((item) => (
      <AnimatedItem key={item.id}><Card {...item} /></AnimatedItem>
    ))}
  </AnimatedChildren>
</AnimatedSection>
```

**Section with heading + content** - Combine for heading that reveals then content staggers in:

```tsx
<AnimatedSection>
  <AnimatedChildren className="mb-12 text-center">
    <AnimatedText as="h2" className="text-4xl">Section Title</AnimatedText>
  </AnimatedChildren>
  <AnimatedChildren className="grid grid-cols-2 gap-8">
    <AnimatedItem>Content 1</AnimatedItem>
    <AnimatedItem>Content 2</AnimatedItem>
  </AnimatedChildren>
</AnimatedSection>
```
