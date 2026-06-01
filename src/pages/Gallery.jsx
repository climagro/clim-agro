import { PageHeader, ToFill } from "../components/PageBits.jsx";

const categories = [
  "Waste collection bins (markets)",
  "Poultry (exotic & indigenous)",
  "Rabbit farming",
  "Vegetables & crop production",
  "Training sessions (farmers / community)",
  "Farm views / aerial",
];

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="See the work for yourself"
        intro="People trust what they can see. This is where your photos and videos build confidence with investors and partners."
      />

      <section className="container-x py-16">
        <ToFill>
          Add your real photos for each category below. To add images: drop your photo
          files into <code>src/assets/</code>, import them at the top of this file
          (e.g. <code>import poultry1 from "../assets/poultry1.jpg"</code>) and use them as
          each tile's <code>src</code>. Aim for several authentic photos per category.
        </ToFill>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-2xl bg-sand border border-forest/10 grid place-items-center text-center p-4"
            >
              <div>
                <div className="text-2xl mb-2">📷</div>
                <p className="text-sm font-semibold text-forest leading-snug">{cat}</p>
                <p className="text-xs text-ink/50 mt-1">Add photo</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
