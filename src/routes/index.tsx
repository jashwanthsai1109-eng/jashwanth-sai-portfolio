import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  About,
  Education,
  Footer,
  GitHubSection,
  Hero,
  Interests,
  Learning,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";
import { Contact } from "@/components/portfolio/Contact";

const title = "Jashwanth Sai | Aspiring Software Engineer & Full-Stack Developer";
const description =
  "Portfolio of Jashwanth Sai, an aspiring software engineer and full-stack developer focused on responsive web development, Python, and modern technologies.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jashwanth Sai",
          jobTitle: "Aspiring Software Engineer & Full-Stack Developer",
          address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
          alumniOf: "Yenepoya NIAT, Bengaluru",
          sameAs: ["https://github.com/jashwanthsai1109-eng"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubSection />
        <Education />
        <Learning />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
