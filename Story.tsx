"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${visible ? "nav--visible" : ""}`}>
      <a className="nav__brand" href="#top" aria-label="DIVA — на главную">DIVA</a>
      <nav aria-label="Основная навигация">
        <a href="#story">История</a>
        <a href="#fabric">Ткань</a>
        <a href="#collection">Коллекция</a>
      </nav>
      <button className="nav__action" type="button">Выбрать комплект</button>
    </header>
  );
}
