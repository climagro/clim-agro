import { useState } from "react";
import { PageHeader } from "../components/PageBits.jsx";

// Photos live in public/photos and are served from the site root at /photos/...
const sections = [
  {
    title: "Waste collection",
    photos: [
      { src: "/photos/waste-market-1.jpg", cap: "Organic waste at a local market" },
      { src: "/photos/waste-sorting.jpg", cap: "Sorting collected organic waste" },
      { src: "/photos/waste-market-bins.jpg", cap: "Source-separated collection bins at market" },
      { src: "/photos/waste-foodfiti.jpg", cap: "Vendor separating food waste at source" },
      { src: "/photos/waste-emptying.jpg", cap: "Collecting organic waste for composting" },
      { src: "/photos/waste-compost-bins.jpg", cap: "Compost collection at market" },
      { src: "/photos/waste-sorted-bins.jpg", cap: "Organic vs. inorganic separation" },
    ],
  },
  {
    title: "BSF production",
    photos: [
      { src: "/photos/bsf-hero.jpg", cap: "BSF larvae production in our rearing tent" },
      { src: "/photos/bsf-larvae-hand.jpg", cap: "Freshly harvested Black Soldier Fly larvae" },
      { src: "/photos/bsf-larvae-tray.jpg", cap: "A tray of mature larvae" },
      { src: "/photos/bsf-rearing-trays.jpg", cap: "BSF rearing trays on racks" },
      { src: "/photos/bsf-trays-racks.jpg", cap: "Bioconversion bins in the production tent" },
      { src: "/photos/bsf-drying-trays.jpg", cap: "Tending the drying trays" },
      { src: "/photos/feed-pelleting.jpg", cap: "Processing BSF larvae into pelleted feed" },
    ],
  },
  {
    title: "Poultry",
    photos: [{ src: "/photos/poultry-flock.jpg", cap: "Exotic and indigenous birds" }],
  },
  {
    title: "Rabbit farming",
    photos: [
      { src: "/photos/rabbits-staff-1.jpg", cap: "Healthy rabbits in our breeding units" },
      { src: "/photos/rabbits-staff-2.jpg", cap: "Our team caring for the rabbits" },
    ],
  },
  {
    title: "Vegetables & crop production",
    photos: [
      { src: "/photos/vegetables-beds-1.jpg", cap: "Vegetables grown with organic fertilizer" },
      { src: "/photos/vegetables-beds-2.jpg", cap: "Raised-bed crop production" },
    ],
  },
  {
    title: "Training, partnerships & community",
    photos: [
      { src: "/photos/capacity-building-team.jpg", cap: "Smart Waste Collection initiative — in partnership with government and stakeholders" },
      { src: "/photos/training-feed-demo.jpg", cap: "Demonstrating feed and compost to farmers" },
      { src: "/photos/training-field.jpg", cap: "Field training with the farming team" },
      { src: "/photos/training-community-gathering.jpg", cap: "Community engagement gathering" },
      { src: "/photos/training-youth-crops.jpg", cap: "Training youth in crop production" },
      { src: "/photos/training-land-prep.jpg", cap: "Hands-on land preparation training" },
      { src: "/photos/training-compost-1.jpg", cap: "Hands-on composting training" },
      { src: "/photos/training-compost-drums.jpg", cap: "Training on composting systems" },
      { src: "/photos/training-farm-tour.jpg", cap: "Farmers touring the vegetable plots" },
      { src: "/photos/training-group-talk.jpg", cap: "Community session" },
    ],
  },
  {
    title: "Farm views",
    photos: [{ src: "/photos/farm-aerial.jpg", cap: "Aerial view of cultivated farmland" }],
  },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="See the work for yourself"
        intro="Real photos from our operations — waste collection, BSF production, livestock, crops, partnerships, and community training across Rwanda."
      />

      <section className="container-x py-16">
        {sections.map((sec) => (
          <div key={sec.title} className="mb-14">
            <h2 className="font-display text-2xl text-forest mb-5">{sec.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {sec.photos.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActive(p)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-forest/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-leaf"
                >
                  <img
                    src={p.src}
                    alt={p.cap}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/80 to-transparent text-cream text-xs p-3 text-left opacity-0 group-hover:opacity-100 transition">
                    {p.cap}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] bg-ink/85 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <div className="max-w-3xl w-full">
            <img src={active.src} alt={active.cap} className="w-full rounded-2xl shadow-2xl" />
            <p className="text-cream text-center mt-4 text-sm">{active.cap}</p>
            <p className="text-cream/50 text-center mt-1 text-xs">Click anywhere to close</p>
          </div>
        </div>
      )}
    </>
  );
}
