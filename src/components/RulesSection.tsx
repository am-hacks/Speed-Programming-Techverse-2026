import TerminalCard from "./TerminalCard";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const RulesSection = () => {
  const rules = [
    {
      type: "allowed",
      text: "All programming languages supported by HackerRank are allowed.",
    },
    {
      type: "allowed",
      text: "Use of standard libraries and functions provided by IDEs is allowed.",
    },
    {
      type: "info",
      text: "Each problem requires developing an algorithm with output in a fixed format. Output is matched character-to-character.",
    },
    {
      type: "info",
      text: "Scoring is Yes/No (correct or incorrect). Ties are broken by submission time.",
    },
    {
      type: "warning",
      text: "The decision of the Judges is final. Arguing may result in disqualification.",
    },
    {
      type: "forbidden",
      text: "Mobile phones and communication devices are STRICTLY PROHIBITED. Visible devices = immediate disqualification.",
    },
    {
      type: "forbidden",
      text: "Discussion between different teams may result in immediate disqualification.",
    },
    {
      type: "forbidden",
      text: "Unfair means like plagiarism, cheat-sheets, and LLMs are prohibited.",
    },
    {
      type: "forbidden",
      text: "No external edibles allowed inside the lab. Refreshments available after competition.",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "allowed":
        return <CheckCircle className="w-5 h-5 text-terminal-green flex-shrink-0" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-terminal-yellow flex-shrink-0" />;
      case "forbidden":
        return <XCircle className="w-5 h-5 text-terminal-red flex-shrink-0" />;
      default:
        return <span className="text-secondary flex-shrink-0">{">"}</span>;
    }
  };

  return (
    <section id="rules" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <TerminalCard title="Competition Rules">
          <div className="space-y-4">
            {rules.map((rule, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-3 rounded-sm border transition-colors ${
                  rule.type === "forbidden"
                    ? "border-terminal-red/30 bg-terminal-red/5 hover:border-terminal-red/50"
                    : rule.type === "allowed"
                    ? "border-terminal-green/30 bg-terminal-green/5 hover:border-terminal-green/50"
                    : rule.type === "warning"
                    ? "border-terminal-yellow/30 bg-terminal-yellow/5 hover:border-terminal-yellow/50"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {getIcon(rule.type)}
                <p className="text-card-foreground text-sm md:text-base">{rule.text}</p>
              </div>
            ))}
          </div>
        </TerminalCard>
      </div>
    </section>
  );
};

export default RulesSection;
