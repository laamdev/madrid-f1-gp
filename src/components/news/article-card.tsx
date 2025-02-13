// // import Image from "next/image";
import Link from "next/link";

// // import { Author } from "@/components/news/author";
// // import { Categories } from "@/components/news/categories";
// // import { PublishedAt } from "@/components/news/published-at";

// // import { urlFor } from "@/sanity/lib/image";
import { Article } from "@/sanity/types";
interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link className="group" href={`/news/${article.slug!.current}`}>
      {/* <article className="flex flex-col-reverse gap-4 md:grid md:grid-cols-12 md:gap-0">
        <div className="md:col-span-2 md:pt-1">
          <Categories categories={categories} />
        </div>
        <div className="md:col-span-5 md:w-full">
          <h2 className="text-2xl text-pretty font-semibold text-slate-800 group-hover:text-pink-600 transition-colors relative">
            <span className="relative z-[1]">{article.title}</span>
            <span className="bg-pink-50 z-0 absolute inset-0 rounded-lg opacity-0 transition-all group-hover:opacity-100 group-hover:scale-y-110 group-hover:scale-x-105 scale-75" />
          </h2>
          <div className="flex items-center mt-2 md:mt-6 gap-x-6">
            <Author author={author} />
            <PublishedAt publishedAt={publishedAt} />
          </div>
        </div>
        <div className="md:col-start-9 md:col-span-4 rounded-lg overflow-hidden flex">
          {mainImage ? (
            <Image
              src={urlFor(mainImage).width(400).height(200).url()}
              width={400}
              height={200}
              alt={mainImage.alt || title || ""}
            />
          ) : null}
        </div>
      </article> */}
    </Link>
  );
};
