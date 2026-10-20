import type { Metadata } from "next";
import { ApplicationPage } from "@/components/ApplicationPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Printable 2027 application", "Fill out and print the 2027 Young People’s Competition application. Mail it with a $30 check by December 14, 2026.", "/application-form");

export default function ApplicationFormPage() { return <ApplicationPage />; }
