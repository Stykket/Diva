:root {
  --ink: #161311;
  --cream: #f3eee7;
  --warm-white: #fbf8f3;
  --bronze: #b79772;
  --line: rgba(255,255,255,.2);
}

* { box-sizing: border-box; }
html { scroll-behavior: auto; background: var(--ink); }
body { margin: 0; color: var(--cream); background: var(--ink); font-family: Arial, Helvetica, sans-serif; }
a { color: inherit; }
button { font: inherit; }

.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  height: 76px;
  padding: 0 clamp(22px, 4vw, 72px);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  color: #fff;
  background: rgba(16,13,11,.72);
  border-bottom: 1px solid rgba(255,255,255,.09);
  backdrop-filter: blur(18px);
  transform: translateY(-110%);
  transition: transform .65s cubic-bezier(.2,.8,.2,1);
}
.nav--visible { transform: translateY(0); }
.nav__brand { text-decoration: none; letter-spacing: .42em; font-size: 15px; font-weight: 700; }
.nav nav { display: flex; gap: 30px; }
.nav nav a { text-decoration: none; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; opacity: .72; transition: opacity .25s; }
.nav nav a:hover { opacity: 1; }
.nav__action { justify-self: end; border: 1px solid rgba(255,255,255,.45); color: #fff; background: transparent; border-radius: 999px; padding: 10px 18px; cursor: pointer; }

.hero {
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  display: grid;
  place-items: center;
  isolation: isolate;
}
.hero__image { object-fit: cover; object-position: center; transform: scale(1.02); will-change: transform; }
.hero__veil { position: absolute; inset: 0; z-index: 1; background: linear-gradient(180deg, rgba(12,9,7,.2), rgba(12,9,7,.12) 40%, rgba(12,9,7,.62)); }
.hero::after { content: ""; position: absolute; inset: 0; z-index: 1; background: radial-gradient(circle at 50% 43%, transparent 0 25%, rgba(0,0,0,.18) 72%, rgba(0,0,0,.42) 100%); }
.hero__content { position: relative; z-index: 2; text-align: center; transform: translateY(-1vh); }
.hero__kicker { margin: 0 0 18px; font-size: 10px; letter-spacing: .55em; text-transform: uppercase; opacity: .72; }
.hero__brand { margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(72px, 14vw, 220px); font-weight: 400; letter-spacing: .1em; line-height: .78; text-shadow: 0 10px 35px rgba(0,0,0,.25); }
.hero__line { display: block; width: min(220px, 36vw); height: 1px; background: rgba(255,255,255,.72); margin: 34px auto 22px; transform-origin: center; }
.hero__subtitle { margin: 0; font-family: Georgia, "Times New Roman", serif; font-style: italic; font-size: clamp(18px, 2vw, 30px); letter-spacing: .08em; }
.hero__scroll { position: absolute; z-index: 3; bottom: 28px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 9px; text-decoration: none; text-transform: uppercase; letter-spacing: .34em; font-size: 8px; opacity: .72; }
.hero__scroll i { display: block; width: 1px; height: 48px; background: linear-gradient(#fff, transparent); animation: breathe 1.8s ease-in-out infinite; }
@keyframes breathe { 50% { transform: scaleY(.55); opacity: .45; } }

.section-shell { min-height: 100svh; padding: clamp(96px, 13vw, 200px) clamp(24px, 7vw, 120px); }
.story { display: grid; grid-template-columns: 1.35fr .65fr; gap: 9vw; align-items: center; background: var(--warm-white); color: var(--ink); }
.story__eyebrow, .fabric-placeholder p, .collection-placeholder p { margin: 0 0 25px; color: #8a7765; font-size: 10px; letter-spacing: .38em; text-transform: uppercase; }
.story__title { margin: 0; font-family: Georgia, "Times New Roman", serif; font-weight: 400; font-size: clamp(48px, 7vw, 112px); line-height: .96; letter-spacing: -.045em; }
.story__body { max-width: 460px; margin: 0; color: #5f554d; font-family: Georgia, "Times New Roman", serif; font-size: clamp(20px, 2vw, 30px); line-height: 1.55; }
.fabric-placeholder { background: #171310; display: flex; flex-direction: column; justify-content: center; }
.collection-placeholder { background: #d8c8b5; color: #1a1714; display: flex; flex-direction: column; justify-content: center; }
.fabric-placeholder h2, .collection-placeholder h2 { max-width: 980px; margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(40px, 6vw, 92px); font-weight: 400; line-height: 1.02; letter-spacing: -.04em; }

@media (max-width: 780px) {
  .nav { grid-template-columns: 1fr auto; height: 66px; }
  .nav nav { display: none; }
  .nav__action { font-size: 11px; padding: 9px 12px; }
  .hero__brand { letter-spacing: .04em; }
  .story { grid-template-columns: 1fr; align-content: center; gap: 44px; }
  .story__body { font-size: 20px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .001ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; }
}

.hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
