import Seo from "../components/common/Seo";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="bg-[#071313] pb-24 pt-40 text-center">
        <Container className="max-w-md">
          <p className="font-display font-bold text-6xl text-brand-500 mb-4">404</p>
          <h1 className="font-display font-bold text-2xl text-ink mb-3">Page not found</h1>
          <p className="text-sm text-ink-muted mb-8">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Button to="/" variant="primary" size="md">Back to Home</Button>
        </Container>
      </section>
    </>
  );
}
