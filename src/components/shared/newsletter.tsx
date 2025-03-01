import { NewsletterForm } from "@/components/home/newsletter-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionBody } from "@/components/shared/section-text";

export const Newsletter = () => {
  return (
    <section className="bg-accent rounded-xl p-8 mt-4">
      <div>
        <SectionHeading heading="Stay in the know" isLight />
        <SectionBody isLight>
          Sign up to our newsletter to get the latest news and updates from the
          track.
        </SectionBody>
      </div>

      <div className="mt-4">
        <NewsletterForm />
      </div>
    </section>
  );
};
