import React from 'react';
import { experiences } from '../data/content';

export function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="section__header">
        <h2 className="section__title">Experiência</h2>
        <p className="section__subtitle">Projetos reais com prazos e entregas</p>
      </div>
      <div className="grid">
        {experiences.map((exp) => (
          <div key={exp.title} className="card experience">
            <div className="experience__head">
              <div>
                <p className="muted">{exp.company}</p>
                <h3 className="experience__title">{exp.title}</h3>
              </div>
              <span className="badge">{exp.period}</span>
            </div>
            <ul className="list">
              {exp.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="cta-row">
              {exp.tech.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
