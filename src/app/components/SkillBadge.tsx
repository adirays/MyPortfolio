import { motion } from "motion/react";
import { useTheme } from "./ThemeContext";

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const { theme } = useTheme();
  const color = theme === "light" ? "rgba(26,26,28,0.7)" : "rgba(240,238,234,0.5)";
  const borderColor = theme === "light" ? "rgba(26,26,28,0.22)" : "rgba(240,238,234,0.15)";
  const hoverColor = theme === "light" ? "#2a6b5e" : "#3a9b8e";
  return (
    <motion.span
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "9px",
        fontWeight: 300,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color,
        border: `0.5px solid ${borderColor}`,
        padding: "6px 12px",
        borderRadius: "4px",
        cursor: "default",
        display: "inline-block",
        transition: "color 0.2s, border-color 0.2s",
      }}
      whileHover={{
        color: hoverColor,
        borderColor: hoverColor,
        transition: { duration: 0.2 },
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {skill}
    </motion.span>
  );
}
