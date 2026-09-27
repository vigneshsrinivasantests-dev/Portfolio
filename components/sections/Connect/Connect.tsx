"use client";

/*
 * LET'S CONNECT — the closing chapter (Patta "Let's connect" as the mood
 * reference: curved panel row, floating perspective, calm typography).
 * Our take: five memory panels on a shallow 3D arc that lean with the
 * cursor and breathe on idle; the site-wide Button carries the CTA; social
 * cards use the same circle-fill + roll language as the nav.
 */

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, EASE, prefersReducedMotion } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import styles from "./Connect.module.css";
import { useLang } from "@/lib/i18n";

/* Vignesh's own photographs, in the order supplied.
   `focus` is object-position only: the frames are portrait, so this keeps
   him in frame — the images are cropped, never scaled non-uniformly, and
   their colour is left untouched. */
const PANELS = [
  { src: "/images/connect/moment-1.jpg", focus: "58% 30%", rotate: 26, z: -110, y: -26 },
  { src: "/images/connect/moment-2.jpg", focus: "center 32%", rotate: 13, z: -40, y: -8 },
  { src: "/images/connect/moment-3.jpg", focus: "center 34%", rotate: 0, z: 0, y: 0 },
  { src: "/images/connect/moment-4.jpg", focus: "center 30%", rotate: -13, z: -40, y: -8 },
  { src: "/images/connect/moment-5.jpg", focus: "46% 32%", rotate: -26, z: -110, y: -26 },
];

/* Official brand mark, inlined so it inherits size and needs no request.
   Path is LinkedIn's own "in" bug — not a generic lookalike. */
const MARKS: Record<string, ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

/* URLs exactly as supplied — never guessed */
const SOCIALS = [
  { name: "LinkedIn", mark: "linkedin", href: "https://www.linkedin.com/in/vignesh-srinivasan-61203116b" },
  { name: "Email", glyph: "@", href: "mailto:vigneshsrinivasan2@gmail.com" },
] as const;

export default function Connect() {
  const root = useRef<HTMLElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      /* reveal */
      gsap.from(`.${styles.head} > *`, {
        y: 36,
        autoAlpha: 0,
        duration: 0.9,
        ease: EASE.outExpo,
        stagger: 0.09,
        immediateRender: false,
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
      gsap.from(`.${styles.panel}`, {
        y: 90,
        autoAlpha: 0,
        duration: 1.1,
        ease: EASE.outExpo,
        stagger: { each: 0.08, from: "center" },
        immediateRender: false,
        scrollTrigger: { trigger: `.${styles.arc}`, start: "top 82%" },
      });
      gsap.from(`.${styles.socials} > *`, {
        y: 26,
        autoAlpha: 0,
        duration: 0.8,
        ease: EASE.outExpo,
        stagger: 0.07,
        immediateRender: false,
        scrollTrigger: { trigger: `.${styles.socials}`, start: "top 88%" },
      });

      /* idle float — each panel bobs on its own rhythm */
      gsap.utils.toArray<HTMLElement>(`.${styles.panelInner}`).forEach((p, i) => {
        gsap.to(p, {
          y: `+=${6 + (i % 3) * 3}`,
          duration: 3 + (i % 3) * 0.7,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: i * 0.4,
        });
      });

      /* cursor: the whole arc leans, each panel adds its own micro-tilt */
      const panels = gsap.utils.toArray<HTMLElement>(`.${styles.panel}`);
      const setters = panels.map((p, i) => ({
        rx: gsap.quickTo(p, "rotationX", { duration: 0.9, ease: "power3.out" }),
        add: gsap.quickTo(p, "rotationY", { duration: 0.9, ease: "power3.out" }),
        base: PANELS[i].rotate,
      }));
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const cx = ((e.clientX - r.left) / r.width - 0.5) * 2;
        const cy = ((e.clientY - r.top) / r.height - 0.5) * 2;
        setters.forEach((s) => {
          s.add(s.base + cx * 5);
          s.rx(-cy * 4);
        });
      };
      const onLeave = () => setters.forEach((s) => {
        s.add(s.base);
        s.rx(0);
      });
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);

      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.connect} id="contact" ref={root}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>
          <span>08</span> {t("connect.eyebrow")}
        </p>
        <h2 className={styles.h2}>
          {t("connect.h2a")}{" "}
          <em className={styles.serif}>{t("connect.h2Em")}</em>
        </h2>
        <p className={styles.lede}>
          {t("connect.lede")}
        </p>
        <div className={styles.cta}>
          <Button href="mailto:vigneshsrinivasan2@gmail.com" variant="primary" arrow>
            {t("connect.cta")}
          </Button>
        </div>
      </div>

      {/* curved memory arc */}
      <div className={styles.arc} aria-hidden="true">
        {PANELS.map((p, i) => (
          <div
            className={styles.panel}
            key={p.src}
            style={
              {
                transform: `translate3d(0, ${p.y}px, ${p.z}px) rotateY(${p.rotate}deg)`,
              } as React.CSSProperties
            }
          >
            <div className={`${styles.panelInner} ${styles.hasPhoto}`}>
              <img
                className={styles.photo}
                src={p.src}
                alt=""
                style={{ objectPosition: p.focus }}
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
      </div>

      {/* social cards */}
      <div className={styles.socials}>
        {SOCIALS.map((s) => (
          <a
            key={s.name}
            href={s.href}
            className={styles.social}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <span className={styles.glyph}>
              {"mark" in s ? MARKS[s.mark] : s.glyph}
            </span>
            <span className={styles.roll}>
              <span>{s.name}</span>
              <span aria-hidden="true">{s.name}</span>
            </span>
            <span className={styles.arrow}>↗</span>
          </a>
        ))}
      </div>

      <footer className={styles.footer}>
        <span>
          {t("connect.credit")} <b>Vignesh</b>
        </span>
        <a href="#home" className={styles.top}>
          {t("connect.top")}
        </a>
        <span>© 2026 Vignesh Srinivasan</span>
      </footer>
    </section>
  );
}
