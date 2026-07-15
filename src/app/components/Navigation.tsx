import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router";
import { useTheme } from "./ThemeContext";

const themes = {
  light: {
    bg: "#e8e5e0",
    text: "#1a1a1c",
    muted: "rgba(26,26,28,0.45)",
    border: "rgba(26,26,28,0.12)",
    warm: "#c8622a",
    scrollBorder: "rgba(26,26,28,0.15)",
  },
  dark: {
    bg: "#080808",
    text: "#f8f9fa",
    muted: "rgba(248,249,250,0.45)",
    border: "rgba(248,249,250,0.08)",
    warm: "#c8622a",
    scrollBorder: "rgba(248,249,250,0.1)",
  },
};

function NavItem({ label, onClick, T }: { label: string; onClick: () => void; T: typeof themes.light }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.18 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: "10px",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: hovered ? T.warm : T.muted,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px 0",
        borderBottom: hovered ? `1px solid ${T.warm}` : "1px solid transparent",
        transition: "color 0.2s, border-color 0.2s",
        transformOrigin: "center",
      }}
    >
      {label}
    </motion.button>
  );
}

export default function Navigation() {
  const { theme, toggle } = useTheme();
  const T = themes[theme];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          backgroundColor: isScrolled ? T.bg : "rgba(0,0,0,0)",
          borderBottom: isScrolled ? `0.5px solid ${T.scrollBorder}` : "none",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          transition: "background-color 0.4s, border-color 0.3s, backdrop-filter 0.3s",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "18px 80px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {/* Logo */}
            <Link
              to="/"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                fontWeight: 400,
                color: T.text,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              Back
            </Link>

            {/* Desktop nav — items push apart on hover via gap animation */}
            <motion.div
              className="hidden md:flex items-center"
              style={{ gap: "40px" }}
            >
              {navItems.map((item) => (
                <NavItem key={item.id} label={item.label} onClick={() => scrollTo(item.id)} T={T} />
              ))}
            </motion.div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {/* Theme toggle */}
              <motion.button
                onClick={toggle}
                title={theme === "light" ? "Switch to dark" : "Switch to light"}
                style={{
                  background: "none",
                  border: `0.5px solid ${T.border}`,
                  cursor: "pointer",
                  color: T.muted,
                  padding: "8px",
                  borderRadius: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                whileHover={{ borderColor: T.warm, color: T.warm, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "light"
                  ? <Moon style={{ width: "13px", height: "13px" }} />
                  : <Sun style={{ width: "13px", height: "13px" }} />
                }
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
                style={{ background: "none", border: "none", cursor: "pointer", color: T.text, padding: "4px" }}
              >
                {isMobileMenuOpen
                  ? <X style={{ width: "20px", height: "20px" }} />
                  : <Menu style={{ width: "20px", height: "20px" }} />
                }
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden"
            style={{ backgroundColor: T.bg }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="h-full flex flex-col items-center justify-center gap-10">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => { scrollTo(item.id); setIsMobileMenuOpen(false); }}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "36px",
                    fontWeight: 400,
                    color: T.muted,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  whileHover={{ color: T.warm, scale: 1.08 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
