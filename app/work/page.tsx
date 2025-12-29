"use client";
import React from "react";
import "../work.css";
import "../header.css";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkScroller } from "@/components/workPage/workScroller";

export default function WorkPage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <WorkScroller />
    </>
  );
}
