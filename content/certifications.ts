/* Credentials — professional certification records.
 *
 * ⚠ SOURCING NOTE — read before editing.
 * Issuer and year confirmed from Vignesh's LinkedIn "Licenses &
 * certifications" list. CREDENTIAL ID is still not available, so it stays
 * null and renders as "to confirm" rather than being guessed. `verified`
 * stays false until a credential URL/ID is supplied. */

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
    issuer: "VMEdu.com",
    title: "Scrum Fundamentals Certified",
    year: "Mar 2022",
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
    issuer: "Certiprof",
    title: "Scrum Foundation Professional Certificate",
    year: "Jul 2022",
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
