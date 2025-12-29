import { FooterGroup } from "@/components/contactSection/footerGroup";
import { links } from "@/data/data";
import { cn } from "@/lib/utils";
import React from "react";
export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "footer__links relative mt-auto flex w-full flex-wrap items-start gap-2 px-paddingX pb-4 text-center mix-blend-difference md:mt-0 md:absolute md:flex-row md:items-end md:gap-4 md:pb-0",
        className,
      )}
    >
      <div className="relative mx-auto flex w-full max-w-maxWidth flex-wrap items-start gap-4 py-2 md:flex-row md:items-end md:justify-between md:gap-4 md:py-2">
        <div className="w-1/2 min-w-[180px] md:w-auto md:flex-none md:self-end md:pb-[6px]">
          <FooterGroup
            title="SOCIALS"
            className="items-start pb-0 text-left md:items-start md:text-left"
            isMagnetic={true}
            links={[
              { href: links.email, text: "Email" },
              { href: links.linkedin, text: "LinkedIn" },
              // { href: links.telegram, text: "Telegram" },
              // { href: links.github, text: "Github" },
            ]}
          />
        </div>

        <div className="w-1/2 min-w-[180px] flex justify-end md:w-auto md:flex-none md:self-end">
          <FooterGroup
            title=""
            className="items-start pb-0 text-left md:items-end md:py-0 md:text-right"
            isMagnetic={true}
            links={[{ href: "/CV/CV_AbdulrahmanMahyoub.AR2.pdf", text: "OPEN MY CV" }]}
          />
        </div>

        <div className="w-full text-center text-xs font-semibold text-[#a3a3a3] md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:text-sm">
          © AB.MAHYOUB
        </div>
      </div>
    </footer>
  );
}
