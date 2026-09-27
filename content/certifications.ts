/* Credentials — professional certification records.
 *
 * ⚠ SOURCING NOTE — read before editing.
 * Both entries come directly from Vignesh's résumé. The issuing body was not
 * named on the résumé, so ISSUER, YEAR and CREDENTIAL ID are left null and
 * render as "to confirm" rather than being guessed — printing an invented
 * issuer or credential ID on a job-seeker's portfolio is a false credential
 * claim, not a design detail.
 *
 * To complete a panel, fill in: issuer, year, credentialId, credentialUrl.
 * `verified` should only become true when a credential URL exists. */

export type Cert = {
  no: string; /* deck-style section number */
  /* the awarding organisation, exactly as it issued the credential */
  issuer: string | null;
  /* official issuer mark. Always rendered on a light plate so brand colours
     stay true on dark and light panels alike. `aspect` is the file's real
     ratio — the mark is never distorted. */
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
};

export const CERTS: Cert[] = [
  {
    no: "1.1",
    issuer: null,
    title: "Scrum Fundamentals Certified",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "Scrum framework fundamentals",
      "Agile ceremonies & roles",
      "Sprint planning",
    ],
    metric: { value: "SFC", label: "Agile fundamentals" },
  },
  {
    no: "1.2",
    issuer: null,
    title: "Scrum Foundation Professional Certificate",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "Scrum roles & artifacts",
      "Agile delivery practices",
      "Cross-functional collaboration",
    ],
    metric: { value: "SFPC", label: "Professional-level Scrum" },
  },
];
