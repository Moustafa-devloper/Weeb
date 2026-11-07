import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowDown, ArrowUpLeft, ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";
import { projects } from "@/lib/projects";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const isArabic = locale === "ar";
  const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight;
  return <main>
    <header className="container" style={{ height: 88, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Link href="/" style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-.04em" }}>moustfa<span className="gradient-text">.</span></Link>
      <nav aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"} style={{ display: "flex", gap: 24, alignItems: "center", fontSize: 14, color: "var(--muted)" }}>
        <Link href="/about">{t("about")}</Link><Link href="/projects">{t("projects")}</Link>
        <Link href={"/"} locale={isArabic ? "en" : "ar"} aria-label={isArabic ? "Switch to English" : "التبديل للعربية"} className="glass" style={{ padding: "8px 12px", borderRadius: 999, color: "var(--foreground)" }}>{isArabic ? "EN" : "عربي"}</Link>
      </nav>
    </header>
    <section className="container" style={{ minHeight: "72vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingBlock: 76 }}>
      <div style={{ color: "#c4b5fd", fontSize: 14, marginBottom: 26, display: "flex", alignItems: "center", gap: 10 }}><Sparkles size={16}/>{t("eyebrow")}</div>
      <h1 style={{ fontSize: "clamp(48px, 9vw, 104px)", lineHeight: 1.04, letterSpacing: "-.065em", maxWidth: 950, margin: 0 }}>{t("headline")} <span className="gradient-text">{t("highlight")}</span></h1>
      <p style={{ maxWidth: 610, fontSize: 18, lineHeight: 1.9, color: "var(--muted)", marginTop: 28 }}>{t("intro")}</p>
      <div style={{ display: "flex", gap: 14, marginTop: 20, flexWrap: "wrap" }}>
        <Link href="/projects" style={{ background: "#c4b5fd", color: "#101018", padding: "14px 20px", borderRadius: 12, fontWeight: 700, display: "inline-flex", gap: 10, alignItems: "center" }}>{t("cta")} <Arrow size={17}/></Link>
        <a href="mailto:hello@moustfa.dev" className="glass" style={{ padding: "14px 20px", borderRadius: 12 }}>{t("contact")}</a>
      </div>
      <div style={{ marginTop: 70, display: "flex", alignItems: "center", gap: 10, color: "#71717a", fontSize: 13 }}><ArrowDown size={15}/>{t("scroll")}</div>
    </section>
    <section className="container" style={{ paddingBlock: 44 }}>
      <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 24, gap: 20 }}><div><p style={{ color: "#a78bfa", fontSize: 13 }}>{t("selected")}</p><h2 style={{ fontSize: 34, margin: 0 }}>{t("work")}</h2></div><Link href="/projects" style={{ color: "#c4b5fd", display: "flex", alignItems: "center", gap: 8 }}>{t("allProjects")} <Arrow size={16}/></Link></div>
      <div className="projects-grid">{projects.slice(0, 3).map((project, index) => <article key={project.slug} className="glass" style={{ borderRadius: 20, padding: 26, minHeight: 220 }}><div style={{ display: "flex", justifyContent: "space-between", color: "#a78bfa" }}><span>0{index + 1}</span><Code2 size={18}/></div><h3 style={{ fontSize: 22, marginTop: 34 }}>{isArabic ? project.titleAr : project.titleEn}</h3><p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{isArabic ? project.summaryAr : project.summaryEn}</p><div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>{project.technologies.map((tech) => <span key={tech} style={{ border: "1px solid #ffffff18", borderRadius: 999, padding: "5px 10px", fontSize: 12, color: "#d4d4d8" }}>{tech}</span>)}</div></article>)}</div>
    </section>
    <section className="container" style={{ paddingBlock: 90 }}><div className="glass" style={{ borderRadius: 24, padding: "clamp(26px, 6vw, 58px)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}><div><Layers3 color="#c4b5fd"/><h2 style={{ fontSize: 32, marginBottom: 8 }}>{t("closing")}</h2><p style={{ color: "var(--muted)" }}>{t("closingText")}</p></div><a href="mailto:hello@moustfa.dev" style={{ background: "#c4b5fd", color: "#101018", padding: "14px 20px", borderRadius: 12, fontWeight: 700 }}>{t("contact")}</a></div></section>
    <footer className="container" style={{ paddingBlock: 25, borderTop: "1px solid #ffffff12", color: "#71717a", fontSize: 13, display: "flex", justifyContent: "space-between" }}><span>© {new Date().getFullYear()} Moustfa</span><span>{t("footer")}</span></footer>
  </main>;
}
