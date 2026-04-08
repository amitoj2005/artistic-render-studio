const weeks = [
  { week: "Week 1", tasks: "Codebase setup, finalize scene format, get normal shading working" },
  { week: "Week 2", tasks: "Toon shading + comic style implementation" },
  { week: "Week 3", tasks: "Posterization + hatching (one team member each), begin multi-scene testing" },
  { week: "Week 4", tasks: "Parameter tuning, polish, aspirational goals, final renders, report + video" },
];

const ScheduleSection = () => (
  <section className="bg-section-alt py-16">
    <div className="mx-auto max-w-3xl px-6">
      <h2 className="text-3xl font-bold text-heading">Tentative Schedule</h2>
      <div className="mt-8 space-y-4">
        {weeks.map(({ week, tasks }, i) => (
          <div key={week} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </div>
              {i < weeks.length - 1 && <div className="w-px flex-1 bg-border" />}
            </div>
            <div className="pb-6">
              <h3 className="text-sm font-semibold text-heading">{week}</h3>
              <p className="mt-1 text-sm text-foreground/80">{tasks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ScheduleSection;
