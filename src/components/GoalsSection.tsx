import { Check, Sparkles, SlidersHorizontal, BarChart3 } from "lucide-react";

const styles = [
  "Normal shading (HW3-style realistic baseline)",
  "Toon shading (discretized diffuse lighting)",
  "Comic style (black edge/silhouette outlines)",
  "Posterization (fixed color palette reduction)",
  "Hatching (pencil-style brightness-mapped lines)",
];

const params = [
  "Toon: number of shading bands",
  "Posterization: number of colors",
  "Hatching: line density, angle, spacing",
];

const aspirational = [
  "Watercolor style rendering",
  "Style blending with user-controlled slider",
  "Multiple input scenes for generalization",
];

const GoalsSection = () => (
  <section className="py-16">
    <div className="mx-auto max-w-3xl px-6">
      <h2 className="text-3xl font-bold text-heading">Goals &amp; Deliverables</h2>
      <p className="mt-4 text-foreground/80 leading-relaxed">
        Our primary deliverable is an NPR system that renders a 3D scene across multiple artistic styles with a side-by-side gallery for visual comparison.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Rendering Styles */}
        <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-border">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-heading">
            <Check className="h-5 w-5 text-primary" /> Rendering Styles
          </h3>
          <ul className="mt-4 space-y-2">
            {styles.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* User Controls */}
        <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-border">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-heading">
            <SlidersHorizontal className="h-5 w-5 text-primary" /> User Controls
          </h3>
          <ul className="mt-4 space-y-2">
            {params.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 flex items-center gap-2 text-lg font-semibold text-heading">
            <Sparkles className="h-5 w-5 text-accent" /> Aspirational
          </h3>
          <ul className="mt-3 space-y-2">
            {aspirational.map((a) => (
              <li key={a} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-primary/5 p-5 ring-1 ring-primary/10">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-heading">
          <BarChart3 className="h-4 w-4 text-primary" /> Measuring Success
        </h3>
        <p className="mt-2 text-sm text-foreground/80">
          Each rendered style should clearly depict its target artistic style. Results will be compared visually against reference images from published literature.
        </p>
      </div>
    </div>
  </section>
);

export default GoalsSection;
