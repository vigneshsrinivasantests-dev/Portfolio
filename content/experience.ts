/* Professional experience — from Vignesh's résumé. Reverse chronological:
   newest first. */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  /* panel color — intentional, one vibrant per role (Experience deck) */
  color: string;
  fg: "light" | "dark";
  /* Company mark — omitted where no verified official logo file exists. */
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
};

export const ROLES: Role[] = [
  {
    company: "TroniqsRationale",
    role: "QA Lead Engineer",
    type: "Full-time",
    location: "Nagercoil, India (US-based Healthcare Project)",
    period: "Oct 2024 – Present",
    summary:
      "Leading end-to-end QA for a US-based healthcare product — day-to-day ownership of the team's planning, quality standards and AI-augmented testing workflow.",
    achievements: [
      "Lead end-to-end QA for healthcare applications and workflows, ensuring compliance and reliability across releases",
      "Monitor QA processes and introduce process improvements that reduce error rates and streamline testing cycles",
      "Manage planning, scheduling and delegation of work across the QA team, mentoring junior QA analysts on best practices",
      "Collaborate cross-functionally to plan and execute regression testing, and drive functional, performance and compliance testing",
      "Integrate AI tools into QA workflows to accelerate test case design and analysis",
    ],
    outcome: "Leading QA delivery on an active US healthcare product, from regression planning to compliance testing",
    skills: ["QA Leadership", "Healthcare Compliance", "Regression Testing", "Mentoring", "Claude", "Antigravity IDE"],
    color: "#0B6E4F",
    fg: "light",
  },
  {
    company: "Inypay",
    role: "QA Lead — Engineering",
    type: "Full-time",
    location: "Chennai, India",
    period: "Feb 2024 – Jul 2024",
    summary:
      "Stepped up from QA Engineer to lead end-to-end regression and API testing across Inypay's Android and iOS fintech products.",
    achievements: [
      "Performed end-to-end regression testing across Android and iOS platforms",
      "Conducted API testing using Postman and streamlined workflows with Selenium and Postman/Newman",
      "Executed automated test cases using Node.js and tracked results in TestRail",
      "Ran performance and load testing using JMeter and developed mobile test suites with Appium and Selenium",
    ],
    outcome: "Built and streamlined the regression, API and performance testing workflow for a fintech mobile product",
    skills: ["Selenium", "Postman/Newman", "Node.js", "TestRail", "JMeter", "Appium"],
    color: "#0072E3",
    fg: "light",
  },
  {
    company: "Inypay",
    role: "Quality Assurance Engineer",
    type: "Full-time",
    location: "Chennai, India",
    period: "Feb 2022 – Feb 2024",
    summary:
      "Supported Inypay's Early Pay Day and Study Now Pay Later fintech products within Agile/Scrum teams, from manual test design through cross-platform UI testing.",
    achievements: [
      "Supported Early Pay Day and Study Now Pay Later fintech products within Agile/Scrum teams",
      "Authored and maintained manual test cases and executed UI testing across Windows, Safari, Android and iOS",
      "Executed quality tests to identify defects and submitted detailed product issue reports",
    ],
    outcome: "Two years of manual and cross-platform QA on live fintech products, promoted to QA Lead in 2024",
    skills: ["Manual Testing", "Agile/Scrum", "Cross-Browser QA", "Defect Tracking"],
    color: "#FFB200",
    fg: "dark",
  },
  {
    company: "Capgemini Business Services (India) Limited",
    role: "Process Analyst",
    type: "Full-time",
    location: "Chennai, India",
    period: "Jul 2021 – Feb 2022",
    summary:
      "First professional role: input analysis and client-specific documentation for Capgemini Business Services.",
    achievements: [
      "Performed input analysis and prepared client-specific benefit booklets with high accuracy",
    ],
    outcome: "Built the analytical rigor and attention to detail that carried into a QA career",
    skills: ["Process Analysis", "Documentation", "Accuracy & QA Mindset"],
    color: "#171429",
    fg: "light",
  },
];
