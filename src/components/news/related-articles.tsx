"use client";

import Link from "next/link";
import { createDataAttribute } from "next-sanity";
import { useOptimistic } from "next-sanity/hooks";

import { ARTICLE_QUERYResult } from "@/sanity/types";
import { client } from "@/sanity/lib/client";

const { projectId, dataset, stega } = client.config();
export const createDataAttributeConfig = {
  projectId,
  dataset,
  baseUrl: typeof stega.studioUrl === "string" ? stega.studioUrl : "",
};

export function RelatedArticles({
  relatedArticles,
  documentId,
  documentType,
}: {
  relatedArticles: NonNullable<ARTICLE_QUERYResult>["relatedArticles"];
  documentId: string;
  documentType: string;
}) {
  const articles = useOptimistic<
    NonNullable<ARTICLE_QUERYResult>["relatedArticles"] | undefined,
    NonNullable<ARTICLE_QUERYResult>
  >(relatedArticles, (state, action) => {
    if (action.id === documentId && action?.document?.relatedArticles) {
      // Optimistic document only has _ref values, not resolved references
      return action.document.relatedArticles.map(
        (article) => state?.find((p) => p._key === article._key) ?? article
      );
    }
    return state;
  });
  if (!articles) {
    return null;
  }
  return (
    <aside className="border-t">
      <h2>Related Articles</h2>
      <div className="not-prose text-balance">
        <ul
          className="flex flex-col sm:flex-row gap-0.5"
          data-sanity={createDataAttribute({
            ...createDataAttributeConfig,
            id: documentId,
            type: documentType,
            path: "relatedArticles",
          }).toString()}
        >
          {articles.map((article) => (
            <li
              key={article._key}
              className="p-4 bg-blue-50 sm:w-1/3 flex-shrink-0"
              data-sanity={createDataAttribute({
                ...createDataAttributeConfig,
                id: documentId,
                type: documentType,
                path: `relatedArticles[_key=="${article._key}"]`,
              }).toString()}
            >
              <Link href={`/news/${article?.slug?.current}`}>
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
