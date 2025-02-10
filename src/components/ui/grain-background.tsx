"use client";

interface GrainBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const GrainBackground = ({
  className = "",
  children,
}: GrainBackgroundProps) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 bg-background"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.3,
          mixBlendMode: "soft-light",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
      {children}
    </div>
  );
};
