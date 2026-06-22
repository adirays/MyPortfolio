import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Message } from "./types";

function LoadingDots() {
  return (
    <div style={{ display: "flex", gap: "6px", padding: "8px 0" }}>
      {[0, 300, 600].map((delay, i) => (
        <motion.span
          key={i}
          style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#1a1814", display: "block" }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: delay / 1000, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export function MessageList({ messages, isLoading }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "12px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
      {messages.map((msg) => (
        <motion.div
          key={msg.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: "flex", flexDirection: "column", alignItems: msg.role === "user" ? "flex-end" : "flex-start" }}
        >
          {msg.role === "user" ? (
            <div style={{
              backgroundColor: "#f0eeea",
              padding: "9px 14px",
              borderRadius: "12px 12px 2px 12px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: 300,
              color: "#1a1814",
              maxWidth: "80%",
              lineHeight: 1.5,
            }}>
              {msg.content}
            </div>
          ) : (
            <div style={{ maxWidth: "92%" }}>
              <p style={{
                fontFamily: "'Cormorant', Georgia, serif",
                fontSize: "16px",
                fontWeight: 300,
                color: "#1a1814",
                margin: 0,
                lineHeight: 1.6,
              }}>
                {msg.content}
              </p>
              {msg.durationMs !== undefined && (
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "9px",
                  fontWeight: 300,
                  color: "rgba(26,24,20,0.2)",
                  margin: "6px 0 0",
                }}>
                  responded in {msg.durationMs}ms
                </p>
              )}
            </div>
          )}
        </motion.div>
      ))}

      {isLoading && (
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <LoadingDots />
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
