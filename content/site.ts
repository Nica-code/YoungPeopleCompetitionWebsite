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
  sourceUrl?: string;
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
  researchUpdated: "October 15, 2026",
  publicContactEmail: "cathwayjcs@yahoo.com",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/competition", label: "Competition" },
  { href: "/winners", label: "Winners" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const currentEdition = {
  title: "2027 auditions",
  year: 2027,
  status: "announced" as const,
  notice:
    "Applications and the $30 entry fee must be received by December 14, 2026. Auditions are Sunday, January 10, 2027, at 12:30 p.m.",
  facts: [
    {
      label: "Application deadline",
      value: "December 14, 2026",
      placeholder: "Application and fee received by this date",
      status: "verified-current",
    },
    {
      label: "Audition date",
      value: "Sunday, January 10, 2027",
      placeholder: "12:30 p.m. · check in by 12:15 p.m.",
      status: "verified-current",
    },
    {
      label: "Eligibility",
      value: "Ages 12–18 in the Tri-State Area",
      placeholder: "Instrumentalists and vocalists",
      status: "verified-current",
    },
    {
      label: "Audition location",
      value: "Smith Music Hall · Marshall University",
      placeholder: "Huntington, West Virginia",
      status: "verified-current",
    },
    {
      label: "Entry fee",
      value: "$30 by check",
      placeholder: "Payable to Young People’s Concert Committee",
      status: "verified-current",
    },
  ] satisfies ImportantFact[],
};

export const partners = [
  {
    name: "The Woman’s Club of Huntington",
    role: "Sponsor of the 66th Annual Young People’s Concert.",
    status: "verified-current" as ConfirmationStatus,
    href: "https://www.gfwcwestvirginia.org/join",
  },
  {
    name: "Marshall University School of Music",
    role: "Cooperating institution and home of the Marshall University Symphony Orchestra.",
    status: "verified-current" as ConfirmationStatus,
    href: "https://www.marshall.edu/music/",
  },
  {
    name: "Huntington Symphony Orchestra",
    role: "Its members join the Marshall University Symphony Orchestra for the winner’s performance; it also sponsors the prizes.",
    status: "verified-current" as ConfirmationStatus,
    href: "https://www.huntingtonsymphony.org/",
  },
] as const;

export const participantBenefits = [
  {
    number: "01",
    title: "Prepare with purpose",
    text: "Prepare an orchestral solo or concerto movement of no more than 12 minutes, with music memorized for the audition.",
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
    text: "The selected soloist is offered a performance with the Marshall University Symphony Orchestra, joined by members of the Huntington Symphony Orchestra, and a $300 award.",
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
    year: 2026,
    name: "Harin Lee",
    instrument: "Violin",
  },
  {
    year: 2023,
    name: "Isaiah Biele",
    instrument: "Violin",
    sourceUrl:
      "https://www.marshall.edu/board/files/April-26-2023-Board-of-Governors-Regular-Meeting_agenda.pdf",
  },
  {
    year: 2018,
    name: "Armâan Karimpour",
    instrument: "Clarinet",
    sourceUrl: "https://mds.marshall.edu/music_perf/947/",
  },
  {
    year: 2014,
    name: "Haleigh Frail",
    instrument: "Violin",
  },
  {
    year: 2011,
    name: "Olivia Hay",
    instrument: "Violin",
    sourceUrl: "https://mds.marshall.edu/music_perf/388/",
  },
  {
    year: 2009,
    name: "Erica Shen",
    instrument: "Piano",
    sourceUrl: "https://mds.marshall.edu/music_perf/586/",
  },
  {
    year: 2008,
    name: "Sesil Dikener",
    instrument: "Piano",
    sourceUrl: "https://mds.marshall.edu/music_perf/818/",
  },
];

export const applicationSteps = [
  {
    title: "Check eligibility and repertoire",
    text: "Applicants must be 12–18 and live in the Tri-State Area. Choose an orchestral solo or concerto movement lasting no more than 12 minutes; orchestra parts must be rentable.",
  },
  {
    title: "Gather the requested information",
    text: "Include applicant contact details, grade and school, teacher and accompanist details, plus the selection title, composer, duration, and instrument or voice.",
  },
  {
    title: "Prepare the $30 check",
    text: "Make the check payable to Young People’s Concert Committee.",
  },
  {
    title: "Mail everything together",
    text: "Send the completed application and check to Judith Short, 121 Elwood Avenue, Huntington, WV 25705. Both must be received by December 14, 2026.",
  },
  {
    title: "Prepare for audition day",
    text: "Memorize the music, arrange a qualified accompanist, and bring three copies of the score of your chosen audition repertoire for the three judges. Both soloist and accompanist must check in by 12:15 p.m. on January 10; late arrivals cannot audition.",
  },
] as const;

export const faqs: Faq[] = [
  {
    question: "Who is eligible to enter?",
    answer:
      "Students aged 12–18 who live in the Tri-State Area may apply. Contact the chairperson if you are unsure whether your location qualifies.",
    status: "verified-current",
  },
  {
    question: "Which instruments are eligible? Are vocalists included?",
    answer:
      "Instrumental soloists and vocalists may apply.",
    status: "verified-current",
  },
  {
    question: "What repertoire may I perform?",
    answer:
      "Choose a composition for solo instrument or voice with orchestra; one movement of a concerto is appropriate. The time limit is 12 minutes, orchestra parts must be available for rent, and audition music must be memorized. Bring a well-qualified accompanist and three copies of the score of your chosen audition repertoire for the three judges.",
    status: "verified-current",
  },
  {
    question: "When and where will the competition take place?",
    answer:
      "Auditions are Sunday, January 10, 2027 at 12:30 p.m. in Smith Music Hall on the Marshall University campus. Soloist and accompanist must check in by 12:15 p.m.; late arrivals cannot audition.",
    status: "verified-current",
  },
  {
    question: "Is there an entry fee?",
    answer:
      "Yes. Mail a $30 check payable to Young People’s Concert Committee with the application. Both must be received by December 14, 2026.",
    status: "verified-current",
  },
  {
    question: "How do I submit an application?",
    answer:
      "Complete the application details and mail them with the $30 check to Judith Short, 121 Elwood Avenue, Huntington, WV 25705. There is no web submission or online payment on this site.",
    status: "verified-current",
  },
  {
    question: "What if I need confirmation that my application arrived?",
    answer:
      "Contact Judith Short at 304-617-3367 or cathwayjcs@yahoo.com to confirm receipt.",
    status: "verified-current",
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
      "The winner receives a $300 award and performs with the Marshall University Symphony Orchestra, joined by members of the Huntington Symphony Orchestra. The Huntington Symphony Orchestra also sponsors the prizes, including second- and third-place awards. The winner must attend the March 1 rehearsal and March 2–3 performances.",
    status: "verified-current",
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
      "The paper application asks for contact, school, teacher, accompanist, and repertoire details. Contact Judith Short if you have questions about information for a minor applicant.",
    status: "verified-current",
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
