import ProjectPortfolioAlternateSections from "../components/project";
import CardWithImageBlogSection from "../components/blog";
import ComparisonCardsFeatureSection from "../components/hero";

export default function Home() {
  return (
    <main>
      <ComparisonCardsFeatureSection />
      <CardWithImageBlogSection />
      <ProjectPortfolioAlternateSections />
    </main>
  );
}
