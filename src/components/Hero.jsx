import React from 'react';
import { hero, socials } from '../data/content';

export function Hero() {
  const photo = hero.photo || '/profile-placeholder.svg';

  return (
    <section className="section hero" id="topo">
      <div className="hero__intro">
        <p className="badge">Disponível · Remoto ou Aracaju/SE</p>
        <h1 className="hero__title">
          {hero.role}
          <span className="hero__accent"> · {hero.name}</span>
        </h1>
        <p className="hero__headline">{hero.headline}</p>
        <p className="muted">{hero.objective}</p>
        <div className="cta-row">
          <a className="btn" href={`mailto:${socials.email}`}>
            Fale por e-mail
          </a>
          <a className="btn btn--ghost" href={socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn--ghost" href={socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="hero__meta">
        <div className="hero__photo">
          <img src={photo} alt={`Foto de ${hero.name}`} />
        </div>
        <div className="hero__stats">
          <div className="card">
            <p className="muted">Base</p>
            <p className="hero__meta-title">{hero.location}</p>
            <div className="divider" />
            <p className="muted">Contato direto</p>
            <a className="badge" href={`mailto:${socials.email}`}>
              {socials.email}
            </a>
          </div>
          <div className="card">
            <p className="muted">Stack atual</p>
            <p className="hero__meta-title">React · TypeScript · Sass · Python (FastAPI)</p>
            <div className="divider" />
            <p className="muted">Disponibilidade</p>
            <p className="hero__meta-title">Imediata</p>
          </div>
        </div>
      </div>
    </section>
  );
}
