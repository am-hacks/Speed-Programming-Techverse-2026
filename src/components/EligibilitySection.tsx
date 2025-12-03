import TerminalCard from "./TerminalCard";
import { Users, GraduationCap, Globe } from "lucide-react";

const EligibilitySection = () => {
  const criteria = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Size",
      description: "Minimum 1, Maximum 3 participants per team",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "Must be enrolled in an undergraduate degree program",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-University",
      description: "Teams from different universities are allowed",
    },
  ];

  return (
    <section id="eligibility" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <TerminalCard title="Team Eligibility">
          <div className="grid md:grid-cols-3 gap-6">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 border border-border rounded-sm bg-muted/10 hover:border-secondary/50 hover:bg-secondary/5 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm border border-secondary/30 bg-secondary/10 text-secondary group-hover:box-glow-cyan transition-all mb-4">
                  {item.icon}
                </div>
                <h3 className="text-primary font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </TerminalCard>
      </div>
    </section>
  );
};

export default EligibilitySection;
