# scroll-reveal-animation

A [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skill that adds smooth scroll-triggered fade-in and stagger animations to React/Next.js projects using Framer Motion.

## What it does

This skill provides four reusable animation components:

- **AnimatedSection** - Fade-in with upward slide for page sections
- **AnimatedChildren** - Staggered cascade container for child elements
- **AnimatedItem** - Individual items within a staggered group
- **AnimatedText** - Headings and paragraphs with reveal animations

All animations trigger once when the element scrolls into view, with a smooth deceleration easing curve.

## Installation

Add this skill to Claude Code:

```bash
npx skills add https://github.com/ethandiedericks/scroll-reveal-animation
```

### Requirements

- React 18+
- `framer-motion` installed in your project

## Usage

Once installed, ask Claude to add scroll animations to your components. Examples:

- "Add fade-in animations to this page"
- "Make these cards stagger in on scroll"
- "Add scroll reveal animations to the hero section"

Claude will copy the animation components into your project and wrap your UI elements with them.

### Quick example

```tsx
<AnimatedSection>
  <AnimatedChildren className="grid grid-cols-3 gap-6">
    {items.map((item) => (
      <AnimatedItem key={item.id}><Card {...item} /></AnimatedItem>
    ))}
  </AnimatedChildren>
</AnimatedSection>
```

## Files

| File | Description |
|------|-------------|
| `SKILL.md` | Skill definition with workflow and usage patterns |
| `assets/animations.tsx` | Animation components copied into user projects |
| `references/REFERENCE.md` | Detailed props tables and customization guide |

## License

MIT
