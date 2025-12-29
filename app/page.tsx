"use client";
import { Main } from "@/components/main";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";

import "./index.css";
import "./work.css";
import "./header.css";

export default function HomePage({}) {
  return (
    <>
      {/* <Cursor /> */}
      {/* <Intro /> */}
      <HeaderNavigation />
      <Main />
    </>
  );
}
