/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Vignesh Srinivasan",
  jobTitle: "QA Lead Engineer",
  email: "vigneshsrinivasan2@gmail.com",
  phone: "+91 97505 18537",
  location: "Nagercoil, Tamil Nadu, India",
  /* exact profile URL as supplied — also consumed by JSON-LD */
  sameAs: [
    "https://www.linkedin.com/in/vignesh-srinivasan-61203116b",
  ],
};
