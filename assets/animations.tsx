"use client";

import { Easing, motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// Smooth easing - gentle deceleration curve
const EASE: Easing = [0.16, 1, 0.3, 1];

// Section animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE,
    },
  },
};

// Staggered children variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE,
    },
  },
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
}

export function AnimatedSection({
  children,
  className = "",
  as = "section",
}: AnimatedSectionProps) {
  const Component = motion[as];

  return (
    <Component
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </Component>
  );
}

interface AnimatedChildrenProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
}

export function AnimatedChildren({
  children,
  className = "",
  as = "div",
}: AnimatedChildrenProps) {
  const Component = motion[as];

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </Component>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "li";
}

export function AnimatedItem({
  children,
  className = "",
  style,
  as = "div",
}: AnimatedItemProps) {
  const Component = motion[as];

  return (
    <Component variants={childVariants} className={className} style={style}>
      {children}
    </Component>
  );
}

// For inline elements like headings and paragraphs
export function AnimatedText({
  children,
  className = "",
  style,
  as = "p",
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
}) {
  const Component = motion[as];

  return (
    <Component variants={childVariants} className={className} style={style}>
      {children}
    </Component>
  );
}
