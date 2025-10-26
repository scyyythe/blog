import { useState, useEffect } from "react";
import { Users, BookOpen, MessageSquare } from "lucide-react";

interface StatProps {
  start: number;
  end: number;
  duration: number;
  suffix: string;
}

const AnimatedStat = ({ start, end, duration, suffix }: StatProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const stats = [
  {
    icon: <Users className="w-12 h-12 mb-4 mx-auto text-primary" />,
    value: 1000000,
    suffix: "+",
    label: "Active Users",
    duration: 2000,
  },
  {
    icon: <BookOpen className="w-12 h-12 mb-4 mx-auto text-primary" />,
    value: 500000,
    suffix: "+",
    label: "Total Posts",
    duration: 2000,
  },
  {
    icon: <MessageSquare className="w-12 h-12 mb-4 mx-auto text-primary" />,
    value: 50000,
    suffix: "+",
    label: "Active Writers",
    duration: 2000,
  },
];

export const Statistics = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 rounded-lg bg-card">
            {stat.icon}
            <h3 className="text-lg font-bold mb-2">
              <AnimatedStat
                start={0}
                end={stat.value}
                duration={stat.duration}
                suffix={stat.suffix}
              />
            </h3>
            <p className="text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
