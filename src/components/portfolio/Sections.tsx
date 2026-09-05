import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  coreSkills,
  exploringSkills,
  interests,
  navLinks,
  profile,
  projects,
} from "./data";

const sectionClass = "border-t border-border py-20 sm:py-28";

export function Hero() {
  return (
    <section id="home" className="py-20 sm:py-28 lg:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-sm text-muted-foreground">Hello, I'm</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg text-foreground/85 sm:text-xl">{profile.title}</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              I build responsive web experiences and explore modern technologies to create
              practical solutions for real-world problems.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-subtle transition-transform hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {[
                ["Focus", "Full-stack development"],
                ["Based in", profile.location],
                ["Education", "B.Tech, Yenepoya NIAT"],
                ["Graduating", profile.graduating],
              ].map(([label, value]) => (
                <div key={label} className="bg-background p-5">
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className={sectionClass}>
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="About" title="About Me" />
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7">
          <Reveal>
            <p>
              I am a B.Tech student at Yenepoya NIAT, Bengaluru, with an interest in software
              development and modern web technologies.
            </p>
            <p className="mt-5">
              I enjoy building responsive digital experiences with a mobile-first mindset and
              continuously exploring new tools and technologies.
            </p>
            <p className="mt-5">
              My interests include full-stack development, Python, AI-assisted development, prompt
              engineering, custom image editing, and real-time tracking solutions.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className={sectionClass}>
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Skills & Technologies"
          description="An honest view of where my foundation is strong today, and what I am actively learning next."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Core Skills
            </h3>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {coreSkills.map((skill, i) => (
                <Reveal as="li" key={skill.name} delay={i * 60}>
                  <div className="flex items-baseline justify-between gap-6 py-5">
                    <div>
                      <p className="text-lg font-medium tracking-tight">{skill.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{skill.note}</p>
                    </div>
                    <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-accent">
                      Strong foundation
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Currently Exploring
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {exploringSkills.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-surface-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              These are technologies I am learning through projects and practice, not yet areas I
              would claim expertise in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className={sectionClass}>
      <div className="container-page">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          description="Selected work in progress. Each entry will be updated with details, links, and outcomes as projects ship."
        />

        <div className="mt-14 divide-y divide-border border-y border-border">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.number} delay={i * 80}>
              <div className="group grid gap-6 py-10 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-2">
                  <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-accent">
                    {project.number}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-5">
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                      >
                        View Project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-sm text-muted-foreground">Live demo coming soon</span>
                    )}
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                      >
                        GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GitHubSection() {
  return (
    <section className={sectionClass}>
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-lg border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-lg">
              <h2 className="text-2xl font-semibold tracking-tight">Open Source & Code</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Experiments, coursework, and project repositories live on my GitHub profile.
              </p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Visit GitHub Profile
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className={sectionClass}>
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Background" title="Education" />
        </div>
        <div className="lg:col-span-7">
          <Reveal>
            <ol className="relative border-l border-border pl-6">
              <li>
                <span
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Expected graduation {profile.graduating}
                </p>
                <h3 className="mt-2 text-xl font-medium tracking-tight">B.Tech</h3>
                <p className="mt-1 text-sm text-muted-foreground">Yenepoya NIAT, Bengaluru</p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                  Currently building my foundation in computer science, software development, and
                  modern technologies.
                </p>
              </li>
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Learning() {
  return (
    <section className={sectionClass}>
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Growth" title="Learning & Experience" />
        </div>
        <div className="lg:col-span-7">
          <Reveal>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-medium tracking-tight">Bootcamp Participant</h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                Participated in technical learning and development programs focused on improving
                practical programming and software development skills.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Interests() {
  return (
    <section className={sectionClass}>
      <div className="container-page">
        <SectionHeading eyebrow="Focus" title="What I'm Exploring" />
        <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 50}>
              <div className="border-t border-border pt-5">
                <h3 className="text-base font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const footerLinks = navLinks.filter((l) =>
    ["Home", "About", "Projects", "Contact"].includes(l.label),
  );

  return (
    <footer className="border-t border-border py-12">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Designed and built with attention to detail. © {year}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-5">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
