"use client";

/*
 * Centralised English-only store for every user-facing string on the site.
 *
 * The site previously carried an EN/FR toggle; it has been removed (single
 * English-language portfolio), but the `t()`/`useLang()`/`L()` API is kept
 * unchanged so every section component that already calls it needs no edits.
 */

import { createContext, useContext, type ReactNode } from "react";

export type Lang = "en";

export const DICT: Record<string, string> = {
  /* ---------------- nav ---------------- */
  "nav.home": "Home",
  "nav.about": "About",
  "nav.work": "Work",
  "nav.contact": "Contact",
  "nav.menu": "Open menu",
  "nav.close": "Close menu",

  /* ---------------- intro ---------------- */
  "intro.scroll": "Scroll to enter",

  /* ---------------- hero ---------------- */
  "hero.kicker": "QA Lead Engineer",
  "hero.h1a": "Quality that",
  "hero.h1aEm": "ships.",
  "hero.h1b": "Bugs caught",
  "hero.h1bEm": "before users.",
  "hero.sub":
    "I lead QA across fintech and healthcare products — building automation frameworks, mentoring teams, and integrating AI into testing workflows to ship reliable software faster.",
  "hero.cta1": "View My Work",
  "hero.cta2": "See How I Work",
  "hero.scroll": "Scroll to Explore",
  "stat.years": "Years in QA",
  "stat.domains": "Domains: Fintech & Healthcare",
  "stat.companies": "Companies",
  "stat.tools": "Tools & Frameworks",

  /* ---------------- about ---------------- */
  "about.eyebrow": "About",
  "about.h2a": "Quality is how I think —",
  "about.h2b": "leadership is how I",
  "about.h2Em": "scale",
  "about.h2c": " it.",
  "about.m1": "Years of QA experience",
  "about.m2": "Industry domains: Fintech & Healthcare",
  "about.m3": "Companies across a QA career",
  "about.m4": "AI tools integrated into the QA workflow (Claude, Antigravity IDE)",
  "about.edu":
    "B.E. Electronics & Communication Engineering · St. Peter's Institute of Higher Education and Research, Chennai · 2020 · Scrum Fundamentals Certified · Scrum Foundation Professional Certificate",
  "about.cta": "Explore My Work",

  /* ---------------- journey ----------------
     Chapter copy lives in content/journey.ts; only the chrome is here. */
  "journey.eyebrow": "My Journey",
  "journey.enter": "Scroll to travel",
  "journey.chapter": "Chapter",
  "journey.lede":
    "From Chennai to leading QA on a US healthcare product — the chapters that turned a process analyst into a QA lead.",

  /* ---------------- QA stack ---------------- */
  "stack.eyebrow": "Toolkit",
  "stack.h2": "My QA",
  "stack.h2Em": "Toolkit.",
  "stack.lede":
    "The tools I use to plan, automate, test and report — from the first manual test case to a CI-ready automation suite.",
  "stack.count": "tools",
  "stack.disciplines": "disciplines",

  /* ---------------- work ---------------- */
  "work.eyebrow": "Featured Work",
  "work.h2a": "QA initiatives,",
  "work.h2b": "built to",
  "work.h2Em": "ship.",
  "work.lede":
    "Regression leadership, API automation and AI-augmented QA workflows — each initiative a different capability, all one practice.",
  "work.open": "Open case study",
  "work.hint": "SCROLL TO BROWSE",

  /* ---------------- experience ---------------- */
  "exp.eyebrow": "Experience",
  "exp.h2": "Where I built my",
  "exp.h2Em": "judgment.",
  "exp.worked": "What I worked on",
  "exp.impact": "Impact",
  "exp.tools": "Tools & skills",
  "exp.hint": "SCROLL · CLICK TO JUMP",
  "type.Internship": "Internship",
  "type.Full-time": "Full-time",
  "type.Hackathon": "Hackathon",
  "type.Freelance": "Freelance",

  /* ---------------- credentials ---------------- */
  "cert.introLabel": "Introduction",
  "cert.introTitle1": "VERIFIED",
  "cert.introTitle2": "CREDENTIALS",
  "cert.introBody":
    "Agile and Scrum foundations behind the QA leadership work — the process discipline underneath the testing.",
  "cert.introNote": "Two programmes · credential IDs on request.",
  "cert.eyebrow": "Credentials",
  "cert.h2": "Credentials",
  "cert.lede": "Professional certifications earned alongside my QA career.",
  "cert.certified": "Certified",
  "cert.brandRole": "QA Lead Engineer",
  "cert.issuerTBC": "Issuer — to confirm",
  "cert.certification": "Certification",
  "cert.verified": "✓ Verified",
  "cert.onRequest": "Credential on request",
  "cert.issuedBy": "Issued by",
  "cert.year": "Year",
  "cert.id": "Credential ID",
  "cert.tbc": "To confirm",
  "cert.skills": "Skills",
  "cert.verify": "Verify credential ↗",
  "cert.foot": "Credentials",

  /* ---------------- gallery — personal archive ---------------- */
  "gallery.eyebrow": "The Archive",
  "gallery.h2a": "A few moments",
  "gallery.h2Em": "off the clock",
  "gallery.lede": "A few personal moments outside the test suites and sprint boards.",
  "gallery.alt": "A personal moment",
  "gallery.frames": "Frames",
  "gallery.hint": "Scroll to travel the archive",

  /* ---------------- connect ---------------- */
  "connect.eyebrow": "Let's Connect",
  "connect.h2a": "Let's build something",
  "connect.h2Em": "reliable.",
  "connect.lede":
    "I'm open to QA leadership roles, automation projects and good conversations — if you're shipping something that needs to work, I'd like to hear about it.",
  "connect.cta": "Start a Conversation",
  "connect.credit": "Designed & Developed by",
  "connect.top": "Back to top ↑",

  /* ---------------- case study (/work/[slug]) ---------------- */
  "case.back": "← Back to work",
  "case.kicker": "Case Study",
  "case.role": "Role",
  "case.timeline": "Timeline",
  "case.focus": "Focus",
  "case.site": "Live product",
  "case.repo": "Source",
  "case.cover": "COVER",
  "case.context": "Context",
  "case.problem": "The Problem",
  "case.process": "Process",
  "case.decisions": "Key Decisions",
  "case.outcome": "Outcome",
  "case.reflection": "Reflection",
  "case.all": "← All projects",
  "case.next": "Next project",

  /* ---------------- lab (/tunnel) ---------------- */
  "lab.back": "← PORTFOLIO",
  "lab.hint": "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",

  /* ---------------- 404 ---------------- */
  "nf.label": "404 — NOT FOUND",
  "nf.h1": "This page went",
  "nf.h1Em": "off the grid.",
  "nf.cta": "Back to the portfolio →",
};

type Ctx = { lang: Lang; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  t: (k) => DICT[k] ?? k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const t = (k: string) => DICT[k] ?? k;
  return (
    <LanguageContext.Provider value={{ lang: "en", t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Content records no longer carry French copy, so this always returns the
 *  English field — kept so call sites (`L(lang, item, "summary")`) need no
 *  changes. */
export function L<T>(_lang: Lang, item: T, field: keyof T & string): string {
  return item[field] as unknown as string;
}
