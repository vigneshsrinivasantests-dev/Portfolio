/* THE JOURNEY — the chapters the light tunnel travels through.
 *
 * ⚠ SOURCING: every fact here traces to Vignesh's résumé (mirrored in
 * content/experience.ts) — companies, dates, places, roles.
 *
 * Shape per chapter:
 *   year   — shown large, the anchor
 *   title  — what the chapter is about, in his voice
 *   place  — where it happened (context line)
 *   story  — what was actually happening, 2–3 sentences
 *   bridge — how it handed over to the next chapter (the transition line) */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
};

export const CHAPTERS: Chapter[] = [
  {
    id: "origins",
    year: "2020",
    title: "An engineering degree, then Chennai",
    place: "St. Peter's Institute of Higher Education and Research, Chennai",
    story:
      "A B.E. in Electronics & Communication Engineering closed in 2020 — the technical grounding underneath everything that followed.",
    bridge: "The next year opened with a desk at Capgemini, not a lab bench.",
  },
  {
    id: "process",
    year: "2021",
    title: "Reading requirements closely",
    place: "Capgemini Business Services · Chennai",
    story:
      "Ten months as a Process Analyst — input analysis and client-specific benefit booklets, work where a missed detail shows up in someone else's paperwork.",
    bridge:
      "That habit of catching what's wrong before it ships turned out to be the first QA instinct.",
  },
  {
    id: "fintech-qa",
    year: "2022",
    title: "Into fintech QA",
    place: "Inypay · Chennai",
    story:
      "Two years as a Quality Assurance Engineer on Inypay's Early Pay Day and Study Now Pay Later products — manual test cases and UI testing across Windows, Safari, Android and iOS, inside Agile/Scrum teams.",
    bridge: "By 2024 that manual groundwork had earned a lead title.",
  },
  {
    id: "qa-lead",
    year: "2024",
    title: "Leading regression and API testing",
    place: "Inypay · Chennai",
    story:
      "As QA Lead — Engineering, ownership widened: end-to-end regression across Android and iOS, API testing with Postman, automated test cases in Node.js tracked in TestRail, and performance testing with JMeter.",
    bridge: "That October, the work moved from fintech to a US healthcare product.",
  },
  {
    id: "healthcare-ai",
    year: "2024–Present",
    title: "Healthcare QA, with AI in the workflow",
    place: "TroniqsRationale · Nagercoil (US-based Healthcare Project)",
    story:
      "Now leading end-to-end QA for a US healthcare product — planning, mentoring the QA team, driving compliance and regression testing, and integrating AI tools into how test cases get designed and analysed.",
    bridge: "Four years in, the thread is the same: catch what's wrong before someone else has to.",
  },
];
