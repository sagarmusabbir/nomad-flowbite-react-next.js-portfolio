import CardWithImageBlogSection from "./components/card-with-image";
import ComparisonCardsFeatureSection from "./components/comparison";

export default function Home() {
  return (
    <main>
      <ComparisonCardsFeatureSection />
      <CardWithImageBlogSection />
    </main>
  );
}
