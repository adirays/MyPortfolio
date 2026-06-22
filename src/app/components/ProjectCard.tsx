import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

const palette = {
  light: { surface: "#ffffff", text: "#1a1a1c", muted: "rgba(26,26,28,0.6)", border: "rgba(26,26,28,0.18)", warm: "#c8622a", cool: "#2a6b5e", imgBg: "#dedad4", overlay: "rgba(26,26,28,0.35)" },
  dark:  { surface: "#141414", text: "#f8f9fa", muted: "rgba(248,249,250,0.55)", border: "rgba(248,249,250,0.12)", warm: "#c8622a", cool: "#3a9b8e", imgBg: "#1e1e1e", overlay: "rgba(0,0,0,0.45)" },
};

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  index: number;
}

export default function ProjectCard({ title, subtitle, description, tags, link, image, index }: ProjectCardProps) {
  const { theme } = useTheme();
  const T = palette[theme];
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      style={{
        backgroundColor: T.surface,
        border: `0.5px solid ${T.border}`,
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -8, borderColor: T.warm, transition: { duration: 0.3 } }}
    >
      <div className="grid md:grid-cols-2">
        {/* Image — fills height, no cropping */}
        <div style={{ position: "relative", minHeight: "300px", overflow: "hidden", backgroundColor: T.imgBg }}>
          {!imageLoaded && (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <motion.div
                style={{ width: "32px", height: "32px", border: `2px solid ${T.warm}`, borderTopColor: "transparent", borderRadius: "50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          )}
          <motion.img
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onLoad={() => setImageLoaded(true)}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          />
          {/* Gradient overlay for legibility */}
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${T.overlay}, transparent)` }} />
        </div>

        {/* Content */}
        <div style={{ padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 400, color: T.text, marginBottom: "4px" }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 300, letterSpacing: "0.22em", textTransform: "uppercase", color: T.muted }}>
                  {subtitle}
                </p>
              </div>
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "8px", border: `0.5px solid ${T.border}`, color: T.muted, display: "inline-flex", borderRadius: "8px", flexShrink: 0 }}
                whileHover={{ backgroundColor: T.warm, borderColor: T.warm, color: "#fff", scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight style={{ width: "16px", height: "16px" }} />
              </motion.a>
            </div>

            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 300, letterSpacing: "0.04em", color: T.muted, lineHeight: 1.75 }}>
              {description}
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                style={{
                  fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: 300,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: T.cool, border: `0.5px solid ${T.cool}`,
                  padding: "5px 12px", borderRadius: "4px",
                }}
                whileHover={{ backgroundColor: T.cool, color: "#fff", scale: 1.05 }}
                transition={{ duration: 0.15 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
