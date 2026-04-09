/*
 * DESIGN: Academic Elegance – footer with university logos area and project info
 */
export default function Footer() {
  return (
    <footer className="bg-[#1A4731] text-[#FDFAF5] mt-0">
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Project identity */}
          <div className="md:col-span-2">
            <h3
              className="text-2xl font-semibold mb-3 text-[#F5E6C8]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Targeting LIF and Bile Acid Receptors
            </h3>
            <p
              className="text-sm text-[#a8c4b0] leading-relaxed mb-4"
              style={{ fontFamily: "'Lora', serif" }}
            >
              A new armamentarium in the treatment of pancreatic ductal adenocarcinoma.
              Funded by the Italian Ministry of University and Research (MUR) under the PRIN 2022 programme.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="text-xs text-[#a8c4b0]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <span className="text-[#C17D11] font-semibold">Principal Investigator</span><br />
                Prof. Angela Zampella – University of Naples Federico II
              </div>
            </div>
          </div>

          {/* Partner Universities */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest text-[#C17D11] mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Partner Universities
            </h4>
            <ul className="space-y-2 text-sm text-[#a8c4b0]" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <li className="flex items-start gap-2">
                <span className="text-[#C17D11] mt-0.5">·</span>
                University of Naples Federico II
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C17D11] mt-0.5">·</span>
                University of Salerno
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C17D11] mt-0.5">·</span>
                University of Perugia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2d6b4a] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6b9e7e]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            © 2024–2026 PRIN LIF/LIFR PDAC Project. All rights reserved.
          </p>
          <p className="text-xs text-[#6b9e7e]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Funded by MUR – PRIN 2022
          </p>
        </div>
      </div>
    </footer>
  );
}
