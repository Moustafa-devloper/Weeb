import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; setRequestLocale(locale);
  const t = await getTranslations("Projects"); const ar = locale === "ar";
  return <main className="container" style={{ paddingBlock: 64 }}>
    <Link href="/" style={{ color: "#c4b5fd", display: "inline-flex", gap: 8, alignItems: "center" }}>{ar ? <ArrowRight size={16}/> : <ArrowLeft size={16}/>} {t("back")}</Link>
    <p style={{ color: "#a78bfa", marginTop: 58 }}>{t("eyebrow")}</p><h1 style={{ fontSize: "clamp(42px, 8vw, 76px)", margin: "0 0 16px", letterSpacing: "-.05em" }}>{t("title")}</h1><p style={{ color: "var(--muted)", maxWidth: 600, lineHeight: 1.8 }}>{t("description")}</p>
    <div className="projects-grid" style={{ marginTop: 42 }}>{projects.map((p, i) => <article key={p.slug} className="glass" style={{ padding: 28, borderRadius: 20 }}><span style={{ color: "#a78bfa" }}>0{i+1} / {p.technologies.join(" · ")}</span><h2 style={{ marginTop: 34 }}>{ar ? p.titleAr : p.titleEn}</h2><p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{ar ? p.summaryAr : p.summaryEn}</p></article>)}</div>
  </main>;
}
