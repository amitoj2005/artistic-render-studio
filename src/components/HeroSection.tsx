import { Palette, Users } from "lucide-react";

const team = ["Zane Danton", "Aryan Inamdar", "Ayush Mahale", "Amitoj Wadhwa"];

const HeroSection = () => (
  <section className="relative overflow-hidden border-b border-border">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
    <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
      <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        <Palette className="h-4 w-4" /> CS 184 Project Proposal
      </span>

      <h1 className="mt-6 text-4xl font-bold leading-tight text-heading md:text-5xl lg:text-6xl">
        Non-Photorealistic Rendering
      </h1>
      <p className="mx-auto mt-2 max-w-xl text-lg text-muted-foreground md:text-xl">
        Artistic style transfer for 3D scenes
      </p>

      <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/80">
        For our project, we extended the CS 184 pathtracer to support various rendering effects that preserve structure but produce artistically expressive shading styles. We implement multiple NPR methods — toon shading, comic style, posterization, and hatching — and evaluate them across different scenes. We also plan to build an interactive system allowing users to dynamically control shading parameters and explore style blending.
      </p>

      <div className="mt-10 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Users className="h-4 w-4" /> Team Members
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {team.map((name) => (
            <span
              key={name}
              className="rounded-lg bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-border"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
