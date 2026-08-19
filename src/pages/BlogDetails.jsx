import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Seo from "../components/common/Seo";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";
import BlogGrid from "../components/blog/BlogGrid";
import { getBlogBySlug, blogPosts } from "../data/blogs";
import OrbitBackdrop from "../components/common/OrbitBackdrop";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      <div className="relative overflow-hidden bg-[#071313] pb-20 pt-28">
        <OrbitBackdrop variant="night" />
        <Container className="relative z-10 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold mb-8 text-brand-700">
            <ArrowLeft size={16} /> Back to Resources
          </Link>

          <Reveal>
            <span className="text-xs font-bold uppercase tracking-wide text-brand-600">{post.category}</span>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mt-2 mb-4 font-display text-ink">{post.title}</h1>
            <div className="flex items-center gap-4 text-xs text-ink-muted mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> {new Date(post.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {post.readTime}
              </span>
            </div>

            <div className="h-56 rounded-2xl bg-surface-muted flex items-center justify-center mb-8 overflow-hidden">
              <img src={post.image} alt="" className="h-24 w-24 object-contain" onError={(e) => { e.currentTarget.style.display = "none"; }} />
            </div>

            <p className="text-base leading-relaxed text-ink-light mb-4">{post.excerpt}</p>
            <p className="text-sm text-ink-muted italic">
              This is placeholder article content pending the final published version from the SkillOrbit editorial team.
            </p>
          </Reveal>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-bold mb-6 font-display text-ink">Related Articles</h2>
              <BlogGrid posts={related} />
            </div>
          )}
        </Container>
      </div>
    </>
  );
}
