"use client";

import { motion } from "motion/react";

const flutterStack = [
  { name: "Flutter", color: "text-blue-400" },
  { name: "Riverpod", color: "text-accent-light" },
  { name: "go_router", color: "text-blue-300" },
  { name: "freezed", color: "text-blue-400" },
  { name: "Clean Architecture", color: "text-accent" },
  { name: "Material 3", color: "text-blue-300" },
];

const cliStack = [
  { name: "TypeScript", color: "text-blue-400" },
  { name: "Commander.js", color: "text-accent-light" },
  { name: "Handlebars", color: "text-orange-400" },
  { name: "Zod", color: "text-blue-300" },
];

// Duplicate for seamless loop
const allItems = [...flutterStack, ...cliStack];
const marqueeItems = [...allItems, ...allItems];

function Badge({ name, color }: { name: string; color: string }) {
  return (
    <div className="shrink-0 inline-flex items-center gap-2 px-4 py-2 border border-border bg-surface rounded-sm mx-3">
      <span className={`w-1.5 h-1.5 rounded-full bg-current ${color}`} />
      <span className="font-mono text-sm text-foreground/80 whitespace-nowrap">{name}</span>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="bg-background py-24 border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p className="text-xs uppercase tracking-widest text-muted font-medium mb-4">
          Technology
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Built With
        </h2>
        <p className="mt-4 text-muted text-lg max-w-xl">
          Carefully chosen tools for generated apps and the CLI itself.
        </p>
      </div>

      {/* Labels */}
      <div className="max-w-6xl mx-auto px-6 mb-6 flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-muted">
            Generated App Stack
          </span>
          <span className="h-px w-8 bg-border" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-muted">
            CLI Toolchain
          </span>
          <span className="h-px w-8 bg-border" />
        </div>
      </div>

      {/* Marquee row */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((item, i) => (
            <Badge key={`${item.name}-${i}`} name={item.name} color={item.color} />
          ))}
        </motion.div>
      </div>

      {/* Second row — reverse */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <motion.div
          className="flex"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 32,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...marqueeItems].reverse().map((item, i) => (
            <Badge key={`rev-${item.name}-${i}`} name={item.name} color={item.color} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
