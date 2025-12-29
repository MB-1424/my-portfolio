import { FooterGroup } from "@/components/contactSection/footerGroup";
import { links } from "@/data/data";
import { cn } from "@/lib/utils";
import React from "react";
export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "footer__links absolute flex  w-full flex-wrap   px-paddingX mix-blend-difference ",
        className,
      )}
    >
      <div className="relative mx-auto flex w-full max-w-maxWidth items-end gap-4 py-1 md:py-2">
        <div className="flex-1">
          <FooterGroup
            title="SOCIALS"
            className="pb-0 md:py-0"
            isMagnetic={true}
            links={[
              { href: links.email, text: "Email" },
              { href: links.linkedin, text: "LinkedIn" },
              // { href: links.telegram, text: "Telegram" },
              // { href: links.github, text: "Github" },
            ]}
          />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-xs font-semibold text-[#a3a3a3] md:text-sm">
          © AB.MAHYOUB
        </div>
        <div className="flex-1" />
      </div>
    </footer>
  );
}
