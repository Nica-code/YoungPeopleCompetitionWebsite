import type { Metadata } from "next";
import { CompetitionLanding } from "@/components/CompetitionLanding";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata("Young People’s Competition in Huntington, West Virginia", "Discover the 2027 Young People’s Competition: a solo performance opportunity, cash prizes, and a shared stage with university and professional musicians. Applications are due December 14, 2026.", "/"),
  title: { absolute: "YPC — Young People’s Competition | Huntington, West Virginia" },
};

export default function HomePage() { return <CompetitionLanding />; }
