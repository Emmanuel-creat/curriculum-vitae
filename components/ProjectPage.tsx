"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { projectContent, projectOrder, ProjectSlug } from "@/lib/projects";

type Props = { slug: ProjectSlug; heroImage?: string };

export default function ProjectPage({ slug, heroImage }: Props) {
  const { t, lang } = useI18n();
  const data = projectContent[slug][lang];
  const meta = projectOrder.find((p) => p.slug === slug)!;
  const idx = projectOrder.findIndex((p) => p.slug === slug);
  const prev = projectOrder[(idx - 1 + projectOrder.length) % projectOrder.length];
  const next = projectOrder[(idx + 1) % projectOrder.length];

  return (
    <article className="pt-32 pb-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.12] blur-3xl -translate-y-1/3 translate-x-1/4"
          style={{ background: meta.accent }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-chrome-400 hover:text-chrome-100 transition mb-8"
          >
            ← {t("project.back")}
          </Link>

          <div className={`grid gap-10 ${heroImage ? "lg:grid-cols-[1.25fr_1fr] items-center" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="tag"
                  style={{
                    color: meta.accent,
                    borderColor: `${meta.accent}33`,
                    background: `${meta.accent}0d`,
                  }}
                >
                  <span className="dot" style={{ color: meta.accent }} />
                  {meta.tag}
                </span>
                <span className="text-xs font-mono text-chrome-500">
                  {String(meta.order).padStart(2, "0")} / 07
                </span>
              </div>

              <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[0.95] tracking-tight">
                <span className="chrome-text">{data.title}</span>
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-chrome-300 max-w-3xl">
                {data.subtitle}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl">
                <Meta label={t("project.period")} value={data.period} />
                <Meta label={t("project.role")} value={data.role} />
                <Meta label={t("project.status")} value={data.status} />
              </div>
            </motion.div>

            {heroImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative"
              >
                <div
                  className="absolute -inset-6 blur-3xl opacity-30"
                  style={{ background: meta.accent }}
                />
                <div className="brick overflow-hidden aspect-[4/5] relative">
                  <img
                    src={heroImage}
                    alt={data.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 mt-16 space-y-16">
        {data.pitch && (
          <Section title={t("project.pitch")} accent={meta.accent}>
            <p className="text-2xl md:text-3xl font-display leading-snug text-chrome-50">
              « {data.pitch} »
            </p>
          </Section>
        )}

        {data.problem && (
          <Section title={t("project.problem")} accent={meta.accent}>
            <p className="text-lg text-chrome-200 leading-relaxed">{data.problem}</p>
          </Section>
        )}

        {data.contribution.length > 0 && (
          <Section title={t("project.contribution")} accent={meta.accent}>
            <ul className="space-y-3">
              {data.contribution.map((c, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-chrome-200 text-base md:text-lg leading-relaxed"
                >
                  <span
                    className="mt-2 flex-shrink-0 w-2 h-2 rounded-full"
                    style={{ background: meta.accent }}
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {data.results.length > 0 && (
          <Section title={t("project.results")} accent={meta.accent}>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.results.map((r, i) => (
                <div key={i} className="brick p-5 text-chrome-200 text-sm leading-relaxed">
                  <div
                    className="text-xs font-mono mb-2"
                    style={{ color: meta.accent }}
                  >
                    #{String(i + 1).padStart(2, "0")}
                  </div>
                  {r}
                </div>
              ))}
            </div>
          </Section>
        )}

        {data.stack.length > 0 && (
          <Section title={t("project.stack")} accent={meta.accent}>
            <div className="flex flex-wrap gap-2">
              {data.stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </Section>
        )}

        {data.links.length > 0 && (
          <Section title={t("project.links")} accent={meta.accent}>
            <div className="flex flex-wrap gap-3">
              {data.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="brick brick-hover px-5 py-3 text-sm text-chrome-100 inline-flex items-center gap-2"
                >
                  {l.label}
                  <span className="text-chrome-400">↗</span>
                </a>
              ))}
            </div>
          </Section>
        )}
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-24 pt-10 border-t border-white/5">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href={`/projects/${prev.slug}`}
            className="brick brick-hover p-5 group"
          >
            <div className="text-xs uppercase tracking-widest text-chrome-500">
              ← {t("project.prev")}
            </div>
            <div className="font-display text-lg text-chrome-50 mt-1 capitalize">
              {prev.slug.replace(/-/g, " ")}
            </div>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="brick brick-hover p-5 text-right group"
          >
            <div className="text-xs uppercase tracking-widest text-chrome-500">
              {t("project.next")} →
            </div>
            <div className="font-display text-lg text-chrome-50 mt-1 capitalize">
              {next.slug.replace(/-/g, " ")}
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="brick p-4">
      <div className="text-[10px] uppercase tracking-widest text-chrome-500">
        {label}
      </div>
      <div className="text-sm text-chrome-100 mt-1 leading-snug">{value}</div>
    </div>
  );
}

function Section({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-6 h-px"
          style={{ background: accent }}
        />
        <h2 className="text-xs uppercase tracking-[0.3em] font-mono" style={{ color: accent }}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
