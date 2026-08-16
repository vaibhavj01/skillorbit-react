import BlogCard from "./BlogCard";

export default function BlogGrid({ posts, emptyLabel = "No articles match this search yet." }) {
  if (!posts.length) {
    return <p className="text-center text-ink-muted py-16">{emptyLabel}</p>;
  }
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((p, i) => (
        <BlogCard key={p.id} post={p} delay={(i % 3) * 0.08} />
      ))}
    </div>
  );
}
