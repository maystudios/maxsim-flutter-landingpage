import { Github, Package, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Left: brand + license */}
          <div className="flex flex-col gap-1.5">
            <span className="font-mono font-bold text-foreground tracking-tight">
              maxsim-flutter
            </span>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted">v0.1.0</span>
              <span className="h-3 w-px bg-border" />
              <span className="text-xs font-mono text-muted uppercase tracking-widest">
                MIT License
              </span>
            </div>
          </div>

          {/* Right: links */}
          <nav className="flex items-center gap-1" aria-label="Footer navigation">
            <a
              href="https://github.com/maystudios/maxsim-flutter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              <Github size={15} strokeWidth={1.5} />
              <span className="font-mono text-xs">GitHub</span>
            </a>

            <span className="h-3 w-px bg-border" />

            <a
              href="https://www.npmjs.com/package/maxsim-flutter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              <Package size={15} strokeWidth={1.5} />
              <span className="font-mono text-xs">npm</span>
            </a>

            <span className="h-3 w-px bg-border" />

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              <ArrowUp size={15} strokeWidth={1.5} />
              <span className="font-mono text-xs">Back to top</span>
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
