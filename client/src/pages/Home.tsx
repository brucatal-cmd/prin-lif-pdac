/*
 * DESIGN PHILOSOPHY: "Academic Elegance" – Contemporary Scientific Journal
 * Color: Cream (#FDFAF5) / Forest Green (#1A4731) / Ochre (#C17D11) / Slate (#374151)
 * Typography: Cormorant Garamond (headings) / Lora (body) / Outfit (UI labels)
 * Layout: Editorial, numbered sections, left-border accents on cards
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { ImagePlus, Camera } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const goals = [
  {
    num: "01",
    title: "Bile Acids as Endogenous Antagonists of LIF/LIFR",
    body: "We aimed to broaden the understanding of the role of bile acids as endogenous antagonists of the LIF/LIFR axis, focusing on their effects in pancreatic and gastrointestinal cancers. Secondary bile acids, such as deoxycholic acid (DCA) and lithocholic acid (LCA), produced by the metabolism of the gut microbiota, act as endogenous antagonists of LIFRs, inhibiting LIF-mediated pro-oncogenic signaling on MIA PaCa-2 and PANC-1 cells.",
    color: "#1A4731",
  },
  {
    num: "02",
    title: "Hybrid Molecules with Dual FXR/LIFR Activity",
    body: "We aimed at the discovery of a novel class of hybrid molecules endowed with dual activity toward FXR and the leukemia inhibitory factor receptor (LIFR). We focused on a class of potent nonsteroidal FXR agonists characterized by the isoxazole core, exploring the chemical space around this core. Compound 3a was the best FXR agonist and a LIFR antagonist – the first-in-class orally active hybrid molecule able to protect against the development of acute liver fibrosis and inflammation.",
    color: "#C17D11",
  },
  {
    num: "03",
    title: "New LIFR Inhibitors Against Liver Fibrosis",
    body: "We focused on the new class of molecules developed as LIFR Inhibitors (LRI), going in depth in their synthesis, molecular characterization and pharmacological profile as powerful tools against liver fibrosis. We investigated whether the LIF/LIFR axis and GPBAR1 action were dysregulated by this new class of synthesized compounds, harnessing the estradienone scaffold to develop dual GPBAR1 and LIFR modulators.",
    color: "#1A4731",
  },
  {
    num: "04",
    title: "LRI-310 Against Cholangitis",
    body: "We focused on the pharmacological profile of the compound LRI-310 as a powerful tool against Cholangitis. Primary Sclerosing Cholangitis (PSC) and Primary Biliary Cholangitis (PBC) are immune-mediated chronic cholestatic liver diseases characterized by progressive biliary inflammation and fibrosis. We investigated whether the LIF/LIFR axis is dysregulated in PSC and PBC and assessed the therapeutic potential of LRI-310 in a genetic model of PSC.",
    color: "#C17D11",
  },
  {
    num: "05",
    title: "Boswellia in Hepatic Fibrosis",
    body: "In parallel, we suggested the potential use of the plant Boswellia in hepatic fibrosis, since its extract exhibited a significant antagonistic activity on the interaction between leukemia inhibitory factor (LIF) and its receptor (LIFR). Exploration of Boswellia serrata triterpenes opened a new frontier in Leukemia Inhibitory Factor Receptor modulation.",
    color: "#1A4731",
  },
  {
    num: "06",
    title: "LIFR Inhibition in PDAC and Gastric Cancer",
    body: "Finally, we focused on LIFR inhibition, going deeper in the synthesis, in silico analysis, in vitro molecular characterization and pharmacological profile of the best inhibitors. LIFR antagonism was shown to reverse epithelial pro-CAF programs in pancreatic ductal adenocarcinoma. Tumor-derived LIF was also found to promote GDF15-driven cachexia and adverse outcomes in gastric cancer.",
    color: "#C17D11",
  },
];

const publications = [
  {
    authors: "Di Giorgio C, Morretta E, Lupia A, et al.",
    title: "Bile acids as endogenous antagonists of leukemia inhibitory factor receptor (LIFR) in pancreatic and gastrointestinal cancers.",
    journal: "Biochem Pharmacol.",
    year: "2024",
    doi: "10.1016/J.BCP.2024.116134",
    category: "bile-acids",
  },
  {
    authors: "Di Giorgio C, Bellini R, Lupia A, et al.",
    title: "The leukemia inhibitory factor regulates fibroblast growth factor receptor 4 transcription in gastric cancer.",
    journal: "Cell Oncol (Dordr).",
    year: "2024",
    doi: "10.1007/s13402-023-00893-8",
    category: "gastric",
  },
  {
    authors: "Rapacciuolo P, Finamore C, Giorgio CD, et al.",
    title: "Harnessing the isoxazole core to achieve hybrid LIFR-FXR modulation.",
    journal: "J Med Chem.",
    year: "2024",
    doi: "10.1021/acs.jmedchem.4c01651",
    category: "hybrid",
  },
  {
    authors: "De Gregorio R, Moraca F, Rapacciuolo P, et al.",
    title: "Harnessing the Estradienone Scaffold to Develop Dual GPBAR1 and LIFR Modulators for Liver Fibrosis.",
    journal: "J Med Chem.",
    year: "2025",
    doi: "10.1021/acs.jmedchem.5c00705",
    category: "liver",
  },
  {
    authors: "Di Giorgio C, Urbani G, Massa C, et al.",
    title: "Leukemia inhibitory factor promotes human cholangiopathies, and its inhibition improves cholestasis in Abcb4-/- mice.",
    journal: "Hepatol Commun.",
    year: "2025",
    doi: "10.1097/HC9.0000000000000779",
    category: "cholangitis",
  },
  {
    authors: "Finamore C, Festa C, Cammarota M, et al.",
    title: "Exploring Boswellia serrata Triterpenes: A New Frontier in Leukemia Inhibitory Factor Receptor Modulation.",
    journal: "ACS Omega.",
    year: "2025",
    doi: "10.1021/acsomega.5c03492",
    category: "natural",
  },
  {
    authors: "Giorgio CD, Sette MR, Sensini B, et al.",
    title: "LIFR antagonism reverses epithelial pro-CAF programs in pancreatic ductal adenocarcinoma.",
    journal: "Biochem Pharmacol.",
    year: "2026",
    doi: "10.1016/j.bcp.2026.117707",
    category: "pdac",
  },
  {
    authors: "Di Giorgio C, Natalizi N, Sette MR, et al.",
    title: "Tumor-Derived LIF Promotes GDF15-Driven Cachexia and Adverse Outcomes in Gastric Cancer.",
    journal: "Cells.",
    year: "2026",
    doi: "10.3390/cells15040355",
    category: "gastric",
  },
];

const categoryColors: Record<string, string> = {
  "bile-acids": "#1A4731",
  gastric: "#6B4226",
  hybrid: "#C17D11",
  liver: "#2563EB",
  cholangitis: "#7C3AED",
  natural: "#059669",
  pdac: "#DC2626",
};

const categoryLabels: Record<string, string> = {
  "bile-acids": "Bile Acids",
  gastric: "Gastric Cancer",
  hybrid: "Hybrid Molecules",
  liver: "Liver Fibrosis",
  cholangitis: "Cholangitis",
  natural: "Natural Products",
  pdac: "PDAC",
};

const disseminationEvents = [
  {
    year: "2024",
    type: "Oral",
    title: "Bile acids as endogenous antagonists of leukemia inhibitory factor receptor (LIFR) in gastric cancer: implications for therapeutic interventions.",
    venue: "Digestive Disease Week (DDW), 3–6 May 2024",
    authors: "Di Giorgio C. et al.",
  },
  {
    year: "2024",
    type: "Oral",
    title: "Harnessing the isoxazole core to achieve hybrid LIFR-FXR modulation.",
    venue: "SCI CAMPANIA: Il contributo dei giovani chimici in Campania",
    authors: "Rapacciuolo P. et al.",
  },
  {
    year: "2024",
    type: "Oral",
    title: "Drug repositioning: a valid strategy for the identification of a new LIFR antagonist.",
    venue: "SCI CAMPANIA: Il contributo dei giovani chimici in Campania",
    authors: "De Gregorio R. et al.",
  },
  {
    year: "2024",
    type: "Oral",
    title: "Exploring the chemical space for LIF/LIFR axis inhibition: from selective inhibitors to multitarget heterocyclic modulators.",
    venue: "XLVIII 'A. Corbella' International Summer School on Organic Synthesis",
    authors: "De Gregorio R. et al.",
  },
  {
    year: "2024",
    type: "Oral",
    title: "Nature: a promising arsenal to inspire the drug discovery from chronic inflammation to cancer.",
    venue: "NUCLEO-OMICS24, Naples, 30–31 October 2024",
    authors: "Sepe V. et al.",
  },
  {
    year: "2024",
    type: "Poster",
    title: "Targeting LIF/LIFR Signaling in cancer: from drug-repurposing to bile acids modulator.",
    venue: "International Symposium on Medicinal Chemistry, Rome, 1–5 September 2024",
    authors: "Moraca F. et al.",
  },
  {
    year: "2024",
    type: "Poster",
    title: "The potential of bile acids exploitation in drug discovery: from cancer to chronic inflammation.",
    venue: "Italian Chemical Society Congress 2024, Milan, 26–30 August 2024",
    authors: "Rapacciuolo P. et al.",
  },
  {
    year: "2024",
    type: "Oral",
    title: "Chemical synthesis and computational chemistry: a powerful combination for the identification of a new alternative approach to antitumoral therapy.",
    venue: "Italian Chemical Society Congress 2024, Milan, 26–30 August 2024",
    authors: "De Gregorio R. et al.",
  },
  {
    year: "2024",
    type: "Poster",
    title: "Exploring the chemical space for LIF/LIFR axis inhibition.",
    venue: "NUCLEO-OMICS24, Naples, 30–31 October 2024",
    authors: "De Gregorio R. et al.",
  },
  {
    year: "2024",
    type: "Poster",
    title: "Natural and semisynthetic bile acids as Leukemia Inhibitory Factor (LIF) receptor antagonists.",
    venue: "25th Conference on Isoprenoids, Naples, 18–20 September 2024",
    authors: "Finamore C. et al.",
  },
  {
    year: "2024",
    type: "Poster",
    title: "Bile acid derivatives as new chemotype of LIFR antagonists.",
    venue: "NUCLEO-OMICS24, Naples, 30–31 October 2024",
    authors: "Finamore C. et al.",
  },
  {
    year: "2025",
    type: "Poster & Oral",
    title: "Funnel Metadynamics-Driven Insights into Ligand-Protein Binding to inhibit the LIF/LIFR interaction.",
    venue: "CECAM Workshop 'Predicting and understanding drug-target binding kinetics via molecular simulations', Lausanne, 10-12 March 2025",
    authors: "Moraca F. et al.",
  },
];

const teamMembers = [
  {
    name: "Prof. Angela Zampella",
    role: "Principal Investigator – Unit 1",
    affiliation: "University of Naples Federico II",
    unit: "U1",
  },
  {
    name: "Prof. Alessandra Tosco",
    role: "Co-Investigator – Unit 2",
    affiliation: "University of Salerno",
    unit: "U2",
  },
  {
    name: "Prof. Stefano Fiorucci",
    role: "Co-Investigator – Unit 3",
    affiliation: "University of Perugia",
    unit: "U3",
  },
];

const participants = [
  "Bruno Catalanotti",
  "Claudia Finamore",
  "Federica Moraca",
  "Valentina Sepe",
  "Maria Chiara Monti",
  "Patrizia Ricci",
];

// ─── Image Placeholder Component ─────────────────────────────────────────────

function ImgPlaceholder({
  label,
  width = "100%",
  height = "220px",
  icon = "camera",
}: {
  label: string;
  width?: string;
  height?: string;
  icon?: "camera" | "molecule";
}) {
  return (
    <div
      className="img-placeholder rounded"
      style={{ width, height, minHeight: height }}
    >
      {icon === "camera" ? (
        <Camera size={28} className="text-[#C17D11] opacity-60" />
      ) : (
        <ImagePlus size={28} className="text-[#1A4731] opacity-60" />
      )}
      <span className="text-center px-4 text-[#7a8a7a]">{label}</span>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFAF5]">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#0a1f2e" }}>
        {/* Dark teal gradient background */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #071520 0%, #0d2a3a 40%, #0a2535 70%, #061218 100%)" }} />
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"%3E%3C/rect%3E%3C/svg%3E')", backgroundRepeat: "repeat", backgroundSize: "128px" }} />

        {/* Composed protein image — right side, full bleed */}
        <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031210343/aSR4eCDFQwQmknW2pPEsnU/hero-lifr-pdac-composition_30f402c4.png"
            alt="hLIFr molecular surface in tumor microenvironment"
            className="w-full h-full object-cover object-left"
          />
          {/* Gradient fade on left edge to blend with text area */}
          <div className="absolute inset-y-0 left-0 w-2/5" style={{ background: "linear-gradient(to right, #071520 0%, transparent 100%)" }} />
        </div>

        <div className="relative container mx-auto px-6 lg:px-10 max-w-7xl pt-28 pb-20">
          <div className="max-w-2xl">
            {/* PRIN badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
              style={{ fontFamily: "'Outfit', sans-serif", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#f0a830] animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#e8d5a3" }}>
                PRIN 2022 – MUR Funded Research
              </span>
            </div>

            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.08] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#f0ece4" }}
            >
              Targeting Leukaemia
              <br />
              <em className="font-light" style={{ color: "#f0a830" }}>Inhibitory Factor</em>
              <br />
              and Bile Acid Receptors
            </h1>

            <p
              className="text-lg leading-relaxed mb-10 max-w-xl"
              style={{ fontFamily: "'Lora', serif", color: "rgba(240,236,228,0.75)" }}
            >
              Synthetic small molecules as a new armamentarium in the treatment of
              <strong style={{ color: "#a8d8b0" }}> pancreatic ductal adenocarcinoma</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  document.getElementById("background")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 text-sm font-medium rounded transition-all"
                style={{ fontFamily: "'Outfit', sans-serif", background: "#2a7a4f", color: "#f0ece4" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#236641")}
                onMouseLeave={e => (e.currentTarget.style.background = "#2a7a4f")}
              >
                Explore the Project
              </button>
              <button
                onClick={() => {
                  document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 text-sm font-medium rounded transition-all"
                style={{ fontFamily: "'Outfit', sans-serif", border: "1px solid rgba(240,236,228,0.35)", color: "#f0ece4", background: "transparent" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                View Publications
              </button>
            </div>

            {/* Stats bar */}
            <div className="flex flex-wrap gap-8 mt-14 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              {[
                { value: "3", label: "Universities" },
                { value: "8", label: "Publications" },
                { value: "12+", label: "Conferences" },
                { value: "6", label: "Research Goals" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-3xl font-bold"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "#a8d8b0" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wider mt-0.5"
                    style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(240,236,228,0.5)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BACKGROUND ────────────────────────────────────────────────────── */}
      <SectionWrapper id="background" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Section label */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <span
                  className="section-number block"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "6rem", fontWeight: 300, color: "#e8e0d0", lineHeight: 1 }}
                >
                  01
                </span>
                <h2
                  className="text-3xl font-semibold text-[#1A4731] mt-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Background
                </h2>
                <div className="w-10 h-0.5 bg-[#C17D11] mt-3" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 space-y-6">
              <p
                className="text-base leading-relaxed text-[#374151]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Pancreatic ductal adenocarcinoma (PDAC) is set to become one of the leading causes of cancer death globally by 2030. PDAC is a multifactorial disease, influenced by multiple environmental factors, including excessive alcohol consumption, obesity, diabetes mellitus and chronic pancreatitis. Unfortunately, patients with PDAC have a poor prognosis, making it urgent to identify new molecular biomarkers and therapeutic targets.
              </p>
              <p
                className="text-base leading-relaxed text-[#374151]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Recently, <strong className="text-[#1A4731]">Leukaemia Inhibitory Factor (LIF)</strong> has been identified as one of the potential biomarkers associated with a poor prognosis in patients with PDAC and is also considered a potential target for pharmacological interventions. LIF is a pleiotropic cytokine that belongs to the interleukin (IL)-6 family, and is overexpressed in numerous solid tumors, including those of the pancreas and stomach, promoting the proliferation and invasiveness of tumor cells.
              </p>
              <p
                className="text-base leading-relaxed text-[#374151]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                In target tissues, LIF signaling is mediated by its binding to a heterodimeric receptor complex consisting of the <strong className="text-[#1A4731]">LIF receptor (LIFR)</strong> and the glycoprotein (gp) subunit 130 of the IL-6 receptor. To test our multidisciplinary platform, combining molecular docking, organic synthesis, biophysical and cellular investigations, we performed an in-silico screening of FDA-approved drugs, identifying <strong>mifepristone (RU-486)</strong> as a potential antagonist of LIFR.
              </p>

              {/* Key finding box */}
              <div className="accent-card bg-[#f5f0e8] py-4 pr-4 rounded-r">
                <p
                  className="text-sm font-medium text-[#1A4731] mb-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Key Finding
                </p>
                <p
                  className="text-base text-[#374151] leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  <strong>BAR502</strong>, a bile alcohol identified by our research group as a potent dual agonist of GPBAR1/FXR and recently in phase 1 clinical trials, has proved to be a good antagonist of the LIF/LIFR axis — opening the path to the systematic exploration of steroid-core compounds against this oncogenic signaling axis.
                </p>
              </div>

              {/* Idea box */}
              <div className="bg-[#1A4731]/5 border border-[#1A4731]/15 rounded p-6 mt-4">
                <h3
                  className="text-xl font-semibold text-[#1A4731] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  The Idea
                </h3>
                <p
                  className="text-base leading-relaxed text-[#374151]"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Driven by the promising results of mifepristone and BAR502, the idea was born to test steroid-core compounds already present in-house to evaluate their action on the LIF-LIFR axis and to expand our synthetic library by exploiting both known scaffolds and new scaffolds, paving the way for the investigation of the therapeutic potential of synthetic small molecules interacting with the LIF/LIFR axis in the tumor setting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── GOALS ─────────────────────────────────────────────────────────── */}
      <SectionWrapper id="goals" className="py-24 bg-[#FDFAF5]">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <span
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "6rem", fontWeight: 300, color: "#e8e0d0", lineHeight: 1 }}
                >
                  02
                </span>
                <h2
                  className="text-3xl font-semibold text-[#1A4731] mt-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Goals
                </h2>
                <div className="w-10 h-0.5 bg-[#C17D11] mt-3" />
                <p
                  className="text-sm text-[#6b7280] mt-4 leading-relaxed"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  The main aim is the analysis of the role of the LIF/LIFR axis and its inhibition in the context of multiple tumor and metabolic diseases.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.map((goal) => (
                <div
                  key={goal.num}
                  className="bg-white rounded border border-[#e8e0d0] p-6 hover:shadow-md transition-shadow duration-200"
                  style={{ borderLeft: `3px solid ${goal.color}` }}
                >
                  <div
                    className="text-4xl font-light mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: goal.color, opacity: 0.4 }}
                  >
                    {goal.num}
                  </div>
                  <h3
                    className="text-lg font-semibold text-[#1A4731] mb-3 leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {goal.title}
                  </h3>
                  <p
                    className="text-sm text-[#4b5563] leading-relaxed"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {goal.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── RESULTS / PUBLICATIONS ────────────────────────────────────────── */}
      <SectionWrapper id="results" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <span
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "6rem", fontWeight: 300, color: "#e8e0d0", lineHeight: 1 }}
                >
                  03
                </span>
                <h2
                  className="text-3xl font-semibold text-[#1A4731] mt-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Results &amp; Publications
                </h2>
                <div className="w-10 h-0.5 bg-[#C17D11] mt-3" />
                <p
                  className="text-sm text-[#6b7280] mt-4 leading-relaxed"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Peer-reviewed publications produced within the project.
                </p>

                {/* Legend */}
                <div className="mt-6 space-y-2">
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <div key={key} className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: categoryColors[key] }}
                      />
                      <span
                        className="text-xs text-[#6b7280]"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-8">
              {/* Molecule image placeholders */}
              <div>
                <h3
                  className="text-lg font-semibold text-[#1A4731] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Key Molecular Structures
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <ImgPlaceholder
                    label="Molecule image — add your image here"
                    height="200px"
                    icon="molecule"
                  />
                  <ImgPlaceholder
                    label="Molecule image — add your image here"
                    height="200px"
                    icon="molecule"
                  />
                  <ImgPlaceholder
                    label="Molecule image — add your image here"
                    height="200px"
                    icon="molecule"
                  />
                </div>
              </div>

              {/* Publications list */}
              <div className="space-y-4">
                {publications.map((pub, i) => (
                  <div
                    key={i}
                    className="bg-[#FDFAF5] rounded border border-[#e8e0d0] p-5 hover:shadow-sm transition-shadow duration-200 group"
                    style={{ borderLeft: `3px solid ${categoryColors[pub.category]}` }}
                  >
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm font-medium text-[#374151] mb-1"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          {pub.authors}
                        </p>
                        <p
                          className="text-base text-[#1A4731] font-medium leading-snug mb-2"
                          style={{ fontFamily: "'Lora', serif" }}
                        >
                          {pub.title}
                        </p>
                        <p
                          className="text-sm text-[#6b7280] italic mb-2"
                          style={{ fontFamily: "'Lora', serif" }}
                        >
                          {pub.journal} {pub.year}
                        </p>
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="doi-text text-[#C17D11] hover:underline"
                        >
                          DOI: {pub.doi}
                        </a>
                      </div>
                      <span
                        className="flex-shrink-0 text-xs px-2.5 py-1 rounded-full text-white font-medium"
                        style={{
                          backgroundColor: categoryColors[pub.category],
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        {categoryLabels[pub.category]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── TEAM ──────────────────────────────────────────────────────────── */}
      <SectionWrapper id="team" className="py-24 bg-[#FDFAF5]">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-3">
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "6rem", fontWeight: 300, color: "#e8e0d0", lineHeight: 1 }}
              >
                04
              </span>
              <h2
                className="text-3xl font-semibold text-[#1A4731] mt-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Research Team
              </h2>
              <div className="w-10 h-0.5 bg-[#C17D11] mt-3" />
            </div>

            <div className="lg:col-span-9">
              {/* Coordinators */}
              <h3
                className="text-sm font-semibold uppercase tracking-widest text-[#C17D11] mb-6"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Coordinators
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="bg-white rounded border border-[#e8e0d0] p-6 hover:shadow-md transition-shadow"
                  >
                    <div
                      className="w-10 h-10 rounded-full bg-[#1A4731] flex items-center justify-center text-white font-bold text-sm mb-4"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {member.unit}
                    </div>
                    <h4
                      className="text-lg font-semibold text-[#1A4731] mb-1 leading-tight"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {member.name}
                    </h4>
                    <p
                      className="text-xs text-[#C17D11] font-medium mb-2 uppercase tracking-wide"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {member.role}
                    </p>
                    <p
                      className="text-sm text-[#6b7280]"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {member.affiliation}
                    </p>
                  </div>
                ))}
              </div>

              {/* Participants */}
              <h3
                className="text-sm font-semibold uppercase tracking-widest text-[#C17D11] mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Participants
              </h3>
              <div className="flex flex-wrap gap-3">
                {participants.map((p) => (
                  <span
                    key={p}
                    className="bg-white border border-[#e8e0d0] rounded-full px-4 py-2 text-sm text-[#374151]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* Team image placeholder */}
              <div
                className="bg-[#1A4731]/5 border border-[#1A4731]/15 rounded p-6 mt-10"
              >
                <p
                  className="text-sm font-semibold text-[#1A4731] mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Project Meetings
                </p>
                <p
                  className="text-sm text-[#4b5563] leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  A meeting between the 3 Units of this project took place at the Department of Pharmacy of the University of Naples Federico II on <strong>23 April 2024</strong> and at the Department of UNIPG on <strong>23 September 2024</strong> for an appropriate dissemination of results. Several meetings between the 3 Units also took place online on the Teams platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── DISSEMINATION ─────────────────────────────────────────────────── */}
      <SectionWrapper id="dissemination" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <span
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "6rem", fontWeight: 300, color: "#e8e0d0", lineHeight: 1 }}
                >
                  05
                </span>
                <h2
                  className="text-3xl font-semibold text-[#1A4731] mt-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Dissemination
                </h2>
                <div className="w-10 h-0.5 bg-[#C17D11] mt-3" />
                <p
                  className="text-sm text-[#6b7280] mt-4 leading-relaxed"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Scientific dissemination through poster presentations, oral speeches and congress proceedings at national and international events.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-10">
              {/* Congress photo placeholders */}
              <div>
                <h3
                  className="text-lg font-semibold text-[#1A4731] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Congress Gallery
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  <ImgPlaceholder
                    label="Congress photo"
                    height="160px"
                    icon="camera"
                  />
                  <ImgPlaceholder
                    label="Congress photo"
                    height="160px"
                    icon="camera"
                  />
                  <ImgPlaceholder
                    label="Congress photo"
                    height="160px"
                    icon="camera"
                  />
                  <ImgPlaceholder
                    label="Congress photo"
                    height="160px"
                    icon="camera"
                  />
                </div>
              </div>

              {/* Events list grouped by year */}
              {["2025", "2024"].map((year) => {
                const yearEvents = disseminationEvents.filter((e) => e.year === year);
                return (
                  <div key={year}>
                    <div className="flex items-center gap-4 mb-5">
                      <span
                        className="text-4xl font-light text-[#C17D11]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {year}
                      </span>
                      <div className="flex-1 h-px bg-[#e8e0d0]" />
                    </div>
                    <div className="space-y-3">
                      {yearEvents.map((ev, i) => (
                        <div
                          key={i}
                          className="bg-[#FDFAF5] border border-[#e8e0d0] rounded p-4 hover:shadow-sm transition-shadow"
                          style={{
                            borderLeft: `3px solid ${ev.type.includes("Oral") ? "#1A4731" : "#C17D11"}`,
                          }}
                        >
                          <div className="flex items-start gap-3 flex-wrap">
                            <span
                              className="flex-shrink-0 text-xs px-2 py-0.5 rounded font-medium"
                              style={{
                                fontFamily: "'Outfit', sans-serif",
                                backgroundColor: ev.type.includes("Oral") ? "#1A4731" : "#C17D11",
                                color: "#FDFAF5",
                              }}
                            >
                              {ev.type}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p
                                className="text-sm font-medium text-[#1A4731] leading-snug mb-1"
                                style={{ fontFamily: "'Lora', serif" }}
                              >
                                {ev.title}
                              </p>
                              <p
                                className="text-xs text-[#6b7280]"
                                style={{ fontFamily: "'Outfit', sans-serif" }}
                              >
                                <span className="text-[#374151] font-medium">{ev.authors}</span>
                                {" · "}
                                {ev.venue}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
