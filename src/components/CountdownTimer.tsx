import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center ">
      <div className="relative">
        <div className="bg-card border border-primary/30 rounded-sm px-2 py-2 md:px-6 md:py-4  md:min-w-[90px] box-glow">
          <span className="text-lg md:text-5xl font-bold text-primary text-glow tabular-nums">
            {String(value).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary" />
        <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-primary" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-primary" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary" />
      </div>
      <span className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center gap-2 md:gap-4 justify-center ">
      <TimeBlock value={timeLeft.days} label="Days" />
      <span className="text-3xl md:text-5xl text-primary text-glow animate-pulse-glow">
        :
      </span>
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <span className="text-3xl md:text-5xl text-primary text-glow animate-pulse-glow">
        :
      </span>
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <span className="text-3xl md:text-5xl text-primary text-glow animate-pulse-glow ">
        :
      </span>
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
