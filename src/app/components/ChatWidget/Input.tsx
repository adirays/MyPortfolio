import { useState, KeyboardEvent } from "react";
import { motion } from "motion/react";

interface InputProps {
  onSend: (text: string) => void;
  isLoading: boolean;
  prefill?: string;
}

export function Input({ onSend, isLoading, prefill }: InputProps) {
  const [value, setValue] = useState(prefill ?? "");

  // Sync prefill from parent (suggestion click)
  if (prefill !== undefined && prefill !== value && prefill !== "") {
    setValue(prefill);
  }

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setValue("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submit();
  };

  return (
    <div style={{ borderTop: "0.5px solid rgba(26,24,20,0.08)", padding: "12px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Ask anything..."
        disabled={isLoading}
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          fontWeight: 300,
          color: "#1a1814",
          placeholder: "rgba(26,24,20,0.25)",
        }}
      />
      <motion.button
        onClick={submit}
        disabled={isLoading || !value.trim()}
        style={{
          background: "none",
          border: "none",
          cursor: isLoading || !value.trim() ? "default" : "pointer",
          fontSize: "16px",
          lineHeight: 1,
          padding: 0,
          color: "#1a1814",
        }}
        animate={{ opacity: value.trim() && !isLoading ? 1 : 0.4, rotate: isLoading ? 45 : 0 }}
        transition={{ duration: 0.2 }}
        whileHover={value.trim() && !isLoading ? { scale: 1.2 } : {}}
      >
        →
      </motion.button>
    </div>
  );
}
