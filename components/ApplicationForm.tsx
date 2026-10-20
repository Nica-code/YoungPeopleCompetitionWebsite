import { Icon } from "@/components/Icon";
import { PrintApplicationButton } from "@/components/PrintApplicationButton";
import { applicationPdf } from "@/lib/paths";

const sections = [
  { title: "Applicant", fields: [
    { label: "Applicant name", name: "applicant-name", type: "text" },
    { label: "Applicant email", name: "applicant-email", type: "email" },
    { label: "Applicant telephone", name: "applicant-phone", type: "tel" },
    { label: "Grade", name: "grade", type: "text" },
    { label: "Applicant mailing address", name: "applicant-address", type: "text", wide: true },
    { label: "School", name: "school", type: "text", wide: true },
  ] },
  { title: "Teacher", fields: [
    { label: "Teacher’s name", name: "teacher-name", type: "text" },
    { label: "Teacher’s email", name: "teacher-email", type: "email" },
    { label: "Teacher’s telephone", name: "teacher-phone", type: "tel" },
    { label: "Teacher’s mailing address", name: "teacher-address", type: "text", wide: true },
  ] },
  { title: "Repertoire", fields: [
    { label: "Name of musical selection", name: "selection", type: "text", wide: true },
    { label: "Composer", name: "composer", type: "text" },
    { label: "Duration (minutes)", name: "duration", type: "text" },
    { label: "Instrument or voice", name: "instrument", type: "text" },
    { label: "Accompanist’s name", name: "accompanist", type: "text" },
  ] },
] as const;

export function ApplicationForm() {
  return (
    <section className="entry-application" id="application" aria-labelledby="application-title">
      <header className="application-intro"><p className="eyebrow">2027 audition application</p><h2 id="application-title" tabIndex={-1}>Apply for 2027</h2><p>Complete, print, and mail with a $30 check by <strong>December 14, 2026.</strong></p></header>
      <div className="printable-form application-form" role="form" aria-label="2027 Young People’s Competition paper application">
        <div className="application-print-heading"><p>66th Annual Young People’s Concert</p><h1>2027 audition application</h1><p>Ages 12–18 · Tri-State Area · Received by December 14, 2026</p></div>
        {sections.map((section, index) => (
          <fieldset className="application-group" key={section.title}>
            <legend><span className="application-group-number">{index + 1}</span>{section.title}</legend>
            <div className="application-fields">{section.fields.map((field) => (
              <label className={`application-field${"wide" in field && field.wide ? " application-field-wide" : ""}`} key={field.name}><span>{field.label}</span><input type={field.type} name={field.name} autoComplete="off" spellCheck={false} /></label>
            ))}</div>
          </fieldset>
        ))}
        <div className="application-actions"><PrintApplicationButton /><a className="text-link" href={applicationPdf} download><Icon name="download-simple" />Download blank PDF</a></div>
        <p className="application-privacy">Your information stays in this browser. Nothing entered here is sent to or stored by this website.</p>
        <div className="application-mailing">
          <div><Icon name="envelope-simple" /><div><p>Mail your printed application and $30 check to:</p><address><strong>Judith Short</strong><br />121 Elwood Avenue<br />Huntington, WV 25705</address></div></div>
          <div><Icon name="file-text" /><div><p>Make your $30 check payable to:</p><strong>Young People’s Concert Committee.</strong></div></div>
        </div>
      </div>
    </section>
  );
}
