import React from 'react';
import { skills } from '../data/content';

export function Skills() {
  return (
    <section className="section" id="habilidades">
      <div className="section__header">
        <h2 className="section__title">Habilidades</h2>
        <p className="section__subtitle">Front-end, integração e boas práticas</p>
      </div>
      <div className="grid grid--two">
        <div className="card">
          <p className="muted">Stack e ferramentas</p>
          <ul className="list">
            {skills.stack.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <p className="muted">Back-end e colaboração</p>
          <ul className="list">
            {skills.backend.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="divider" />
          <p className="muted">Práticas</p>
          <ul className="list">
            {skills.practices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
