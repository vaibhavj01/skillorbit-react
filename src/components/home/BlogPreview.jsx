import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import BlogGrid from "../blog/BlogGrid";
import { blogPosts } from "../../data/blogs";
import OrbitBackdrop from "../common/OrbitBackdrop";

export default function BlogPreview() {
  return (
    <section className="relative overflow-hidden bg-[#071313] py-12 md:py-28">
      <OrbitBackdrop variant="night" />
      <Container className="relative z-10">
        <SectionHeading eyebrow="Resources" title="Career & Learning Insights" subtitle="Guides and tips for IT careers." />
        <BlogGrid posts={blogPosts.slice(0, 3)} />
        <Reveal className="text-center mt-12">
          <Button to="/blog" variant="outline" size="md">
            View All Articles
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
