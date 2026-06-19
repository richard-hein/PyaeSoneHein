// Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { useTranslate } from "../hooks/useTranslate";
import { useLocale } from "../locales/i18n/LocaleContext";

const navLinks = [
  { num: "01", label: "home", href: "/" },
  { num: "02", label: "about", href: "#about" },
  { num: "03", label: "projects", href: "#projects" },
  { num: "04", label: "skills", href: "#skills" },
  // { num: "05", label: "Contact", href: "#contact" },
];

const languages = [
  { code: "EN", label: "English" },
  // { code: "MM", label: "မြန်မာ" },
  { code: "JP", label: "日本語" },
];

const Navbar = () => {
  const t = useTranslate();
  const { locale, switchLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(locale.toUpperCase());
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close hamburger menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Circle expand background */}
      <div
        style={{
          transitionTimingFunction: "cubic-bezier(0.86, 0, 0.07, 1)",
          transform: isOpen ? "scale(60)" : "scale(0)",
        }}
        className="fixed top-10 right-10 w-[60px] h-[60px] rounded-full z-[100]
          bg-gradient-to-br from-[#1a2e0a] to-[#0d1a05]
          transition-transform duration-700 pointer-events-none"
      />

      {/* --- LANGUAGE SWITCHER START --- */}
      <div
        ref={dropdownRef}
        className="fixed top-7.5 right-26 z-[200] h-14 flex items-center"
      >
        <div className="relative">
          <button
            onClick={() => setIsLangOpen((prev) => !prev)}
            aria-label="Select Language"
            className={`flex items-center gap-1 px-3 py-1.5 text-md font-semibold rounded-full border transition-all duration-300 cursor-pointer text-primary/80
              ${
                isLangOpen
                  ? "border-primary/60 bg-[#1c2a12]/80 shadow-[0_0_0_6px_rgba(163,230,53,0.04)]"
                  : "border-primary/25 bg-[#0f1117]/60 hover:border-primary/60 hover:scale-105"
              }`}
          >
            🌐 {currentLang}
            <span
              className={`text-[12px] opacity-70 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>

          {/* Dropdown Options */}
          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-[#131722] border border-primary/20 rounded-xl shadow-xl overflow-hidden animate-fadeIn backdrop-blur-md">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  // onClick={() => {
                  //   setCurrentLang(lang.code);
                  //   setIsLangOpen(false);

                  // }}
                  onClick={() => {
                    const newLang = lang.code.toLowerCase();
                    setCurrentLang(lang.code);
                    setIsLangOpen(false);
                    switchLocale(newLang);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-xs tracking-wider transition-colors duration-200 cursor-pointer ${
                    currentLang === lang.code
                      ? "bg-primary text-[#0f1117] font-bold"
                      : "text-primary/70 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* --- LANGUAGE SWITCHER END --- */}

      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen((p) => !p)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        className={`fixed top-7 right-7 z-[200] w-14 h-14 rounded-full
          flex flex-col items-center justify-center gap-[6px]
          border-[1.5px] transition-all duration-300 cursor-pointer
          ${
            isOpen
              ? "border-primary/60 shadow-[0_0_0_10px_rgba(163,230,53,0.06)]"
              : "border-primary/25 shadow-[0_0_0_6px_rgba(163,230,53,0.04)] hover:border-primary/60 hover:shadow-[0_0_0_10px_rgba(163,230,53,0.06)] hover:scale-105"
          }`}
        style={{
          background: "radial-gradient(circle at 30% 30%, #1c2a12, #0f1117)",
        }}
      >
        {/* Bar 1 */}
        <span
          className="block h-[2px] w-[22px] bg-primary rounded-full origin-center transition-all duration-300"
          style={{
            transform: isOpen ? "translateY(8px) rotate(45deg)" : "none",
          }}
        />
        {/* Bar 2 */}
        <span
          className="block h-[2px] w-4 bg-primary rounded-full transition-all duration-300"
          style={{
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? "scaleX(0)" : "none",
          }}
        />
        {/* Bar 3 */}
        <span
          className="block h-[2px] w-[22px] bg-primary rounded-full origin-center transition-all duration-300"
          style={{
            transform: isOpen ? "translateY(-8px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Fullscreen nav overlay */}
      <nav
        className="fixed inset-0 z-[150] flex items-center justify-center transition-opacity duration-500"
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transitionDelay: isOpen ? "0.2s" : "0s",
        }}
        aria-hidden={!isOpen}
      >
        <ul className="list-none text-center grid grid-cols-1 gap-6">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="transition-all duration-500"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(-60px)",
                transitionDelay: isOpen ? `${0.25 + i * 0.05}s` : "0s",
              }}
            >
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="nav-link"
              >
                <span className="inline-block text-xs text-primary font-semibold mr-4 opacity-70">
                  {link.num}
                </span>
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease forwards;
        }
        .nav-link {
          display: inline-block;
          padding: 12px 28px;
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 300;
          color: #e8f5d0;
          text-decoration: none;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background-image: linear-gradient(
            120deg,
            transparent 0%,
            transparent 50%,
            #a3e635 50%
          );
          background-size: 230%;
          background-position: left;
          transition: background-position 0.4s ease, color 0.4s ease, letter-spacing 0.3s ease;
        }
        .nav-link:hover {
          background-position: right;
          color: #0f1117;
          letter-spacing: 0.25em;
        }
      `}</style>
    </>
  );
};

export default Navbar;
