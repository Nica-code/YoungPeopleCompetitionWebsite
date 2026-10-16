import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Printable 2027 application",
  "Fill out and print the 2027 Young People’s Competition application. Mail it with a $30 check by December 14, 2026.",
  "/application-form",
);

const fields = [
  { label: "Applicant name", name: "applicant-name" },
  { label: "Applicant email", name: "applicant-email" },
  { label: "Applicant telephone", name: "applicant-phone" },
  { label: "Applicant mailing address", name: "applicant-address", wide: true },
  { label: "Grade", name: "grade" },
  { label: "School", name: "school" },
  { label: "Teacher’s name", name: "teacher-name" },
  { label: "Teacher’s email", name: "teacher-email" },
  { label: "Teacher’s telephone", name: "teacher-phone" },
  { label: "Teacher’s mailing address", name: "teacher-address", wide: true },
  { label: "Name of musical selection", name: "selection", wide: true },
  { label: "Composer", name: "composer" },
  { label: "Duration", name: "duration" },
  { label: "Instrument or voice", name: "instrument" },
  { label: "Accompanist’s name", name: "accompanist" },
] as const;

export default function ApplicationFormPage() {
  return (
    <>
      <PageIntro
        eyebrow="Printable application"
        title="The information you need, ready for paper."
        intro="Type into the fields below, then use your browser’s Print command to print or save as a PDF. Nothing entered here is sent to or stored by this website."
        current="Application form"
      >
        <Link className="text-link" href="/apply">Review mailing instructions <span aria-hidden="true">→</span></Link>
      </PageIntro>
      <section className="section section-paper section-first">
        <div className="container printable-wrap">
          <div className="printable-instructions">
            <p className="eyebrow">Before you print</p>
            <p>Check every entry, then print the page and mail it with your $30 check. Contact Judith Short if you have questions.</p>
          </div>
          <div className="printable-form" aria-label="2027 Young People’s Competition paper application">
            <div className="printable-form-heading">
              <p className="eyebrow">66th Annual Young People’s Concert</p>
              <h2>2027 audition application</h2>
              <p>Ages 12–18 · Tri-State Area · Received by December 14, 2026</p>
            </div>
            <div className="printable-fields">
              {fields.map((field) => (
                <label className={"printable-field" + ("wide" in field && field.wide ? " printable-field-wide" : "")} key={field.name}>
                  <span>{field.label}</span>
                  <input type="text" name={field.name} autoComplete="off" />
                </label>
              ))}
            </div>
            <div className="printable-form-footer">
              <div><strong>Enclose a $30 check</strong><p>Payable to Young People’s Concert Committee.</p></div>
              <div><strong>Mail to</strong><address>Judith Short<br />121 Elwood Avenue<br />Huntington, WV 25705</address></div>
            </div>
          </div>
          <p className="printable-reminder">Use Print (Ctrl+P on Windows, Command+P on Mac) to print or save this form. This website does not accept electronic applications.</p>
        </div>
      </section>
    </>
  );
}
