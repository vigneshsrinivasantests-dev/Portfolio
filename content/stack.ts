/* My QA Stack — tools shown in the spiral orbit.
   `src` uses a real logo from /public/images/logos when we have one;
   otherwise a brand-tinted monogram mark keeps the set visually uniform.
   To upgrade a monogram: drop an SVG/PNG in that folder and swap in `src`. */

export type Tool = {
  name: string;
  group: "Automation" | "API & Performance" | "Test Management" | "AI-Augmented QA";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — Automation — */
  { name: "Selenium", group: "Automation", mono: "Se", color: "#43B02A" },
  { name: "Playwright", group: "Automation", mono: "Pw", color: "#D33833" },
  { name: "Appium", group: "Automation", mono: "Ap", color: "#94002B" },
  { name: "Node.js", group: "Automation", mono: "Nd", color: "#3C873A" },

  /* — API & Performance — */
  { name: "Postman/Newman", group: "API & Performance", mono: "Po", color: "#FF6C37" },
  { name: "JMeter", group: "API & Performance", mono: "JM", color: "#D22128" },

  /* — Test Management — */
  { name: "TestRail", group: "Test Management", mono: "TR", color: "#5C4EE5" },
  { name: "AIO Tests", group: "Test Management", mono: "AT", color: "#0052CC" },

  /* — AI-Augmented QA — */
  { name: "Claude", group: "AI-Augmented QA", src: "/images/logos/claude.png" },
  { name: "Antigravity IDE", group: "AI-Augmented QA", mono: "AG", color: "#141414" },
];
