import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, useAnimation } from "motion/react";
import { ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import CustomCursor from "../components/CustomCursor";
import { useTheme } from "../components/ThemeContext";

const themes = {
  light: { bg: "#f0eeea", text: "#1a1a1c", muted: "rgba(26,26,28,0.35)", border: "#1a1a1c", warm: "#c8622a" },
  dark: { bg: "#0e0e10", text: "#f8f9fa", muted: "rgba(248,249,250,0.4)", border: "#f8f9fa", warm: "#c8622a" },
};

const MECHANICAL_SVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>
  <circle cx='200' cy='200' r='180' fill='none' stroke='%231a1a1c' stroke-width='0.5'/>
  <circle cx='200' cy='200' r='150' fill='none' stroke='%231a1a1c' stroke-width='0.5'/>
  <circle cx='200' cy='200' r='120' fill='none' stroke='%231a1a1c' stroke-width='0.5'/>
  <circle cx='200' cy='200' r='90' fill='none' stroke='%231a1a1c' stroke-width='0.5'/>
  <circle cx='200' cy='200' r='60' fill='none' stroke='%231a1a1c' stroke-width='0.5'/>
  <circle cx='200' cy='200' r='30' fill='none' stroke='%231a1a1c' stroke-width='0.5'/>
  ${Array.from({ length: 72 }, (_, i) => {
  const angle = (i * 5 * Math.PI) / 180;
  const isMajor = i % 6 === 0;
  const r1 = isMajor ? 155 : 162;
  const r2 = 180;
  const x1 = 200 + r1 * Math.cos(angle);
  const y1 = 200 + r1 * Math.sin(angle);
  const x2 = 200 + r2 * Math.cos(angle);
  const y2 = 200 + r2 * Math.sin(angle);
  return `<line x1='${x1.toFixed(1)}' y1='${y1.toFixed(1)}' x2='${x2.toFixed(1)}' y2='${y2.toFixed(1)}' stroke='%231a1a1c' stroke-width='${isMajor ? 1 : 0.5}'/>`;
}).join('')}
  ${Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 30 * Math.PI) / 180;
  const r = 135;
  const x = 200 + r * Math.cos(angle);
  const y = 200 + r * Math.sin(angle);
  return `<circle cx='${x.toFixed(1)}' cy='${y.toFixed(1)}' r='3' fill='none' stroke='%231a1a1c' stroke-width='0.5'/>`;
}).join('')}
  <line x1='200' y1='20' x2='200' y2='380' stroke='%231a1a1c' stroke-width='0.25'/>
  <line x1='20' y1='200' x2='380' y2='200' stroke='%231a1a1c' stroke-width='0.25'/>
</svg>`;

export default function Landing() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const T = themes[theme];
  const [exiting, setExiting] = useState(false);
  const watermarkControls = useAnimation();
  const contentControls = useAnimation();
  const bgControls = useAnimation();

  async function handleEnter() {
    if (exiting) return;
    setExiting(true);

    await Promise.all([
      watermarkControls.start({
        scale: 14,
        opacity: 0.08,

        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      }),
      contentControls.start({
        opacity: 0,
        y: -20,
        rotate: -12,
        transition: { duration: 0.35, ease: "easeIn", delay: 0.15 },

      }),
      bgControls.start({
        backgroundColor: "#0e0e10",

        transition: { duration: 0.5, delay: 0.3, ease: "easeIn" },

      }),
    ]);

    await watermarkControls.start({
      opacity: 0,
      scale: 22,

      transition: { duration: 0.2, ease: "easeIn" },

    });

    navigate("/portfolio");
  }

  return (
    <PageTransition>
      <CustomCursor />
      <motion.div
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: T.bg }}
        animate={bgControls}
      >
        {/* Mechanical diagram watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0.04 }}
        >
          <img
            src={`data:image/svg+xml,${MECHANICAL_SVG}`}
            alt=""
            style={{ width: "70vmin", height: "70vmin" }}
          />
        </div>

        {/* Main content */}
        <motion.div
          className="relative z-10 text-center px-8"
          style={{ maxWidth: "900px" }}
          animate={contentControls}
          initial={{ opacity: 1, y: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Name */}
            <h1
              style={{
                fontFamily: "'Quantico', sans-serif",
                fontSize: "clamp(64px, 10vw, 96px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: T.text,
              }}
            >
              M            ADITYA              KIRAN
            </h1>

            {/* Subtitle */}
            <motion.p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 300,
                letterSpacing: "0.22em",
                color: T.muted,
                marginTop: "24px",
                marginBottom: "64px",
                textTransform: "uppercase",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI Engineer · Software Developer · 
            </motion.p>

            {/* CTA Button */}
            <motion.button
              onClick={handleEnter}
              disabled={exiting}
              className="group inline-flex items-center gap-3"
              style={{
                padding: "14px 32px",
                border: `0.5px solid ${T.border}`,
                backgroundColor: "rgba(0,0,0,0)",
                color: T.text,
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 300,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                cursor: exiting ? "default" : "pointer",
                borderRadius: 0,
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ backgroundColor: T.text, color: T.bg }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Enter Portfolio</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Transition watermark */}
        <motion.div

          className="absolute bottom-0 right-0 pointer-events-none select-none leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "400px",
            fontWeight: 400,
            color: T.text,
            opacity: 0.03,
            lineHeight: 0.85,
            userSelect: "none",
          }}
          initial={{ opacity: 0.05, rotate: -18 }}
          animate={watermarkControls}
        >
          AK
        </motion.div>
      </motion.div>
    </PageTransition>
  );
}
