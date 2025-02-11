import { notFound } from "next/navigation";

import { Article } from "@/components/news/article";

import { sanityFetch } from "@/sanity/lib/live";
import { ARTICLE_QUERY } from "@/sanity/lib/queries";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: article } = await sanityFetch({
    query: ARTICLE_QUERY,
    params: await params,
  });

  if (!article) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Article {...article} />
    </main>
  );
}
