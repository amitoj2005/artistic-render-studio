import { BookOpen, Globe, Cpu } from "lucide-react";

const papers = [
  { authors: "Gooch, A., Gooch, B., Shirley, P., & Cohen, E.", year: 1998, title: "A Non-Photorealistic Lighting Model for Automatic Technical Illustration" },
  { authors: "Lake, A., Marshall, C., Harris, M., & Blackstein, N.", year: 2000, title: "Stylized Rendering Techniques for Interactive Theory" },
  { authors: "Praun, E., Hoppe, H., Webb, M., & Finkelstein, A.", year: 2001, title: "Real-Time Hatching" },
  { authors: "Saito, T., & Takahashi, T.", year: 1990, title: "Comprehensible Rendering of 3-D Shapes" },
];

const online = [
  "CS 184 Course Notes — Global Illumination, Project 3-1/3-2 Pathtracing",
  "Scratchapixel — Shadows, Reflections, and Introduction to Shading",
  "Real-Time Rendering — Non-Photorealistic Rendering chapters",
];

const platform = [
  "Codebase: CS 184 Project 3-1 (Pathtracer) framework",
  "Platform: macOS & Linux, cmake builds",
  "Hardware: M-series MacBooks, NVIDIA laptops",
  "Libraries: CGL, imgui (GUI sliders), OpenCV (optional post-processing)",
];

const ResourcesSection = () => (
  <section className="py-16">
    <div className="mx-auto max-w-3xl px-6">
      <h2 className="text-3xl font-bold text-heading">Resources</h2>

      <div className="mt-8 space-y-8">
        {/* Papers */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-heading">
            <BookOpen className="h-5 w-5 text-primary" /> Academic Papers
          </h3>
          <ul className="mt-4 space-y-3">
            {papers.map((p) => (
              <li key={p.title} className="rounded-lg bg-card px-4 py-3 text-sm ring-1 ring-border">
                <span className="font-medium text-heading">{p.title}</span>
                <br />
                <span className="text-muted-foreground">{p.authors} ({p.year})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Online */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-heading">
            <Globe className="h-5 w-5 text-primary" /> Online Resources
          </h3>
          <ul className="mt-4 space-y-2">
            {online.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-heading">
            <Cpu className="h-5 w-5 text-primary" /> Computing Platform
          </h3>
          <ul className="mt-4 space-y-2">
            {platform.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ResourcesSection;
