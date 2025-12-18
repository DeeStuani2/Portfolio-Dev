import React from 'react';
import { about } from '../data/content';

export function About() {
  return (
    <section className="section" id="sobre">
      <div className="section__header">
        <h2 className="section__title">Sobre mim</h2>
        <p className="section__subtitle">Objetivo: Desenvolvedor Frontend</p>
      </div>
      <div className="grid grid--two">
        <div className="card">
          {about.summary.map((paragraph, index) => (
            <p key={index} className="muted">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="card">
          <p className="muted">Formação acadêmica</p>
          <p className="hero__meta-title">{about.academic.course}</p>
          <p>{about.academic.institution}</p>
          <p className="muted">{about.academic.conclusion}</p>
        </div>
      </div>
    </section>
  );
}
