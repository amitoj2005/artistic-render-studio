import { useState, useRef, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";
import photoRealistic from "@/assets/photo_realistic_car.png";
import toonCar from "@/assets/toon_car.png";

const ImageCompareSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <section className="border-b border-border bg-muted/30 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Example of different visual render styles
        </p>

        <div
          ref={containerRef}
          className="relative mx-auto aspect-[16/9] w-full cursor-col-resize select-none overflow-hidden rounded-xl ring-1 ring-border shadow-lg"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {/* Bottom layer – toon */}
          <img
            src={toonCar}
            alt="Toon shaded car"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          {/* Top layer – photo realistic, clipped */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src={photoRealistic}
              alt="Photo-realistic car"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 z-10 flex items-center"
            style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          >
            <div className="h-full w-0.5 bg-background shadow" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background shadow-md ring-1 ring-border">
              <MoveHorizontal className="h-5 w-5 text-foreground" />
            </div>
          </div>

          {/* Labels */}
          <span className="absolute left-3 bottom-3 rounded bg-background/80 px-2 py-1 text-xs font-medium text-foreground backdrop-blur">
            Realistic
          </span>
          <span className="absolute right-3 bottom-3 rounded bg-background/80 px-2 py-1 text-xs font-medium text-foreground backdrop-blur">
            Toon
          </span>
        </div>
      </div>
    </section>
  );
};

export default ImageCompareSlider;
