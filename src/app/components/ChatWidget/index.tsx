import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trigger } from "./Trigger";
import { Header } from "./Header";
import { Suggestions } from "./Suggestions";
import { MessageList } from "./MessageList";
import { Input } from "./Input";
import { useOllama } from "./useOllama";
import { Message, WidgetState } from "./types";

function generateId() {
  return Math.random().toString(36).slice(2);
}

export function ChatWidget() {
  const [state, setState] = useState<WidgetState>("closed");
  const [messages, setMessages] = useState<Message[]>([]);
  const [pendingPrefill, setPendingPrefill] = useState<string>("");
  const { send, isLoading } = useOllama();

  const open = () => setState("open");

  const close = useCallback(() => {
    setState("closed");
    // Clear session on close per spec
    setTimeout(() => setMessages([]), 400);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  const handleSend = useCallback((text: string) => {
    const userMsg: Message = { id: generateId(), role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    setPendingPrefill("");

    send(text, messages, (content, durationMs) => {
      const aiMsg: Message = { id: generateId(), role: "assistant", content, durationMs };
      setMessages(prev => [...prev, aiMsg]);
    });
  }, [messages, send]);

  const handleSuggestion = (text: string) => {
    handleSend(text);
  };

  const isOpen = state === "open";

  return (
    <div style={{ position: "fixed", bottom: "100px", right: "40px", zIndex: 50 }}>
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="trigger"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Trigger onClick={open} />
          </motion.div>
        ) : (
          <motion.div
            key="widget"
            style={{
              width: "360px",
              backgroundColor: "#faf9f7",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transformOrigin: "bottom right",
              boxShadow: "0 8px 40px rgba(26,24,20,0.12), 0 1px 4px rgba(26,24,20,0.08)",
            }}
            initial={{ opacity: 0, scale: 0.85, height: "40px" }}
            animate={{ opacity: 1, scale: 1, height: "480px" }}
            exit={{ opacity: 0, scale: 0.85, height: "40px" }}
            transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
          >
            {/* Contents fade in after container opens */}
            <motion.div
              style={{ display: "flex", flexDirection: "column", height: "100%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <Header onClose={close} />

              {/* Divider */}
              <div style={{ height: "0.5px", backgroundColor: "rgba(26,24,20,0.08)", margin: "0 20px" }} />

              {messages.length === 0 && !isLoading ? (
                <Suggestions onSelect={handleSuggestion} />
              ) : (
                <MessageList messages={messages} isLoading={isLoading} />
              )}

              <Input onSend={handleSend} isLoading={isLoading} prefill={pendingPrefill} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
