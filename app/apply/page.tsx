import type { Metadata } from "next";
import { CompetitionLanding } from "@/components/CompetitionLanding";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Apply for the 2027 competition", "Complete, print, and mail your application with a $30 check by December 14, 2026.", "/apply");

export default function ApplyPage() { return <CompetitionLanding />; }
