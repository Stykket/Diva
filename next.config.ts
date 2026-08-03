"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".story__eyebrow, .story__title, .story__body", {
      opacity: 0,
      y: 55,
      stagger: 0.12,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: { trigger: root.current, start: "top 72%" }
    });
  }, { scope: root });

  return (
    <section id="story" ref={root} className="story section-shell">
      <div>
        <p className="story__eyebrow">Chapter I · Silence</p>
        <h2 className="story__title">Тишина,<br />которую можно почувствовать.</h2>
      </div>
      <p className="story__body">
        DIVA превращает спальню в пространство, где день наконец отпускает.
        Свет, воздух и гладкий сатин складываются в один спокойный ритуал.
      </p>
    </section>
  );
}
