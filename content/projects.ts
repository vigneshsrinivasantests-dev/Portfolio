/* Featured QA initiatives — single source of truth for the Work section
   and the /work/[slug] case-study routes. Order = career order, newest
   first.

   ⚠ SOURCING: every fact traces to Vignesh's résumé (mirrored in
   content/experience.ts). No metrics, logos or links are invented — this
   is internal client/employer work with no public deployment, so `site`
   and `repo` are intentionally omitted rather than guessed. */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

/* Card / case-page cover. A `mark` is a short typographic cover — used here
   throughout, since no client-branded artwork can be shown for internal
   fintech/healthcare QA work. */
export type Cover = {
  bg: string;
  ink: "light" | "dark";
  mark?: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  contribution: string;
  coverLabel: string;
  cover?: Cover;
  site?: { url: string; label: string };
  repo?: string;
  award?: string;
  study: Study;
};

export const PROJECTS: Project[] = [
  {
    slug: "healthcare-qa-leadership",
    title: "Healthcare QA Leadership — TroniqsRationale",
    tags: ["QA Leadership", "Healthcare", "Regression Testing"],
    year: "2024–Present",
    oneLiner:
      "Leading end-to-end QA for a US-based healthcare product — regression, compliance and an AI-augmented testing workflow.",
    contribution:
      "QA leadership, process improvement and AI-augmented test design for a live healthcare product.",
    coverLabel: "HEALTHCARE QA",
    cover: { bg: "#0B6E4F", ink: "light", mark: "QA" },
    study: {
      role: "QA Lead Engineer",
      timeline: "Oct 2024 – Present · TroniqsRationale, Nagercoil",
      context:
        "TroniqsRationale runs QA for a US-based healthcare product line, where release reliability and compliance carry more weight than in most consumer software.",
      problem:
        "A growing QA team needed consistent planning, delegation and quality standards across releases — plus a way to keep test-case design fast as scope grew.",
      process: [
        {
          title: "Own the QA process end to end",
          body: "Lead QA across the healthcare application and workflows, from planning and scheduling through delegation of work across the team.",
        },
        {
          title: "Mentor while shipping",
          body: "Mentor junior QA analysts on best practices while still driving day-to-day regression, functional, performance and compliance testing.",
        },
        {
          title: "Bring AI into the workflow",
          body: "Integrate AI tools into QA workflows to accelerate test case design and analysis, rather than treating AI as a side experiment.",
        },
      ],
      decisions: [
        {
          title: "Process improvement is part of the QA job, not a side project",
          why: "Monitoring QA processes and introducing improvements directly reduces error rates and shortens testing cycles — the fastest lever available to a QA lead.",
        },
      ],
      outcomes: [
        "Leading QA delivery on an active US healthcare product across regression, functional, performance and compliance testing",
        "An AI-augmented workflow now built into how test cases are designed and analysed",
      ],
      reflection:
        "Leading QA in healthcare means the review checklist is never just 'does it work' — compliance and reliability are the actual product.",
      note: "Internal client work — full detail shared in a portfolio conversation.",
    },
  },
  {
    slug: "fintech-qa-lead",
    title: "QA Lead — Engineering — Inypay",
    tags: ["Regression Testing", "API Testing", "Mobile QA"],
    year: "2024",
    oneLiner:
      "Stepped up to lead end-to-end regression, API and performance testing across Inypay's Android and iOS fintech products.",
    contribution:
      "Owned regression, API and performance testing workflows across two mobile platforms.",
    coverLabel: "FINTECH QA LEAD",
    cover: { bg: "#0072E3", ink: "light", mark: "QA" },
    study: {
      role: "QA Lead — Engineering",
      timeline: "Feb – Jul 2024 · Inypay, Chennai",
      context:
        "Inypay's fintech products ship on both Android and iOS, with an API layer that needed the same testing rigor as the UI.",
      problem:
        "Regression testing, API validation and performance testing were running as separate efforts; the products needed one QA lead pulling them into a single workflow.",
      process: [
        {
          title: "Regression across both platforms",
          body: "Performed end-to-end regression testing across Android and iOS on every release.",
        },
        {
          title: "API testing, streamlined",
          body: "Conducted API testing using Postman and streamlined the workflow with Selenium and Postman/Newman.",
        },
        {
          title: "Automate and track",
          body: "Executed automated test cases using Node.js and tracked every result in TestRail.",
        },
        {
          title: "Load test before it ships",
          body: "Ran performance and load testing using JMeter, and built mobile test suites with Appium and Selenium.",
        },
      ],
      decisions: [
        {
          title: "Newman for repeatability",
          why: "Running Postman collections through Newman turned manual API checks into a repeatable step in the testing workflow, not a one-off click-through.",
        },
      ],
      outcomes: [
        "End-to-end regression coverage across Android and iOS on every release",
        "API, performance and mobile test suites running as one coordinated QA workflow",
      ],
      reflection:
        "Fintech QA has no quiet corners — a missed regression on either platform is a missed transaction for a real customer.",
    },
  },
  {
    slug: "fintech-manual-qa",
    title: "Manual & Cross-Platform QA — Inypay",
    tags: ["Manual Testing", "Agile/Scrum", "Cross-Browser QA"],
    year: "2022–2024",
    oneLiner:
      "Two years of manual and cross-platform QA on Early Pay Day and Study Now Pay Later — the groundwork behind a later promotion to QA Lead.",
    contribution:
      "Authored test cases and executed cross-platform UI testing inside Agile/Scrum teams.",
    coverLabel: "FINTECH MANUAL QA",
    cover: { bg: "#FFB200", ink: "dark", mark: "QA" },
    study: {
      role: "Quality Assurance Engineer",
      timeline: "Feb 2022 – Feb 2024 · Inypay, Chennai",
      context:
        "Early Pay Day and Study Now Pay Later are both consumer fintech products built inside Agile/Scrum teams, tested across Windows, Safari, Android and iOS.",
      problem:
        "Two live products, four platforms, and a sprint cadence that left no room for untested releases.",
      process: [
        {
          title: "Write the test cases the team actually uses",
          body: "Authored and maintained manual test cases covering both products end to end.",
        },
        {
          title: "Test where the users actually are",
          body: "Executed UI testing across Windows, Safari, Android and iOS, rather than one reference platform.",
        },
        {
          title: "Report defects that get fixed",
          body: "Executed quality tests to identify defects and submitted detailed product issue reports.",
        },
      ],
      decisions: [
        {
          title: "Manual first, on purpose",
          why: "With two live fintech products in active Agile sprints, manual testing kept pace with fast-changing UI while regression and automation work matured in parallel.",
        },
      ],
      outcomes: [
        "Two years of continuous manual and cross-platform QA on two live fintech products",
        "Promoted to QA Lead — Engineering in February 2024",
      ],
      reflection:
        "Cross-platform QA taught the lesson that carried into every later role: a bug that only shows up on one browser is still a bug.",
    },
  },
  {
    slug: "process-analysis-capgemini",
    title: "Process Analysis — Capgemini Business Services",
    tags: ["Process Analysis", "Documentation", "Accuracy"],
    year: "2021–2022",
    oneLiner:
      "Input analysis and client-specific benefit-booklet preparation — the accuracy habit that carried into a QA career.",
    contribution:
      "Performed input analysis and prepared client-specific documentation with high accuracy.",
    coverLabel: "PROCESS ANALYSIS",
    cover: { bg: "#171429", ink: "light", mark: "PA" },
    study: {
      role: "Process Analyst",
      timeline: "Jul 2021 – Feb 2022 · Capgemini Business Services, Chennai",
      context:
        "A first professional role built around input analysis and preparing client-specific benefit booklets.",
      problem:
        "Client documentation had to be accurate on the first pass — there was no QA layer behind a process analyst's own output.",
      process: [
        {
          title: "Analyse the input before touching the output",
          body: "Performed input analysis on client data before preparing any documentation.",
        },
        {
          title: "Build for the specific client, not a template",
          body: "Prepared client-specific benefit booklets with high accuracy.",
        },
      ],
      decisions: [
        {
          title: "Accuracy over speed",
          why: "A booklet that's fast but wrong costs more client trust than one that's slow but correct — the first quality tradeoff of the career, before 'QA' was the job title.",
        },
      ],
      outcomes: [
        "High-accuracy client documentation delivered without a downstream QA check",
      ],
      reflection:
        "This was the role before the job title — the discipline of catching your own mistakes before anyone else has to.",
    },
  },
];
