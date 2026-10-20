import type { Metadata } from "next";
import { CompetitionLanding } from "@/components/CompetitionLanding";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata("Young People’s Competition in Huntington, West Virginia", "Apply for the 2027 Young People’s Competition. Complete the application here, then print and mail it with a $30 check by December 14, 2026.", "/"),
  title: { absolute: "YPC — Young People’s Competition | Huntington, West Virginia" },
};

export default function HomePage() { return <CompetitionLanding />; }
