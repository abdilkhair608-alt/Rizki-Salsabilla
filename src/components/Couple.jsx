import bouquet from '../assets/bridal-bouquet.jpg';
import rings from '../assets/wedding-rings.jpg';
import { couple } from '../data/wedding.js';

export default function Couple() {
  return (
    <section id="couple" className="section-space">
      <div className="section-heading fade-in-section">
        <p className="eyebrow justify-center">BISMILLAHIRRAHMANIRRAHIM</p>
        <h2>
          Dua hati yang <em>dipertemukan.</em>
        </h2>
        <p>
          Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i
          <br className="hidden md:block" /> untuk menjadi bagian dari hari bahagia kami.
        </p>
      </div>
      <div className="couple-layout mx-auto max-w-5xl">
        <article className="couple-person fade-in-section">
          <div className="portrait-frame">
            <img
              src={rings}
              alt="Ilustrasi dua cincin emas dalam kotak beludru sage"
              loading="lazy"
              width="1536"
              height="1024"
            />
            <span>{couple.groom.initial}</span>
          </div>
          <p className="eyebrow justify-center mt-8">MEMPELAI PRIA</p>
          <h3>{couple.groom.name}</h3>
          <p>
            Putra dari
            <br />
            <strong>{couple.groom.father}</strong>
            <br />& {couple.groom.mother}
          </p>
          <span className="signature">{couple.groom.shortName}</span>
        </article>
        <span className="couple-ampersand" aria-hidden="true">
          &
        </span>
        <article className="couple-person fade-in-section">
          <div className="portrait-frame">
            <img
              src={bouquet}
              alt="Ilustrasi buket pengantin mawar ivory dengan pita sutra"
              loading="lazy"
              width="1536"
              height="1024"
            />
            <span>{couple.bride.initial}</span>
          </div>
          <p className="eyebrow justify-center mt-8">MEMPELAI WANITA</p>
          <h3>{couple.bride.name}</h3>
          <p>
            Putri dari
            <br />
            <strong>{couple.bride.father}</strong>
            <br />& {couple.bride.mother}
          </p>
          <span className="signature">{couple.bride.shortName}</span>
        </article>
      </div>
    </section>
  );
}
