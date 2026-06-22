import { motion } from "motion/react";

const SUGGESTIONS = [
  "What stack does Aditya use?",
  "Is he available for work?",
  "What's his strongest skill?",
];

interface SuggestionsProps {
  onSelect: (text: string) => void;
}

export function Suggestions({ onSelect }: SuggestionsProps) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 20px", gap: "20px" }}>
      <p style={{
        fontFamily: "'Cormorant', Georgia, serif",
        fontStyle: "italic",
        fontSize: "18px",
        fontWeight: 400,
        color: "rgba(26,24,20,0.35)",
        textAlign: "center",
        margin: 0,
      }}>
        What would you like to know?
      </p>

      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "8px" }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "9px",
          fontWeight: 300,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(26,24,20,0.25)",
          margin: "0 0 4px",
        }}>
          Try asking
        </p>
        {SUGGESTIONS.map((text, i) => (
          <motion.button
            key={i}
            onClick={() => onSelect(text)}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 300,
              color: "rgba(26,24,20,0.7)",
              background: "none",
              border: "0.5px solid rgba(26,24,20,0.15)",
              borderRadius: "4px",
              padding: "10px 14px",
              textAlign: "left",
              cursor: "pointer",
              width: "100%",
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            whileHover={{ borderColor: "rgba(26,24,20,0.4)", backgroundColor: "rgba(26,24,20,0.03)" }}
          >
            {text}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
