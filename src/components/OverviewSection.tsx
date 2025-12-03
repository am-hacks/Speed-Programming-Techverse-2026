import TerminalCard from "./TerminalCard";
import { Clock, Monitor, Users, FileCode } from "lucide-react";

const OverviewSection = () => {
  const overviewItems = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "5 Hours",
      description: "Non-stop coding marathon",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "1 PC Per Team",
      description: "Provided with internet access",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "1-3 Members",
      description: "Per team allowed",
    },
    {
      icon: <FileCode className="w-6 h-6" />,
      title: "HackerRank",
      description: "Competition platform",
    },
  ];

  return (
    <section id="overview" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <TerminalCard title="Competition Overview">
          <div className="space-y-6">
            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {overviewItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border border-border rounded-sm bg-muted/20 hover:border-primary/50 transition-colors group"
                >
                  <div className="text-secondary group-hover:text-primary transition-colors mb-2">
                    {item.icon}
                  </div>
                  <h3 className="text-primary font-bold text-sm md:text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Detailed overview */}
            <div className="space-y-3 text-card-foreground text-sm md:text-base">
              <div className="flex items-start gap-3 ">
                <span className="text-secondary">01</span>
                <p>The programming competition consists of <span className="text-primary">one round</span>.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-secondary">02</span>
                <p>Duration: <span className="text-primary">5 hours</span> (non-stop).</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-secondary">03</span>
                <p>Organizers will provide teams with the <span className="text-primary">problem set, papers, and pens</span>.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-secondary">04</span>
                <p>Competition organizers will provide <span className="text-primary">PCs and Internet</span>.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-secondary">05</span>
                <p><span className="text-primary">One PC per team</span> will be provided.</p>
              </div>
            </div>
          </div>
        </TerminalCard>
      </div>
    </section>
  );
};

export default OverviewSection;
