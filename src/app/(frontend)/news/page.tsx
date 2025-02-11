// // import { ArticleCard } from "@/components/news/article-card";
import { Title } from "@/components/shared/title";

import { sanityFetch } from "@/sanity/lib/live";
import { ARTICLES_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: articles } = await sanityFetch({
    query: ARTICLES_QUERY,
  });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Post Index</Title>
      <div className="flex flex-col gap-24 py-12">
        {articles.map((article) => (
          <div key={article._id}>x</div>
          // // <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </main>
  );
}
