import { ReactNode } from "react";
import TypewriterText from "./TypewriterText";

interface TerminalCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const TerminalCard = ({ title, children, className = "" }: TerminalCardProps) => {
  return (
    <div className={`bg-card/80 border border-border rounded-sm backdrop-blur-sm ${className}`}>
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-terminal-red" />
          <div className="w-3 h-3 rounded-full bg-terminal-yellow" />
          <div className="w-3 h-3 rounded-full bg-terminal-green" />
        </div>
        <span className="text-xs text-muted-foreground ml-2 font-mono">
          ~/techverse/{title.toLowerCase().replace(/\s+/g, "-")}
        </span>
      </div>
      {/* Terminal content */}
      <div className="p-4 md:p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-secondary">$</span>
          <TypewriterText text={title} className="text-primary text-glow" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default TerminalCard;
