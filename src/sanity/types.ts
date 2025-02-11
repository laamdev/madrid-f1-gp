/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Artist = {
  _id: string;
  _type: "artist";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  spotify?: string;
};

export type RaceEvent = {
  _type: "raceEvent";
  name?: "practice-1" | "practice-2" | "practice-3" | "qualifying" | "race" | "sprint" | "sprint-shootout";
  competition?: "f1" | "f2" | "f3";
  startTime?: string;
  hasEndTime?: boolean;
  endTime?: string;
};

export type Concert = {
  _id: string;
  _type: "concert";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  location?: "internal" | "external";
  venue?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "venue";
  };
  stage?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "stage";
  };
  date?: string;
  doorsOpen?: number;
  lineup?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "artist";
  }>;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  details?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  tickets?: string;
  seo?: Seo;
};

export type Stage = {
  _id: string;
  _type: "stage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
};

export type Venue = {
  _id: string;
  _type: "venue";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
};

export type Stat = {
  _type: "stat";
  title?: string;
  value?: number;
  hasUnit?: boolean;
  unit?: string;
};

export type GpDetails = {
  _id: string;
  _type: "gpDetails";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  location?: {
    circuit?: string;
    country?: string;
    city?: string;
  };
  raceDate?: string;
  track?: Array<{
    _key: string;
  } & Stat>;
  racingSchedule?: Array<{
    _key: string;
  } & RaceEvent>;
  seo?: Seo;
};

export type Redirect = {
  _id: string;
  _type: "redirect";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  source?: string;
  destination?: string;
  permanent?: boolean;
  isEnabled?: boolean;
};

export type SiteSettings = {
  _id: string;
  _type: "siteSettings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  homePage?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  };
};

export type PageBuilder = Array<{
  _key: string;
} & Hero | {
  _key: string;
} & SplitImage | {
  _key: string;
} & Features | {
  _key: string;
} & Faqs>;

export type Faq = {
  _id: string;
  _type: "faq";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  isGlobal?: boolean;
};

export type Faqs = {
  _type: "faqs";
  title?: string;
  faqs?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "faq";
  }>;
};

export type Features = {
  _type: "features";
  title?: string;
  features?: Array<{
    title?: string;
    text?: string;
    _type: "feature";
    _key: string;
  }>;
};

export type SplitImage = {
  _type: "splitImage";
  orientation?: "imageLeft" | "imageRight";
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Hero = {
  _type: "hero";
  title?: string;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content?: PageBuilder;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  seo?: Seo;
  social?: Social;
};

export type Social = {
  _type: "social";
  linkedIn?: string;
  x?: string;
};

export type Seo = {
  _type: "seo";
  title?: string;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  noIndex?: boolean;
};

export type Article = {
  _id: string;
  _type: "article";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  publishedAt?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  relatedArticles?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "article";
  }>;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Artist | RaceEvent | Concert | Stage | Venue | Stat | GpDetails | Redirect | SiteSettings | PageBuilder | Faq | Faqs | Features | SplitImage | Hero | Page | Social | Seo | Article | Author | Category | Slug | BlockContent | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: PAGE_QUERY
// Query: *[_type == "page" && slug.current == $slug][0]{  ...,  "seo": {    "title": coalesce(seo.title, title, ""),    "description": coalesce(seo.description,  ""),    "image": seo.image,    "noIndex": seo.noIndex == true  },  content[]{    ...,    _type == "faqs" => {      ...,      faqs[]-> {        _id,        title,        body,        "text": pt::text(body)      }    }  }}
export type PAGE_QUERYResult = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content: Array<{
    _key: string;
    _type: "faqs";
    title?: string;
    faqs: Array<{
      _id: string;
      title: string | null;
      body: Array<{
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
        listItem?: "bullet";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      } | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
        _key: string;
      }> | null;
      text: string;
    }> | null;
  } | {
    _key: string;
    _type: "features";
    title?: string;
    features?: Array<{
      title?: string;
      text?: string;
      _type: "feature";
      _key: string;
    }>;
  } | {
    _key: string;
    _type: "hero";
    title?: string;
    text?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
      listItem?: "bullet";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    } | {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
      _key: string;
    }>;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  } | {
    _key: string;
    _type: "splitImage";
    orientation?: "imageLeft" | "imageRight";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  }> | null;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  seo: {
    title: string | "";
    description: string | "";
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    noIndex: boolean | false;
  };
  social?: Social;
} | null;
// Variable: HOME_PAGE_QUERY
// Query: *[_id == "siteSettings"][0]{  homePage->{    ...,    content[]{      ...,      _type == "faqs" => {        ...,        faqs[]->      }    }        }}
export type HOME_PAGE_QUERYResult = {
  homePage: null;
} | {
  homePage: {
    _id: string;
    _type: "page";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    slug?: Slug;
    content: Array<{
      _key: string;
      _type: "faqs";
      title?: string;
      faqs: Array<{
        _id: string;
        _type: "faq";
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
        title?: string;
        body?: Array<{
          children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
          }>;
          style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
          listItem?: "bullet";
          markDefs?: Array<{
            href?: string;
            _type: "link";
            _key: string;
          }>;
          level?: number;
          _type: "block";
          _key: string;
        } | {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          alt?: string;
          _type: "image";
          _key: string;
        }>;
        isGlobal?: boolean;
      }> | null;
    } | {
      _key: string;
      _type: "features";
      title?: string;
      features?: Array<{
        title?: string;
        text?: string;
        _type: "feature";
        _key: string;
      }>;
    } | {
      _key: string;
      _type: "hero";
      title?: string;
      text?: Array<{
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
        listItem?: "bullet";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      } | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
        _key: string;
      }>;
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
    } | {
      _key: string;
      _type: "splitImage";
      orientation?: "imageLeft" | "imageRight";
      title?: string;
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
    }> | null;
    mainImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    seo?: Seo;
    social?: Social;
  } | null;
} | null;
// Variable: ARTICLES_QUERY
// Query: *[_type == "article" && defined(slug.current)]|order(publishedAt desc)[0...12]{  _id,  title,  slug,  body,  mainImage,  publishedAt,  "categories": coalesce(    categories[]->{      _id,      slug,      title    },    []  ),  author->{    name,    image  },  relatedArticles[]{    _key, // required for drag and drop    ...@->{_id, title, slug} // get fields from the referenced post  }}
export type ARTICLES_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  mainImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  publishedAt: string | null;
  categories: Array<{
    _id: string;
    slug: Slug | null;
    title: string | null;
  }> | Array<never>;
  author: {
    name: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
  relatedArticles: Array<{
    _key: string;
    _id: string;
    title: string | null;
    slug: Slug | null;
  }> | null;
}>;
// Variable: ARTICLES_SLUGS_QUERY
// Query: *[_type == "article" && defined(slug.current)]{   "slug": slug.current}
export type ARTICLES_SLUGS_QUERYResult = Array<{
  slug: string | null;
}>;
// Variable: ARTICLE_QUERY
// Query: *[_type == "article" && slug.current == $slug][0]{  _id,  title,  body,  mainImage,  publishedAt,  "categories": coalesce(    categories[]->{      _id,      slug,      title    },    []  ),  author->{    name,    image  },  relatedArticles[]{    _key,    ...@->{_id, title, slug}  }}
export type ARTICLE_QUERYResult = {
  _id: string;
  title: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  mainImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  publishedAt: string | null;
  categories: Array<{
    _id: string;
    slug: Slug | null;
    title: string | null;
  }> | Array<never>;
  author: {
    name: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
  relatedArticles: Array<{
    _key: string;
    _id: string;
    title: string | null;
    slug: Slug | null;
  }> | null;
} | null;
// Variable: REDIRECTS_QUERY
// Query: *[_type == "redirect" && isEnabled == true] {      source,      destination,      permanent  }
export type REDIRECTS_QUERYResult = Array<{
  source: string | null;
  destination: string | null;
  permanent: boolean | null;
}>;
// Variable: OG_IMAGE_QUERY
// Query: *[_id == $id][0]{    title,    "image": mainImage {      asset->,      hotspot,      crop    }  }
export type OG_IMAGE_QUERYResult = {
  title: null;
  image: null;
} | {
  title: string | null;
  image: null;
} | {
  title: string | null;
  image: {
    asset: {
      _id: string;
      _type: "sanity.imageAsset";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      originalFilename?: string;
      label?: string;
      title?: string;
      description?: string;
      altText?: string;
      sha1hash?: string;
      extension?: string;
      mimeType?: string;
      size?: number;
      assetId?: string;
      uploadId?: string;
      path?: string;
      url?: string;
      metadata?: SanityImageMetadata;
      source?: SanityAssetSourceData;
    } | null;
    hotspot: SanityImageHotspot | null;
    crop: SanityImageCrop | null;
  } | null;
} | null;
// Variable: SITEMAP_QUERY
// Query: *[_type in ["page", "article"] && defined(slug.current)] {      "href": select(        _type == "page" => "/" + slug.current,        _type == "article" => "/news/" + slug.current,        slug.current      ),      _updatedAt  }
export type SITEMAP_QUERYResult = Array<{
  href: string | null;
  _updatedAt: string;
}>;
// Variable: GP_DETAILS_QUERY
// Query: *[_id == "gpDetails"][0]{  _id,  name,  location,  raceDate,  track,  racingSchedule[],  seo}
export type GP_DETAILS_QUERYResult = {
  _id: string;
  name: null;
  location: null;
  raceDate: null;
  track: null;
  racingSchedule: null;
  seo: null;
} | {
  _id: string;
  name: null;
  location: null;
  raceDate: null;
  track: null;
  racingSchedule: null;
  seo: Seo | null;
} | {
  _id: string;
  name: string | null;
  location: null;
  raceDate: null;
  track: null;
  racingSchedule: null;
  seo: null;
} | {
  _id: string;
  name: string | null;
  location: {
    circuit?: string;
    country?: string;
    city?: string;
  } | null;
  raceDate: string | null;
  track: Array<{
    _key: string;
  } & Stat> | null;
  racingSchedule: Array<{
    _key: string;
  } & RaceEvent> | null;
  seo: Seo | null;
} | {
  _id: string;
  name: string | null;
  location: "external" | "internal" | null;
  raceDate: null;
  track: null;
  racingSchedule: null;
  seo: Seo | null;
} | null;
// Variable: CONCERTS_QUERY
// Query: *[  _type == "concert"  && location == "internal"  && date > now() ] | order(date asc) {  _id,  name,  "slug": slug.current,  image,  location,  stage->{    name  },  venue->,  date,  headline->{    name  },   "isUpcoming": true}
export type CONCERTS_QUERYResult = Array<{
  _id: string;
  name: string | null;
  slug: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  location: "external" | "internal" | null;
  stage: {
    name: string | null;
  } | null;
  venue: {
    _id: string;
    _type: "venue";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
  } | null;
  date: string | null;
  headline: null;
  isUpcoming: true;
}>;
// Variable: SCHEDULE_QUERY
// Query: *[_type == "gpDetails"][0]{  racingSchedule[]}
export type SCHEDULE_QUERYResult = {
  racingSchedule: Array<{
    _key: string;
  } & RaceEvent> | null;
} | null;
// Variable: CONCERT_BY_SLUG_QUERY
// Query: *[_type == "concert" && slug.current == $slug][0]{  _id,  name,  "slug": slug.current,  image,  location,  stage->{    name  },  venue->,  date,  headline->{    name  },  "isUpcoming": true}
export type CONCERT_BY_SLUG_QUERYResult = {
  _id: string;
  name: string | null;
  slug: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  location: "external" | "internal" | null;
  stage: {
    name: string | null;
  } | null;
  venue: {
    _id: string;
    _type: "venue";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
  } | null;
  date: string | null;
  headline: null;
  isUpcoming: true;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"page\" && slug.current == $slug][0]{\n  ...,\n  \"seo\": {\n    \"title\": coalesce(seo.title, title, \"\"),\n    \"description\": coalesce(seo.description,  \"\"),\n    \"image\": seo.image,\n    \"noIndex\": seo.noIndex == true\n  },\n  content[]{\n    ...,\n    _type == \"faqs\" => {\n      ...,\n      faqs[]-> {\n        _id,\n        title,\n        body,\n        \"text\": pt::text(body)\n      }\n    }\n  }\n}": PAGE_QUERYResult;
    "*[_id == \"siteSettings\"][0]{\n  homePage->{\n    ...,\n    content[]{\n      ...,\n      _type == \"faqs\" => {\n        ...,\n        faqs[]->\n      }\n    }      \n  }\n}": HOME_PAGE_QUERYResult;
    "*[_type == \"article\" && defined(slug.current)]|order(publishedAt desc)[0...12]{\n  _id,\n  title,\n  slug,\n  body,\n  mainImage,\n  publishedAt,\n  \"categories\": coalesce(\n    categories[]->{\n      _id,\n      slug,\n      title\n    },\n    []\n  ),\n  author->{\n    name,\n    image\n  },\n  relatedArticles[]{\n    _key, // required for drag and drop\n    ...@->{_id, title, slug} // get fields from the referenced post\n  }\n}": ARTICLES_QUERYResult;
    "*[_type == \"article\" && defined(slug.current)]{ \n  \"slug\": slug.current\n}": ARTICLES_SLUGS_QUERYResult;
    "*[_type == \"article\" && slug.current == $slug][0]{\n  _id,\n  title,\n  body,\n  mainImage,\n  publishedAt,\n  \"categories\": coalesce(\n    categories[]->{\n      _id,\n      slug,\n      title\n    },\n    []\n  ),\n  author->{\n    name,\n    image\n  },\n  relatedArticles[]{\n    _key,\n    ...@->{_id, title, slug}\n  }\n}": ARTICLE_QUERYResult;
    "\n  *[_type == \"redirect\" && isEnabled == true] {\n      source,\n      destination,\n      permanent\n  }\n": REDIRECTS_QUERYResult;
    "\n  *[_id == $id][0]{\n    title,\n    \"image\": mainImage {\n      asset->,\n      hotspot,\n      crop\n    }\n  }    \n": OG_IMAGE_QUERYResult;
    "\n  *[_type in [\"page\", \"article\"] && defined(slug.current)] {\n      \"href\": select(\n        _type == \"page\" => \"/\" + slug.current,\n        _type == \"article\" => \"/news/\" + slug.current,\n        slug.current\n      ),\n      _updatedAt\n  }\n  ": SITEMAP_QUERYResult;
    "*[_id == \"gpDetails\"][0]{\n  _id,\n  name,\n  location,\n  raceDate,\n  track,\n  racingSchedule[],\n  seo\n}": GP_DETAILS_QUERYResult;
    "*[\n  _type == \"concert\"\n  && location == \"internal\"\n  && date > now() \n] | order(date asc) {\n  _id,\n  name,\n  \"slug\": slug.current,\n  image,\n  location,\n  stage->{\n    name\n  },\n  venue->,\n  date,\n  headline->{\n    name\n  }, \n  \"isUpcoming\": true\n}": CONCERTS_QUERYResult;
    "*[_type == \"gpDetails\"][0]{\n  racingSchedule[]\n}": SCHEDULE_QUERYResult;
    "*[_type == \"concert\" && slug.current == $slug][0]{\n  _id,\n  name,\n  \"slug\": slug.current,\n  image,\n  location,\n  stage->{\n    name\n  },\n  venue->,\n  date,\n  headline->{\n    name\n  },\n  \"isUpcoming\": true\n}": CONCERT_BY_SLUG_QUERYResult;
  }
}
