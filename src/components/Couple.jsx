import groomPhoto from '../assets/rizki.png';
import bridePhoto from '../assets/salsabilla.png';
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
          <div className="portrait-frame portrait-frame-photo">
            <img
              src={groomPhoto}
              alt={`Foto ${couple.groom.name}, mempelai pria`}
              loading="lazy"
              width="1161"
              height="1355"
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
          <div className="portrait-frame portrait-frame-photo">
            <img
              src={bridePhoto}
              alt={`Foto ${couple.bride.name}, mempelai wanita`}
              loading="lazy"
              width="1024"
              height="1536"
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
