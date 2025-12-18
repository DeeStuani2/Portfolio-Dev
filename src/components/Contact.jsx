import React from 'react';
import { contact, socials } from '../data/content';

export function Contact() {
  return (
    <section className="section" id="contato">
      <div className="section__header">
        <h2 className="section__title">Contato</h2>
        <p className="section__subtitle">Vamos conversar sobre oportunidades</p>
      </div>
      <div className="grid grid--two">
        <div className="card">
          <p className="muted">{contact.headline}</p>
          <p>{contact.description}</p>
          <div className="cta-row">
            <a className="btn" href={`mailto:${socials.email}`}>
              Enviar e-mail
            </a>
            <a className="btn btn--ghost" href={socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn--ghost" href={socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="card">
          <p className="muted">Contatos diretos</p>
          <p>E-mail: {socials.email}</p>
          <p>Telefone: {contact.phone}</p>
          <p>Recado: {contact.altPhone}</p>
        </div>
      </div>
    </section>
  );
}
