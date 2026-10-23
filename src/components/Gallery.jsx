import { useState } from 'react';
import together from '../assets/rizki-salsabilla-1.jpg';
import playful from '../assets/rizki-salsabilla-2.jpg';
import forever from '../assets/rizki-salsabilla-3.jpg';
import Icon from './Icon.jsx';
import Lightbox from './Lightbox.jsx';

const photos = [
  {
    src: together,
    title: 'A beautiful beginning',
    alt: 'Rizki dan Salsabilla duduk bersama saling membelakangi',
    className: 'gallery-wide',
    position: '50% 55%',
  },
  {
    src: playful,
    title: 'Love in every little detail',
    alt: 'Rizki dan Salsabilla berpose ceria mengenakan kacamata hitam',
    position: '50% 35%',
  },
  {
    src: forever,
    title: 'A promise, forever',
    alt: 'Rizki dan Salsabilla duduk bersandar bersama di studio',
    position: '50% 40%',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  function openPhoto(event, photo) {
    event.currentTarget.focus({ preventScroll: true });
    setSelected(photo);
  }

  return (
    <section id="gallery" className="gallery-section section-space">
      <div className="gallery-heading fade-in-section">
        <div>
          <p className="eyebrow">LITTLE THINGS, LOTS OF LOVE</p>
          <h2>
            Nuansa hari <em>bahagia.</em>
          </h2>
        </div>
        <p>
          Sentuhan sederhana untuk sebuah
          <br />
          perayaan yang penuh makna.
        </p>
      </div>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <button
            type="button"
            className={`gallery-photo fade-in-section ${photo.className || ''}`}
            key={photo.src}
            onClick={(event) => openPhoto(event, photo)}
            aria-label={`Perbesar: ${photo.alt}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              width="1000"
              height="1500"
              style={{ objectPosition: photo.position }}
            />
            <span className="gallery-overlay">
              <span>{photo.title}</span>
              <Icon name="expand" />
            </span>
          </button>
        ))}
      </div>
      {selected && <Lightbox photo={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
