import { defineQuery } from "next-sanity";

export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  ...,
  "seo": {
    "title": coalesce(seo.title, title, ""),
    "description": coalesce(seo.description,  ""),
    "image": seo.image,
    "noIndex": seo.noIndex == true
  },
  content[]{
    ...,
    _type == "faqs" => {
      ...,
      faqs[]-> {
        _id,
        title,
        body,
        "text": pt::text(body)
      }
    }
  }
}`);

export const HOME_PAGE_QUERY = defineQuery(`*[_id == "siteSettings"][0]{
  homePage->{
    ...,
    content[]{
      ...,
      _type == "faqs" => {
        ...,
        faqs[]->
      }
    }      
  }
}`);

export const ARTICLES_QUERY =
  defineQuery(`*[_type == "article" && defined(slug.current)]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  },
  relatedArticles[]{
    _key, // required for drag and drop
    ...@->{_id, title, slug} // get fields from the referenced post
  }
}`);

export const ARTICLES_SLUGS_QUERY =
  defineQuery(`*[_type == "article" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const ARTICLE_QUERY =
  defineQuery(`*[_type == "article" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  },
  relatedArticles[]{
    _key,
    ...@->{_id, title, slug}
  }
}`);

export const REDIRECTS_QUERY = defineQuery(`
  *[_type == "redirect" && isEnabled == true] {
      source,
      destination,
      permanent
  }
`);

export const OG_IMAGE_QUERY = defineQuery(`
  *[_id == $id][0]{
    title,
    "image": mainImage {
      asset->,
      hotspot,
      crop
    }
  }    
`);

export const SITEMAP_QUERY = defineQuery(`
  *[_type in ["page", "article"] && defined(slug.current)] {
      "href": select(
        _type == "page" => "/" + slug.current,
        _type == "article" => "/news/" + slug.current,
        slug.current
      ),
      _updatedAt
  }
  `);

export const GP_DETAILS_QUERY = defineQuery(`*[_id == "gpDetails"][0]{
  _id,
  name,
  location,
  raceDate,
  track,
  racingSchedule[],
  seo
}`);

export const CONCERTS_QUERY = defineQuery(`*[
  _type == "concert"
  && location == "internal"
  && date > now() 
] | order(date asc) {
  _id,
  name,
  "slug": slug.current,
  image,
  location,
  stage->{
    name
  },
  venue->,
  date,
  headline->{
    name
  },
  "isUpcoming": true
}`);

export const SCHEDULE_QUERY = defineQuery(`*[_type == "gpDetails"][0]{
  racingSchedule[]
}`);

export const CONCERT_BY_SLUG_QUERY =
  defineQuery(`*[_type == "concert" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  image,
  location,
  stage->{
    name
  },
  venue->,
  date,
  headline->{
    name
  },
  "isUpcoming": true
}`);

export const TICKETS_QUERY = defineQuery(`*[_type == "ticketType"] {
  _id,
  name,
  "slug": slug.current,
  description,
  image,
  options[]->{
    _id,
    duration,
    prices[]->{
      _id,
      price
    }
  }
}`);
