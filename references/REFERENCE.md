# Animation Reference

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

## Customization

To adjust the animation feel, modify these values in the animations file:

- **Faster animations**: Reduce `duration` from `0.8` to `0.5` and `staggerChildren` from `0.12` to `0.08`.
- **More dramatic entrance**: Increase `y` from `40` to `60` or `80`.
- **Earlier trigger**: Change viewport `margin` from `"-80px"` to `"-150px"`.
- **Repeat on every scroll**: Set `viewport.once` to `false` (not recommended for most UIs).

## Independent Row Animations

Use `AnimatedSection` on each row so they animate individually on scroll:

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

## Component Props

### AnimatedSection

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Content to animate |
| `className` | `string` | `""` | CSS classes |
| `as` | `"section" \| "div"` | `"section"` | HTML element to render |

### AnimatedChildren

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Child elements (use with `AnimatedItem`) |
| `className` | `string` | `""` | CSS classes |
| `as` | `"div" \| "ul" \| "ol"` | `"div"` | HTML element to render |

### AnimatedItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Content to animate |
| `className` | `string` | `""` | CSS classes |
| `style` | `CSSProperties` | — | Inline styles |
| `as` | `"div" \| "li"` | `"div"` | HTML element to render |

### AnimatedText

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Text content |
| `className` | `string` | `""` | CSS classes |
| `style` | `CSSProperties` | — | Inline styles |
| `as` | `"p" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "span"` | `"p"` | HTML element to render |
