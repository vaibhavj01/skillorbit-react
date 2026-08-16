import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import BlogGrid from "../blog/BlogGrid";
import { blogPosts } from "../../data/blogs";

export default function BlogPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
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
