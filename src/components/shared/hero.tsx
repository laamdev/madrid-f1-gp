import Image from "next/image";

export const Hero = ({
  heading,
  image,
}: {
  heading: string;
  image: string;
}) => {
  return (
    <section className="rounded-xl overflow-hidden">
      <div className="relative min-h-[32rem] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={heading}
            fill
            className="object-cover object-[25%_90%] bg-card"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h1 className="text-white font-display uppercase text-5xl font-bold">
              {heading}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
