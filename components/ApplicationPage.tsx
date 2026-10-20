import Link from "next/link";
import { ApplicationForm } from "@/components/ApplicationForm";

export function ApplicationPage() {
  return (
    <div className="container application-page">
      <nav className="application-page-nav" aria-label="Application links">
        <Link className="text-link" href="/">Competition overview</Link>
        <Link className="text-link" href="/competition">Audition requirements</Link>
      </nav>
      <ApplicationForm />
    </div>
  );
}
