import Image from "next/image";

import { ARTICLE_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

type AuthorProps = {
  author: NonNullable<ARTICLE_QUERYResult>["author"];
};

export const Author = ({ author }: AuthorProps) => {
  return author?.image || author?.name ? (
    <div className="flex items-center gap-2">
      {author?.image ? (
        <Image
          src={urlFor(author.image).width(80).height(80).url()}
          width={80}
          height={80}
          alt={author.name || ""}
          className="bg-pink-50 size-10 shadow-inner rounded-full"
        />
      ) : null}
      {author?.name ? (
        <p className="text-base text-slate-700">{author.name}</p>
      ) : null}
    </div>
  ) : null;
};
