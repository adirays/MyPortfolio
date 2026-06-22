interface HeaderProps {
  onClose: () => void;
}

export function Header({ onClose }: HeaderProps) {
  return (
    <div style={{ padding: "16px 20px 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <span style={{ fontFamily: "'Cormorant', Georgia, serif", fontSize: "16px", fontWeight: 300, color: "#1a1814" }}>
          Ask Aditya's AI
        </span>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            color: "rgba(26,24,20,0.4)",
            padding: "0 0 0 12px",
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>

      {/* Rule */}
      <div style={{ height: "0.5px", backgroundColor: "rgba(26,24,20,0.08)", marginBottom: "8px" }} />

      {/* Metadata */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", paddingBottom: "10px" }}>
        <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#4a9e6a", flexShrink: 0 }} />
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "9px",
          fontWeight: 300,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(26,24,20,0.3)",
        }}>
          {/* Quiddy greets you! */}
        </span>
      </div>
    </div>
  );
}
