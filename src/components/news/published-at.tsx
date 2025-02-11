import dayjs from "dayjs";

import { ARTICLE_QUERYResult } from "@/sanity/types";

type PublishedAtProps = {
  publishedAt: NonNullable<ARTICLE_QUERYResult>["publishedAt"];
};

export const PublishedAt = ({ publishedAt }: PublishedAtProps) => {
  return publishedAt ? (
    <p className="text-base text-slate-700">
      {dayjs(publishedAt).format("D MMMM YYYY")}
    </p>
  ) : null;
};
