import React, { useEffect, useMemo, useState } from 'react';
import { projects } from '../data/content';

function ProjectCarousel({ images }) {
  const safeImages = useMemo(() => (images && images.length ? images : ['/projects/placeholder.svg']), [images]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeImages.length);
    }, 4200);
    return () => clearInterval(id);
  }, [safeImages.length]);

  const handleSelect = (idx) => setIndex(idx);

  return (
    <div className="carousel">
      <div className="carousel__frame">
        <img src={safeImages[index]} alt={`Slide ${index + 1}`} />
        <div className="carousel__indicator">
          {safeImages.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'dot--active' : ''}`}
              onClick={() => handleSelect(i)}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="section__header">
        <h2 className="section__title">Projetos</h2>
        <p className="section__subtitle">Cases com React, TypeScript e Sass</p>
      </div>
      <div className="grid">
        {projects.map((project) => (
          <article key={project.name} className="card project">
            <div className="project__header">
              <div>
                <p className="muted">{project.company}</p>
                <h3 className="project__title">{project.name}</h3>
              </div>
              <a className="badge" href={project.link} target="_blank" rel="noreferrer">
                Ver detalhes
              </a>
            </div>
            <p className="muted">{project.description}</p>
            <div className="cta-row">
              {project.tags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
            <ProjectCarousel images={project.images} />
          </article>
        ))}
      </div>
    </section>
  );
}
