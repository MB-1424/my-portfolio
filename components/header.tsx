import React, { useState } from "react";
import Magentic from "./ui/magentic";
import Logo from "@/public/svg/Logo.svg";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { toggleMenu } from "@/redux/states/menuSlice";
import { cn } from "@/lib/utils";
import { links } from "@/data/data";
import "@/app/header.css";

type HeaderProps = {
  color: "Dark" | "Light";
  className?: string;
  mode?: "hamburger" | "cross";
};

export function Header({ color, className, mode = "hamburger" }: HeaderProps) {
  const possibleTailwindClasses = [
    "bg-colorDark",
    "bg-colorLight",
    "text-colorDark",
    "text-colorLight",
    "before:bg-colorDark",
    "before:bg-colorLight",
  ];

  const dispatch = useAppDispatch();
  return (
    <header className={cn("nav__container anime px-paddingX", className)}>
      <nav className="nav__bar ">
        <div className="max-w-maxWidth">
          <Magentic
            href={links.home}
            strength={50}
            className={`nav__item text-xl font-bold text-color${color} before:bg-color${color}`}
            scrambleParams={{
              text: "MAHYOUB",
              chars: "-xx",
            }}
          >
            <p className="mask logo__anim flex items-center justify-center font-semibold   ">
              <svg
                className="w-[120px]"
                viewBox="0 0 420 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  className="logo__rotate scrambleText"
                  x="50%"
                  y="82"
                  textAnchor="middle"
                  fill="currentColor"
                  fontFamily="'DM Sans','Satoshi','Helvetica','Arial',sans-serif"
                  fontWeight="800"
                  fontSize="72"
                  letterSpacing="6"
                >
                  MAHYOUB
                </text>
                <line
                  x1="40"
                  x2="380"
                  y1="94.5"
                  y2="94.5"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity="0.65"
                />
              </svg>
            </p>
          </Magentic>
          <Magentic
            strength={50}
            className={`mask nav__item h-8 w-8 cursor-pointer items-center text-color${color} before:bg-color${color}`}
            onClick={() => {
              if (mode === "cross") {
                dispatch(toggleMenu({ isMenuOpen: false }));
              } else {
                dispatch(toggleMenu({ isMenuOpen: true, color: color }));
              }
            }}
          >
            <div
              className={cn(
                "flex h-[0.9rem] w-full flex-col justify-between ",
                {
                  "scale-[.90] justify-center": mode === "cross",
                },
              )}
            >
              <div
                className={cn(`h-[0.15rem] w-full bg-color${color}`, {
                  "absolute rotate-45": mode === "cross",
                })}
              ></div>
              <div
                className={cn(`h-[0.15rem] w-full bg-color${color}`, {
                  "absolute -rotate-45": mode === "cross",
                })}
              ></div>
            </div>
          </Magentic>
        </div>
      </nav>
    </header>
  );
}
