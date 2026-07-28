export type ConfirmationStatus =
  | "verified-current"
  | "verified-historical"
  | "provisional"
  | "pending";

export type ImportantFact = {
  label: string;
  value: string | null;
  placeholder: string;
  status: ConfirmationStatus;
};

export type Winner = {
  year: number;
  name: string;
  instrument: string;
  schoolOrHometown?: string;
  award: string;
  orchestra?: string;
  sourceTitle: string;
  sourceUrl: string;
};

export type Faq = {
  question: string;
  answer: string;
  status: ConfirmationStatus;
};

export const siteConfig = {
  shortName: "YPC",
  name: "Young People’s Competition",
  location: "Huntington, West Virginia",
  description:
    "A regional music competition connected to Huntington’s long-running Young People’s Concert tradition.",
  siteUrl: "https://nica-code.github.io/YoungPeopleCompetitionWebsite/",
  repositoryName: "YoungPeopleCompetitionWebsite",
  researchUpdated: "July 28, 2026",
  publicContactEmail: null as string | null,
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/competition", label: "Competition" },
  { href: "/winners", label: "Winners" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const currentEdition = {
  title: "Next competition",
  year: null as number | null,
  status: "planning" as const,
  notice:
    "Applications are not yet open. The organizer is confirming the next edition’s rules, dates, fee, venue, and performance partnership.",
  facts: [
    {
      label: "Application deadline",
      value: null,
      placeholder: "[APPLICATION DEADLINE]",
      status: "pending",
    },
    {
      label: "Competition date",
      value: null,
      placeholder: "[COMPETITION DATE]",
      status: "pending",
    },
    {
      label: "Eligibility",
      value: null,
      placeholder: "[ELIGIBLE GRADES OR AGES]",
      status: "pending",
    },
    {
      label: "Location",
      value: null,
      placeholder: "[VENUE]",
      status: "pending",
    },
    {
      label: "Entry fee",
      value: null,
      placeholder: "[ENTRY FEE]",
      status: "pending",
    },
  ] satisfies ImportantFact[],
};

export const partners = [
  {
    name: "The Woman’s Club of Huntington",
    role: "Documented civic sponsor and steward of the Young People’s Concert tradition.",
    status: "verified-historical" as ConfirmationStatus,
    href: "https://www.gfwcwestvirginia.org/join",
  },
  {
    name: "Marshall University School of Music",
    role: "Documented home of Young People’s Concert performances, including a March 2025 orchestra event.",
    status: "verified-current" as ConfirmationStatus,
    href: "https://www.marshall.edu/music/",
  },
  {
    name: "Huntington Symphony Orchestra",
    role: "Named as a proposed partner in the project brief; its current YPC role is awaiting confirmation.",
    status: "provisional" as ConfirmationStatus,
    href: "https://www.huntingtonsymphony.org/",
  },
] as const;

export const participantBenefits = [
  {
    number: "01",
    title: "Prepare with purpose",
    text: "Shape a polished performance around clear repertoire and audition expectations once the edition rules are approved.",
  },
  {
    number: "02",
    title: "Be heard seriously",
    text: "Perform in a focused competition setting designed to recognize musical preparation and potential.",
  },
  {
    number: "03",
    title: "Join a regional legacy",
    text: "Take part in a Huntington tradition that has connected schools, civic leadership, and live orchestral music for more than six decades.",
  },
  {
    number: "04",
    title: "Move toward the orchestra",
    text: "Historical winners have appeared as featured soloists with Marshall University ensembles; the next winner opportunity is being confirmed.",
  },
] as const;

export const historyMilestones = [
  {
    year: "1898",
    title: "A civic foundation",
    text: "The Woman’s Club of Huntington was established and developed a long record of cultural and community work.",
    sourceUrl: "https://theclio.com/entry/27262",
  },
  {
    year: "1961–93",
    title: "An archive takes shape",
    text: "Marshall Special Collections holds Woman’s Club programs, clippings, photographs, and scrapbooks concerning the Young People’s Concert series from this period.",
    sourceUrl: "https://mds.marshall.edu/sc_finding_aids/169/",
  },
  {
    year: "2008",
    title: "The 47th season",
    text: "A Marshall program featured competition winner Sesil Dikener and thanked the Woman’s Club for its contribution to the concert.",
    sourceUrl: "https://mds.marshall.edu/music_perf/818/",
  },
  {
    year: "2023",
    title: "The 62nd concert",
    text: "Winner Isaiah Biele performed with the Marshall University Symphony Orchestra for Cabell County fifth graders.",
    sourceUrl:
      "https://www.marshall.edu/board/files/April-26-2023-Board-of-Governors-Regular-Meeting_agenda.pdf",
  },
  {
    year: "2025",
    title: "The tradition continues",
    text: "Marshall University listed MU Orchestra Young People’s Concerts at Smith Music Hall.",
    sourceUrl: "https://events.marshall.edu/calendar/day/2025/3/4",
  },
] as const;

export const winners: Winner[] = [
  {
    year: 2023,
    name: "Isaiah Biele",
    instrument: "Violin",
    award: "Young People’s Competition winner",
    orchestra: "Marshall University Symphony Orchestra",
    sourceTitle: "Marshall University Board of Governors agenda",
    sourceUrl:
      "https://www.marshall.edu/board/files/April-26-2023-Board-of-Governors-Regular-Meeting_agenda.pdf",
  },
  {
    year: 2018,
    name: "Armâan Karimpour",
    instrument: "Clarinet",
    schoolOrHometown: "St. Joseph Central Catholic High School",
    award: "Young People’s Concert Competition winner",
    orchestra: "Marshall University Symphony Orchestra",
    sourceTitle: "Marshall Digital Scholar: 2018 Family Concert",
    sourceUrl: "https://mds.marshall.edu/music_perf/947/",
  },
  {
    year: 2014,
    name: "Raleigh Frail",
    instrument: "Violin",
    award: "Young People’s Concert Competition winner",
    orchestra: "Marshall University Symphony Orchestra",
    sourceTitle: "Marshall Digital Scholar: 2014 Family Concert",
    sourceUrl: "https://mds.marshall.edu/music_perf/239/",
  },
  {
    year: 2011,
    name: "Olivia Hay",
    instrument: "Violin",
    schoolOrHometown: "Huntington, West Virginia",
    award: "Young People’s Concert Competition winner",
    orchestra: "Marshall University Symphony Orchestra",
    sourceTitle: "Marshall Digital Scholar: 2011 Family Concert",
    sourceUrl: "https://mds.marshall.edu/music_perf/388/",
  },
  {
    year: 2009,
    name: "Erica Shen",
    instrument: "Piano",
    schoolOrHometown: "George Washington High School, Charleston",
    award: "Young People’s Concert Competition winner",
    orchestra: "Marshall University Symphony Orchestra",
    sourceTitle: "Marshall Digital Scholar: 2009 Family Concert",
    sourceUrl: "https://mds.marshall.edu/music_perf/586/",
  },
  {
    year: 2008,
    name: "Sesil Dikener",
    instrument: "Piano",
    schoolOrHometown: "Huntington Middle School",
    award: "Young People’s Competition winner",
    orchestra: "Marshall University Symphony Orchestra",
    sourceTitle: "Marshall Digital Scholar: 2008 Young People’s Concert",
    sourceUrl: "https://mds.marshall.edu/music_perf/818/",
  },
];

export const applicationSteps = [
  {
    title: "Review the approved rules",
    text: "Confirm eligibility, repertoire, duration, memorization, accompanist, and orchestral-parts requirements.",
  },
  {
    title: "Prepare application materials",
    text: "Gather applicant and guardian details, repertoire information, consents, and any approved uploads.",
  },
  {
    title: "Submit the application",
    text: "Use the official form. A future integrated form will generate a readable application ID.",
  },
  {
    title: "Follow payment instructions",
    text: "If Zelle is approved, include the application ID in the memo and use only the recipient published on this site.",
  },
  {
    title: "Receive application confirmation",
    text: "This confirms submission only. It does not mean that payment has been verified.",
  },
  {
    title: "Receive completion notice",
    text: "After staff verifies payment and required materials, a separate message confirms that the application is complete.",
  },
] as const;

export const applicationStatuses = [
  "draft",
  "submitted",
  "payment_pending",
  "payment_under_review",
  "complete",
  "incomplete",
  "withdrawn",
] as const;

export const faqs: Faq[] = [
  {
    question: "Who is eligible to enter?",
    answer:
      "The next edition’s age or grade limits and geographic eligibility have not been confirmed. The site will publish those rules before applications open; please do not rely on requirements from an earlier year.",
    status: "pending",
  },
  {
    question: "Which instruments are eligible? Are vocalists included?",
    answer:
      "Eligible instruments, voice eligibility, and any competition divisions are awaiting organizer approval.",
    status: "pending",
  },
  {
    question: "What repertoire may I perform?",
    answer:
      "Repertoire type, performance duration, memorization, accompaniment, and orchestral-parts requirements are not yet approved for the next edition.",
    status: "pending",
  },
  {
    question: "When and where will the competition take place?",
    answer:
      "The competition date and audition venue are still to be confirmed. A 2025 Young People’s Concert took place at Marshall University, but that does not establish the next competition venue.",
    status: "pending",
  },
  {
    question: "Is there an entry fee?",
    answer:
      "The fee and refund policy are not yet confirmed. They will be displayed beside the deadline before the application opens.",
    status: "pending",
  },
  {
    question: "How will Zelle payment work?",
    answer:
      "If Zelle is approved, applicants will receive an application ID and will place that ID in the payment memo. Staff—not the website—will verify the transfer. The approved recipient will be published only after organizer confirmation.",
    status: "provisional",
  },
  {
    question: "How will I know my application is complete?",
    answer:
      "The planned workflow uses two separate messages: first, application received; later, payment confirmed and application complete. Submitting a form or reporting that payment was sent will not count as staff verification.",
    status: "provisional",
  },
  {
    question: "Who are the judges?",
    answer:
      "The adjudicators and judging procedure for the next edition have not been announced.",
    status: "pending",
  },
  {
    question: "What does the winner receive?",
    answer:
      "Historical winners have performed as featured soloists with Marshall University ensembles. The next edition’s award, orchestra, repertoire approval, and performance commitment are awaiting confirmation.",
    status: "verified-historical",
  },
  {
    question: "What is the difference between the competition and the concert?",
    answer:
      "The competition is the audition and selection event. The Young People’s Concert is the educational performance associated with the broader program. Historical sources sometimes call the audition the Young People’s Concert Competition.",
    status: "verified-historical",
  },
  {
    question: "What consent is required for a minor?",
    answer:
      "A future application is expected to require parent or guardian consent and a separate media preference. The final language and retention policy must be approved before minor data is collected.",
    status: "provisional",
  },
  {
    question: "May photographs or videos be published?",
    answer:
      "Only material with documented publication permission should appear publicly. The first website release intentionally uses no unapproved competitor photographs.",
    status: "provisional",
  },
];

export const researchSources = [
  {
    label: "Woman’s Club of Huntington history",
    href: "https://theclio.com/entry/27262",
  },
  {
    label: "Marshall Special Collections finding aid",
    href: "https://mds.marshall.edu/sc_finding_aids/169/",
  },
  {
    label: "Marshall University 2023 report",
    href: "https://www.marshall.edu/board/files/April-26-2023-Board-of-Governors-Regular-Meeting_agenda.pdf",
  },
  {
    label: "Marshall University 2025 event listing",
    href: "https://events.marshall.edu/calendar/day/2025/3/4",
  },
  {
    label: "Huntington Symphony Orchestra",
    href: "https://www.huntingtonsymphony.org/",
  },
] as const;

export function displayFact(fact: ImportantFact) {
  return fact.value ?? "To be confirmed";
}

export function statusLabel(status: ConfirmationStatus) {
  switch (status) {
    case "verified-current":
      return "Current source";
    case "verified-historical":
      return "Historical record";
    case "provisional":
      return "Provisional";
    default:
      return "Confirmation needed";
  }
}

export const basePath =
  process.env.GITHUB_PAGES === "true"
    ? `/${siteConfig.repositoryName}`
    : "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
