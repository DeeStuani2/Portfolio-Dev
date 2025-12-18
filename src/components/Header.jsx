import React from 'react';
import { socials } from '../data/content';

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  return (
    <header className="nav">
      <div className="nav__brand">Stuani · Frontend - Fullstack</div>
      <nav className="nav__links">
        {links.map((link) => (
          <a key={link.href} className="pill" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="pill" href={socials.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </header>
  );
}
