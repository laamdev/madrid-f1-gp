// // import { ArticleCard } from "@/components/news/article-card";
import { ArticleCard } from "@/components/news/article-card";
import { Hero } from "@/components/shared/hero";
import { SectionHeading } from "@/components/shared/section-heading";
// // import { Title } from "@/components/shared/title";

import { sanityFetch } from "@/sanity/lib/live";
import { ARTICLES_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: articles } = await sanityFetch({
    query: ARTICLES_QUERY,
  });

  return (
    <main>
      <Hero heading="News" image="/images/news-cover.webp" />

      <div className="my-16">
        <SectionHeading heading="Latest News" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
          {articles.map((article) => (
            // @ts-expect-error fix this
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}
