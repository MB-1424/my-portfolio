"use client";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
      <span className="h-px max-w-[200px] flex-1 bg-colorSecondaryLight opacity-50 sm:max-w-[280px] md:max-w-[320px]"></span>
      <h2 className="text-[9px] font-semibold uppercase leading-tight tracking-[0.1em] sm:text-xs sm:tracking-[0.2em] md:text-base md:tracking-[0.3em] lg:text-lg lg:tracking-[0.35em] xl:text-xl">
        {title}
      </h2>
      <span className="h-px max-w-[200px] flex-1 bg-colorSecondaryLight opacity-50 sm:max-w-[280px] md:max-w-[320px]"></span>
    </div>
  );
}
