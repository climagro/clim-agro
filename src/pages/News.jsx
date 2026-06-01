import { Link, useParams } from "react-router-dom";
import { PageHeader } from "../components/PageBits.jsx";
import { news } from "../data/site.js";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function News() {
  const { slug } = useParams();

  // ---- Single post view ----
  if (slug) {
    const post = news.find((p) => p.slug === slug);
    if (!post) {
      return (
        <>
          <PageHeader eyebrow="News & Updates" title="Post not found" />
          <section className="container-x py-16">
            <Link to="/news" className="btn-ghost">← Back to all news</Link>
          </section>
        </>
      );
    }
    return (
      <>
        <PageHeader eyebrow="News & Updates" title={post.title} />
        <section className="container-x py-16 max-w-2xl">
          <p className="text-sm text-leaf font-semibold mb-6">{formatDate(post.date)}</p>
          <article className="prose prose-lg text-ink/80 leading-relaxed whitespace-pre-line">
            {post.body}
          </article>
          <div className="mt-10">
            <Link to="/news" className="btn-ghost">← Back to all news</Link>
          </div>
        </section>
      </>
    );
  }

  // ---- List view ----
  return (
    <>
      <PageHeader
        eyebrow="News & Updates"
        title="What's happening at CLIM-AGRO"
        intro="New projects, harvest reports, impact updates, awards, and partnerships. One update a month keeps supporters engaged."
      />
      <section className="container-x py-16">
        <div className="grid gap-6 max-w-3xl">
          {news.map((post) => (
            <Link
              key={post.slug}
              to={`/news/${post.slug}`}
              className="group bg-cream rounded-2xl p-7 border border-forest/10 shadow-sm hover:shadow-lg hover:border-leaf/40 transition"
            >
              <p className="text-xs text-leaf font-semibold uppercase tracking-wide mb-2">
                {formatDate(post.date)}
              </p>
              <h3 className="font-display text-2xl text-forest mb-2 group-hover:text-leaf transition">
                {post.title}
              </h3>
              <p className="text-ink/70 leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-leaf font-semibold text-sm group-hover:translate-x-1 transition">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <p className="text-ink/50 text-sm mt-10 max-w-3xl">
          To publish a new update: open <code>src/data/site.js</code>, copy a news block,
          fill in the date/title/text, place it at the top of the list, then push to GitHub.
        </p>
      </section>
    </>
  );
}
