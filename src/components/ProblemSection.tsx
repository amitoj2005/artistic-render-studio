const ProblemSection = () => (
  <section className="bg-section-alt py-16">
    <div className="mx-auto max-w-3xl px-6">
      <h2 className="text-3xl font-bold text-heading">Problem Description</h2>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
        <p>
          While traditional computer graphics often focus on photorealism, many visual applications — animation, comics, games, and digital illustration — rely on non-photorealistic rendering techniques to create a more stylized and expressive look. Effects such as toon shading, silhouettes, and sketch-like outlines can make scenes feel more artistic while emphasizing important visual features like shape, boundaries, and contrast.
        </p>
        <p>
          The goal of our project is to explore how these stylized effects can be applied to 3D scenes in a coherent and controllable way. Non-photorealistic rendering is not simply about making an image look less realistic — it requires deciding which visual information to preserve, simplify, or exaggerate so that the final image remains readable and aesthetically appealing.
        </p>
        <p>
          This makes the problem challenging: if too much detail is removed, the scene can become unclear, but if too much detail is kept, the stylized effect loses its impact. We plan to build a rendering pipeline that takes 3D geometry as input and produces stylized outputs using techniques such as toon shading, silhouette extraction, and potentially other artistic effects like hatching or watercolor-inspired filtering.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
