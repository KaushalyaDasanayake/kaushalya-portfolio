"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  articles,
  experience,
  services,
  navigation,
  personalInfo,
  projects,
  skillGroups,
  socialLinks,
} from "@/data/portfolio";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-zinc-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function Timeline({ items }: { items: typeof experience }) {
  return (
    <ol className="relative space-y-8 border-l border-white/10 pl-6">
      {items.map((item) => (
        <li
          key={`${item.company}-${item.role}-${item.period}`}
          className="relative"
        >
          <span className="absolute -left-[1.9rem] top-2 h-3.5 w-3.5 rounded-full border border-cyan-400 bg-cyan-400/20" />
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_rgba(52,211,153,0.08)] backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-white">{item.role}</p>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  {item.company}
                </p>
              </div>
              <p className="text-sm text-zinc-400">{item.period}</p>
            </div>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {item.summary}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            {item.technologies && (
              <div className="mt-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050816] text-zinc-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <Link href="#top" className="flex items-center gap-3">
            <Image
              src="/images/avatar.png"
              alt="Kaushalya Rathnayake avatar"
              width={42}
              height={42}
              priority
              sizes="42px"
              className="rounded-full border border-white/10"
            />
            <span className="sr-only">Home</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-zinc-300 md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
          </button>
        </nav>

        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-[#050816] px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-300 transition hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </header>

      <main id="main-content">
        <section id="top" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.15),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(167,139,250,0.16),_transparent_25%)]" />
          <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
                {personalInfo.heroLabel}
              </p>
              <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl">
                {personalInfo.heroHeading}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                {personalInfo.heroDescription}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#projects"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
                >
                  View My Work
                </Link>
                <Link
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  GitHub
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_120px_rgba(34,211,238,0.12)] backdrop-blur"
            >
              <div className="rounded-[1.5rem] border border-white/10 bg-[#060b1d] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  What I Build
                </p>

                <div className="mt-6 space-y-6">
                  {[
                    "AI-powered applications using NLP and LLM technologies",
                    "Fast, scalable backend APIs with Python and FastAPI",
                    "Modern full-stack web applications with React and Next.js",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      <p className="text-sm leading-7 text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(255,255,255,0.03)] backdrop-blur lg:grid-cols-[1fr_0.9fr] lg:p-12"
          >
            <SectionHeading
              eyebrow="About"
              title="From product engineering to intelligent systems"
              description="The path from building robust full-stack products to engineering AI experiences has been a natural progression. I bring a strong product mindset to applied NLP work, with a focus on systems that are usable, measurable, and production-ready."
            />
            <div className="space-y-6 text-base leading-8 text-zinc-400">
              <p>{personalInfo.about}</p>
              <p>{personalInfo.availability}</p>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm text-cyan-200">
                I am especially interested in designing reliable pipelines
                around LLMs, embeddings, evaluation, and user-facing interfaces.
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <SectionHeading
              eyebrow="Experience"
              title="Building reliable software across frontend, backend, and infrastructure"
              description="Over 4 years of experience delivering scalable web applications, backend services, APIs, and production-ready software systems."
            />
            <Timeline items={experience} />
          </motion.div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <SectionHeading
              eyebrow="Featured Projects"
              title="Selected work spanning applied NLP and AI product engineering"
              description="Each project card is driven by editable content so the portfolio stays easy to update."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.03)] backdrop-blur"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#0a1024]">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    {project.featured ? (
                      <span className="absolute left-4 top-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-200">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.githubUrl ? (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                        >
                          GitHub ↗
                        </Link>
                      ) : null}
                      {project.liveUrl ? (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-white transition hover:text-cyan-200"
                        >
                          Live Preview ↗
                        </Link>
                      ) : null}
                      {project.apiDocsUrl ? (
                        <Link
                          href={project.apiDocsUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-violet-300 transition hover:text-violet-200"
                        >
                          API Docs ↗
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="skills"
          className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(255,255,255,0.03)] backdrop-blur lg:p-12"
          >
            <SectionHeading
              eyebrow="Technical Skills"
              title="A blend of product engineering depth and AI-native execution"
              description="The stack below reflects the systems I build and the spaces I actively explore."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-[#090f20] p-6"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white/8 px-3 py-1 text-sm text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <SectionHeading
              eyebrow="Services"
              title="How I can help bring your ideas to life"
              description="From modern web applications to backend APIs and AI-powered tools, I build reliable solutions tailored to your project needs."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                    {service.number}
                  </p>

                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="articles"
          className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <SectionHeading
              eyebrow="Technical Writing"
              title="Lessons from building software and AI systems"
              description="Practical insights, implementation challenges, and lessons from my hands-on work in full-stack development, machine learning, NLP, and LLM applications."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.title}
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                    {article.readTime}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {article.description}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
                    Read article ↗
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="https://kaushalyadasanayake.medium.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                View all articles on Medium ↗
              </Link>
            </div>
          </motion.div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:px-8 lg:px-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="w-full min-w-0 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/5 to-violet-400/10 p-6 shadow-[0_0_90px_rgba(34,211,238,0.12)] sm:p-8 lg:p-12"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              <div className="min-w-0">
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
                  Let&apos;s Work Together
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Have a project in mind? Let&apos;s build it.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">
                  I&apos;m available for freelance projects involving full-stack
                  development, backend APIs, Python, and AI-powered
                  applications. Tell me about your idea, and let&apos;s discuss
                  how I can help.
                </p>
              </div>
              <div className="flex min-w-0 flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-[#060b1d] p-4 sm:p-6">
                <Link
                  href={`mailto:${socialLinks.email}`}
                  className="min-w-0 break-all text-lg font-medium text-white transition hover:text-cyan-300"
                >
                  {socialLinks.email}
                </Link>
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="min-w-0 break-words text-lg font-medium text-white transition hover:text-cyan-300"
                >
                  LinkedIn
                </Link>
                <Link
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="min-w-0 break-words text-lg font-medium text-white transition hover:text-cyan-300"
                >
                  GitHub
                </Link>
                {socialLinks.medium ? (
                  <Link
                    href={socialLinks.medium}
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-0 break-words text-lg font-medium text-white transition hover:text-cyan-300"
                  >
                    Medium
                  </Link>
                ) : null}
                <Link
                  href="#top"
                  className="mt-4 w-fit rounded-full border border-white/10 px-5 py-3 text-center text-sm font-medium text-zinc-300 transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  Back to top
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500 sm:px-8 lg:px-12">
        <p>
          © {new Date().getFullYear()} Kaushalya Rathnayake. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
