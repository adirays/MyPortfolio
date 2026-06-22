// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { ArrowUp } from "lucide-react";
// import { useTheme } from "./ThemeContext";

// export default function BackToTop() {
//   const { theme } = useTheme();
//   const bg = theme === "light" ? "#1a1a1c" : "#f0eeea";
//   const fg = theme === "light" ? "#f0eeea" : "#1a1a1c";
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsVisible(window.scrollY > 500);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           style={{
//             position: "fixed",
//             bottom: "40px",
//             right: "40px",
//             width: "44px",
//             height: "44px",
//             border: "0.5px solid rgba(26,26,28,0.15)",
//             backgroundColor: bg,
//             color: fg,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//             borderRadius: 0,
//             zIndex: 40,
//           }}
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 12 }}
//           whileHover={{ backgroundColor: "#c8622a" }}
//           whileTap={{ scale: 0.95 }}
//           transition={{ duration: 0.25 }}
//         >
//           <ArrowUp style={{ width: "16px", height: "16px" }} />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// }
