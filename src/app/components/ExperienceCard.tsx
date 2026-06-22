import { motion } from "motion/react";
import { useTheme } from "./ThemeContext";

const palette = {
  light: { text: "#1a1a1c", muted: "rgba(26,26,28,0.6)", border: "rgba(26,26,28,0.18)", warm: "#c8622a", cool: "#2a6b5e" },
  dark:  { text: "#f8f9fa", muted: "rgba(248,249,250,0.55)", border: "rgba(248,249,250,0.12)", warm: "#c8622a", cool: "#3a9b8e" },
};

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  index: number;
}

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  tags,
  index,
}: ExperienceCardProps) {
  const { theme } = useTheme();
  const T = palette[theme];
  return (
    <motion.div
      style={{
        borderTop: `0.5px solid ${T.border}`,
        padding: "40px 0",
        borderRadius: 0,
      }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left: role + company */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "24px",
              fontWeight: 400,
              color: T.text,
              marginBottom: "8px",
            }}
          >
            {role}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              fontWeight: 300,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: T.warm,
              marginBottom: "4px",
            }}
          >
            {company}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              fontWeight: 300,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: T.muted,
            }}
          >
            {period}
          </p>
        </div>

        {/* Right: description + tags */}
        <div className="md:col-span-2">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 300,
              letterSpacing: "0.04em",
              color: T.muted,
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "9px",
                  fontWeight: 300,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: T.cool,
                  border: `0.5px solid ${T.cool}`,
                  padding: "4px 10px",
                  borderRadius: "4px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
