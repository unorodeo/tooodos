import { BadgePercentIcon, CheckCheckIcon, HourglassIcon, LucideIcon } from "lucide-react";

import React from "react";

const SAMPLE_DATA: StatProps[] = [
  {
    icon: CheckCheckIcon,
    label: "TASKS COMPLETED",
    value: "11",
    total: "30",
  },
  {
    icon: HourglassIcon,
    label: "TASKS PENDING",
    value: "19",
    total: "30",
  },
  {
    icon: BadgePercentIcon,
    label: "CUMMULATIVE PROGRESS",
    value: "17%",
    total: "100",
  },
];

export const Stats: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 border border-input shadow-sm rounded-md overflow-hidden">
      {SAMPLE_DATA.map((el, idx) => (
        <Stat
          key={`stat_${idx}`}
          icon={el.icon}
          label={el.label}
          total={el.total}
          value={el.value}
        />
      ))}
    </div>
  );
};

interface StatProps {
  icon: LucideIcon | React.JSX.ElementType;
  label: string;
  value: string;
  total: string;
}

const Stat: React.FC<StatProps> = ({ icon: Icon, label, total, value }) => {
  return (
    <div className="block p-4 md:p-5 relative bg-background hover:bg-muted/40 focus:outline-none focus:bg-muted before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-border before:first:bg-transparent">
      <div className="flex md:flex flex-col lg:flex-row gap-y-3 gap-x-5">
        <Icon
          className="shrink-0 size-5 text-muted-foreground"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <div className="grow">
          <p className="text-xs uppercase tracking-wide font-medium">{label}</p>
          <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-primary">
            {value}
          </h3>
          <div className="mt-1 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              from <span className="font-semibold">{total}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
