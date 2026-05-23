/**
 * Footer — Chapter 6: Epilogue.
 * 
 * The final whisper. Pure utility. No decoration.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 z-20" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Mark + year */}
        <div className="flex items-center gap-5">
          <div
            className="w-[10px] h-[10px] border"
            style={{ borderColor: "rgba(255,255,255,0.1)", borderRadius: 1 }}
          />
          <span className="chapter-label" style={{ color: "rgba(168,164,156,0.25)" }}>
            AETHER SYSTEMS © {year}
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-10">
          {["Privacy", "Terms", "Docs", "Status"].map((link) => (
            <a
              key={link}
              href="#"
              className="chapter-label transition-colors duration-500 hover:text-aether-text-secondary/30"
              style={{ color: "rgba(168,164,156,0.2)" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* System status */}
        <div className="flex items-center gap-3">
          <div
            className="w-1 h-1 rounded-full signal-pulse"
            style={{ background: "rgba(245,241,232,0.3)" }}
          />
          <span className="chapter-label" style={{ color: "rgba(168,164,156,0.2)" }}>
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
