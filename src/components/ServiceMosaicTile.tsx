import React from "react";

type ServiceMosaicTileProps = {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
};

export default function ServiceMosaicTile({
  title,
  description,
  imageSrc,
  className,
}: ServiceMosaicTileProps) {
  return (
    <div
      className={[
        "group relative h-full overflow-hidden rounded-2xl border border-[#3C3C3C] bg-[#3C3C3C]/40",
        "px-6 py-6",
        "transition-colors duration-300 hover:border-[#FF5733]/50",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 max-sm:z-0 sm:z-20">
        <img
          src={imageSrc}
          alt=""
          loading="lazy"
          decoding="async"
          className={[
            "h-full w-full object-cover",
            "max-sm:opacity-25 max-sm:blur-none max-sm:scale-100",
            "sm:opacity-0 sm:blur-md sm:scale-105 sm:contrast-100 sm:saturate-100",
            "sm:group-hover:opacity-100 sm:group-hover:blur-none sm:group-hover:scale-100 sm:group-hover:contrast-125 sm:group-hover:saturate-125",
            "transition duration-500 ease-out will-change-transform",
          ].join(" ")}
        />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end">
        <h3 className="text-xl font-semibold text-white tracking-tight md:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-sm text-white/80 truncate">{description}</p>
      </div>
    </div>
  );
}
