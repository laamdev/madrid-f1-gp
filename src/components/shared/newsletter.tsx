import { NewsletterForm } from "@/components/home/newsletter-form";

export const Newsletter = () => {
  return (
    <section className="bg-[#10069F] rounded-xl p-8 h-96 mt-4">
      <div>
        <h2 className="text-2xl font-bold uppercase font-mono text-white">
          Stay in the know
        </h2>
        <p className="text-neutral-300 mt-4">
          Sign up to our newsletter to get the latest news and updates from the
          track.
        </p>
      </div>

      <div className="mt-4">
        <NewsletterForm />
      </div>
    </section>
  );
};
