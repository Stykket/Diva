"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    timeline
      .from(".hero__brand", { opacity: 0, y: 18, duration: 1.4 })
      .from(".hero__line", { scaleX: 0, duration: 1.1 }, "-=.8")
      .from(".hero__subtitle", { opacity: 0, y: 12, duration: 1 }, "-=.6")
      .from(".hero__scroll", { opacity: 0, duration: 1 }, "-=.2");

    gsap.to(".hero__image", {
      scale: 1.12,
      yPercent: 7,
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".hero__veil", {
      opacity: 0.82,
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "30% top",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: root });

  return (
    <section id="top" ref={root} className="hero" aria-label="DIVA — Искусство отдыха">
      <img
        className="hero__image"
        src={`${BASE_PATH}/images/diva-hero.png`}
        alt="Спальня с белым сатиновым постельным бельём в мягком утреннем свете"
      />
      <div className="hero__veil" />
      <div className="hero__content">
        <p className="hero__kicker">DIVA BEDDING</p>
        <h1 className="hero__brand">DIVA</h1>
        <span className="hero__line" />
        <p className="hero__subtitle">Искусство отдыха</p>
      </div>
      <a className="hero__scroll" href="#story" aria-label="Прокрутить к истории бренда">
        <span>scroll</span>
        <i />
      </a>
    </section>
  );
}
