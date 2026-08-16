import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import Reveal from "../common/Reveal";

export default function BlogCard({ post, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link to={`/blog/${post.slug}`} className="block rounded-2xl border border-line bg-white overflow-hidden group">
        <div className="h-36 flex items-center justify-center bg-surface-muted overflow-hidden">
          <img src={post.image} alt="" className="h-16 w-16 object-contain" loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
        </div>
        <div className="p-5">
          <span className="text-[11px] font-bold uppercase text-brand-600">{post.category}</span>
          <h3 className="font-bold text-base mt-1 mb-2 leading-snug group-hover:underline text-ink">{post.title}</h3>
          <p className="text-sm text-ink-muted mb-3">{post.excerpt}</p>
          <p className="text-xs text-ink-muted flex items-center gap-1.5">
            <Clock size={12} /> {post.readTime}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
