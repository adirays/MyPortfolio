import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"
import quiddyGif from "../../../imports/Quiddy.gif"

interface TriggerProps {
  onClick: () => void;
}

export function Trigger({ onClick }: TriggerProps) {
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    // Show bubble after 3 seconds
    const showTimer = setTimeout(() => setShowBubble(true), 3000)
    // Auto-hide after 6 seconds
    const hideTimer = setTimeout(() => setShowBubble(false), 9000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div style={{ position: "relative", display: "inline-block" }}>

      {/* Dialogue bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 10 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            style={{
              position: "absolute",
              bottom: "64px",
              right: "0px",
              width: "180px",
              backgroundColor: "#1a1814",
              borderRadius: "16px 16px 4px 16px",
              padding: "12px 16px",
              pointerEvents: "none",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              border: "0.5px solid rgba(240,238,234,0.08)",
            }}
          >
            {/* Squid name tag */}
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "8px",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#4a9e6a",
              marginBottom: "6px",
            }}>
              Quiddy · AI Assistant
            </div>

            {/* Message */}
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 300,
              color: "rgba(240,238,234,0.85)",
              lineHeight: 1.6,
              letterSpacing: "0.02em",
            }}>
              Hey there. I know everything about Aditya — ask me anything.
            </div>

            {/* Typing dots animation — shows briefly before text */}
            <motion.div
              style={{
                display: "flex",
                gap: "4px",
                marginTop: "8px",
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(240,238,234,0.3)",
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Bubble tail — points down right toward button */}
            <div style={{
              position: "absolute",
              bottom: "-8px",
              right: "16px",
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "0px solid transparent",
              borderTop: "8px solid #1a1814",
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        onClick={() => {
          setShowBubble(false)
          onClick()
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "52px",
          height: "52px",
          padding: 0,
          backgroundColor: "transparent",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          overflow: "hidden",
        }}
        whileHover={{ scale: 1.06 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img
          src={quiddyGif}
          alt="Quiddy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </motion.button>
    </div>
  )
}