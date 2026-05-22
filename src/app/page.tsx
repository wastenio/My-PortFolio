import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Image from "next/image";
import { certifications, education, experiences, profile, projects, siteBasePath, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(16, 32, 51, 0.92), rgba(15, 118, 110, 0.82)), url("${siteBasePath}/assets/img/background.svg")`,
        }}
      >
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <MapPin size={16} aria-hidden />
              {profile.location}
            </span>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="headline">{profile.headline}</p>
            <div className="hero-metrics" aria-label="Destaques profissionais">
              {profile.highlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
            <div className="hero-actions" aria-label="Links principais">
              <a className="button primary" href="#projetos">
                <Code2 size={18} aria-hidden />
                Ver projetos
              </a>
              <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} aria-hidden />
                LinkedIn
              </a>
              <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={20} aria-hidden />
              </a>
            </div>
          </div>

          <div className="profile-panel">
            <Image src={profile.photo} alt={profile.name} width={360} height={360} priority />
            <div>
              <strong>Disponível para projetos e oportunidades</strong>
              <span>Backend, APIs REST, integrações, sistemas corporativos e aplicações full stack.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="section-kicker">Sobre</span>
            <h2>Da operação ao código, com visão prática de produto.</h2>
          </div>
          <p>{profile.summary}</p>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Tecnologias</span>
            <h2>Stack organizada por atuação</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projetos">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Projetos</span>
            <h2>Projetos em destaque</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span>{project.status}</span>
                  <Code2 size={18} aria-hidden />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Deploy <ArrowUpRight size={16} aria-hidden />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      Código <Github size={16} aria-hidden />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container two-columns">
          <div>
            <div className="section-heading">
              <span className="section-kicker">Experiência</span>
              <h2>Trajetória profissional</h2>
            </div>
            <div className="timeline">
              {experiences.map((experience) => (
                <article className="timeline-item" key={`${experience.role}-${experience.company}`}>
                  <BriefcaseBusiness size={18} aria-hidden />
                  <div>
                    <h3>{experience.role}</h3>
                    <span>
                      {experience.company} · {experience.period}
                    </span>
                    <p>{experience.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="education-card">
            <span className="section-kicker">Formação</span>
            {education.map((item) => (
              <div key={`${item.institution}-${item.course}`}>
                <h3>{item.course}</h3>
                <p>{item.institution}</p>
                <span>{item.period}</span>
              </div>
            ))}
            <div className="certifications">
              <h3>Certificações e cursos</h3>
              <ul>
                {certifications.map((item) => (
                  <li key={item.title}>
                    <Award size={16} aria-hidden />
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.issuer}</span>
                      {item.credentialId && <small>ID: {item.credentialId}</small>}
                      {item.validUntil && <small>Válido até: {item.validUntil}</small>}
                      {item.fileUrl && (
                        <a href={item.fileUrl} target="_blank" rel="noreferrer">
                          Abrir certificado <FileText size={14} aria-hidden />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-card">
          <div>
            <span className="section-kicker">Contato</span>
            <h2>Vamos conversar sobre uma oportunidade ou projeto?</h2>
          </div>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden />
              Enviar email
            </a>
            <a className="button" href={`tel:${profile.phone}`}>
              <Phone size={18} aria-hidden />
              Ligar
            </a>
            <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Send size={20} aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
