import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import Story from "@/components/Story";

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <Nav />
      <Hero />
      <Story />
      <section id="fabric" className="fabric-placeholder section-shell">
        <p>Chapter II · Touch</p>
        <h2>Следующий спринт — интерактивная ткань и макросъёмка.</h2>
      </section>
      <section id="collection" className="collection-placeholder section-shell">
        <p>Chapter III · Collection</p>
        <h2>300 TC. 500 TC. Цвет. Размер. Только после истории.</h2>
      </section>
    </main>
  );
}
