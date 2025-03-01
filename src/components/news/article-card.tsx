import Link from "next/link";
import Image from "next/image";

import { Article } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/lib/utils";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link className="group" href={`/news/${article.slug!.current}`}>
      <article>
        <div className="relative aspect-[3/2]">
          <Image
            src={urlFor(article.mainImage!).url()}
            alt={article.title! || ""}
            fill
            className="object-cover object-center rounded-xl"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-serif font-medium">{article.title}</h2>

          <div className="flex mt-2 items-center text-accent gap-2">
            <CalendarBlank size={24} weight="fill" className="" />
            <p className="text-sm font-bold">
              {formatDate(article.publishedAt!).full}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};
