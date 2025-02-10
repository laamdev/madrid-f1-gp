import {
  CalendarBlank,
  MapPin,
  Microphone,
} from "@phosphor-icons/react/dist/ssr";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .id("siteSettings")
        .schemaType("siteSettings")
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.listItem()
        .id("gpDetails")
        .schemaType("gpDetails")
        .title("GP Details")
        .child(
          S.editor()
            .id("gpDetails")
            .schemaType("gpDetails")
            .documentId("gpDetails")
        ),
      S.divider(),
      S.listItem()
        .title("Upcoming Events")
        .schemaType("event")
        .icon(CalendarBlank)
        .child(
          S.documentList().title("Upcoming Events").filter("date >= now()")
        ),
      S.listItem()
        .title("Past Events")
        .schemaType("event")
        .icon(CalendarBlank)
        .child(S.documentList().title("Past Events").filter("date < now()")),
      S.documentTypeListItem("artist").title("Artists").icon(Microphone),
      S.documentTypeListItem("venue").title("Venues").icon(MapPin),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["siteSettings", "gpDetails", "artist", "venue"].includes(
            item.getId()!
          )
      ),
    ]);
