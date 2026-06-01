import { modelSteps } from "../data/site.js";

/* Circular flow diagram — nodes arranged around a ring with arrows.
   Falls back to a readable vertical list on small screens. */
function CircularDiagram() {
  const cx = 300;
  const cy = 300;
  const r = 210;
  const n = modelSteps.length;

  // position each node evenly around the circle, starting at the top
  const nodes = modelSteps.map((step, i) => {
    const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
    return {
      ...step,
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      angle,
    };
  });

  const palette = ["#9a3412", "#4d7c0f", "#0e7490", "#14532d"];

  return (
    <svg
      viewBox="0 0 600 600"
      className="w-full max-w-xl mx-auto"
      role="img"
      aria-label="Circular farming model flow diagram"
    >
      {/* central loop arrow */}
      <circle
        cx={cx}
        cy={cy}
        r={r - 70}
        fill="none"
        stroke="#14532d"
        strokeOpacity="0.12"
        strokeWidth="2"
        strokeDasharray="6 8"
      />
      <text
        x={cx}
        y={cy - 8}
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontSize="20"
        fontWeight="700"
        fill="#14532d"
      >
        Circular
      </text>
      <text
        x={cx}
        y={cy + 18}
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontSize="20"
        fontWeight="700"
        fill="#14532d"
      >
        Economy
      </text>

      {/* connecting arrows between consecutive nodes */}
      {nodes.map((node, i) => {
        const next = nodes[(i + 1) % n];
        return (
          <line
            key={`line-${i}`}
            x1={node.x}
            y1={node.y}
            x2={next.x}
            y2={next.y}
            stroke="#4d7c0f"
            strokeOpacity="0.35"
            strokeWidth="2"
          />
        );
      })}

      {/* nodes */}
      {nodes.map((node, i) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r="34"
            fill={palette[i % palette.length]}
          />
          <text
            x={node.x}
            y={node.y + 5}
            textAnchor="middle"
            fontFamily="Archivo, sans-serif"
            fontSize="18"
            fontWeight="700"
            fill="#faf7f0"
          >
            {node.id}
          </text>
          <text
            x={node.x}
            y={node.y + (node.y < cy ? -46 : 58)}
            textAnchor="middle"
            fontFamily="Archivo, sans-serif"
            fontSize="13"
            fontWeight="600"
            fill="#1c1917"
          >
            {node.title}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function Model() {
  return (
    <>
      {/* Header */}
      <section className="bg-forest text-cream">
        <div className="container-x py-20">
          <p className="eyebrow text-leaf mb-4">Our Integrated Farming Model</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl max-w-3xl leading-tight">
            Nothing is wasted. Everything becomes value.
          </h1>
          <p className="mt-5 text-cream/80 max-w-2xl text-lg leading-relaxed">
            CLIM-AGRO runs a closed-loop system where the output of each stage becomes
            the input of the next — turning what cities throw away into food, feed, and
            fertile soil.
          </p>
        </div>
      </section>

      {/* Diagram */}
      <section className="container-x py-16">
        <CircularDiagram />
      </section>

      {/* Step-by-step cards */}
      <section className="bg-sand">
        <div className="container-x py-16">
          <h2 className="font-display text-3xl text-forest mb-10 text-center">
            How the loop works, step by step
          </h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {modelSteps.map((step, i) => (
              <div
                key={step.id}
                className="flex items-start gap-4 bg-cream rounded-2xl p-5 border border-forest/10"
              >
                <span className="grid place-items-center shrink-0 w-10 h-10 rounded-full bg-earth text-cream font-display font-bold">
                  {step.id}
                </span>
                <div>
                  <h3 className="font-display text-xl text-forest">{step.title}</h3>
                  <p className="text-ink/70 text-sm mt-0.5">{step.note}</p>
                </div>
                {i < modelSteps.length - 1 && (
                  <span className="ml-auto text-leaf text-2xl self-center">↓</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-ink/60 mt-8 max-w-xl mx-auto text-sm">
            The cycle closes: produce sold at market generates the demand that funds more
            waste collection — and the loop begins again.
          </p>
        </div>
      </section>
    </>
  );
}
