import { type SchemaTypeDefinition } from "sanity";

import { pageBuilderType } from "./pageBuilderType";
//Documents
import { categoryType } from "./documents/categoryType";
import { articleType } from "./documents/articleType";
import { authorType } from "./documents/authorType";
import { pageType } from "./documents/pageType";
import { faqType } from "./documents/faqType";
import { concertType } from "./documents/concertType";
import { artistType } from "./documents/artistType";
import { venueType } from "./documents/venueType";
import { redirectType } from "./documents/redirectType";
import { stageType } from "./objects/stageType";
// Singletons
import { siteSettingsType } from "./singletons/siteSettingsType";
import { gpDetailsType } from "./singletons/gpDetailsType";
// Objects
import { blockContentType } from "./objects/blockContentType";
import { seoType } from "./objects/seoType";
import { socialType } from "./objects/socialType";
import { raceEventType } from "./objects/reaceEventType";
// Blocks
import { heroType } from "./blocks/heroType";
import { splitImageType } from "./blocks/splitImageType";
import { featuresType } from "./blocks/featuresType";
import { faqsType } from "./blocks/faqsType";
import { statType } from "./blocks/statType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    articleType,
    authorType,
    pageType,
    heroType,
    splitImageType,
    featuresType,
    faqsType,
    faqType,
    pageBuilderType,
    siteSettingsType,
    seoType,
    redirectType,
    socialType,
    gpDetailsType,
    statType,
    concertType,
    raceEventType,
    artistType,
    venueType,
    stageType,
  ],
};
