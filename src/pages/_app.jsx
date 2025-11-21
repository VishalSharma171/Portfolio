import "../styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import ThemeProvider from "../components/ThemeProvider";
import IntroSplash from "../components/IntroSplash"; // new

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // auto-hide splash after 2500ms
    const t = setTimeout(() => setShowSplash(false), 3500);
    return () => clearTimeout(t);
  }, []);

  // preserve "using-mouse" behavior from before
  useEffect(() => {
    const handleMouseDown = () => document.body.classList.add("using-mouse");
    const handleKeyDown = (e) => {
      if (e.key === "Tab") document.body.classList.remove("using-mouse");
    };
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ThemeProvider>
      <Navbar />
      <ScrollProgress />

      {/* Intro splash overlay */}
      <AnimatePresence>
        {showSplash && <IntroSplash key="splash" onFinish={() => setShowSplash(false)} />}
      </AnimatePresence>

      {/* Main app content */}
      <AnimatePresence mode="wait" initial={false} key={router.asPath}>
        {!showSplash && (
          <motion.main
            key={router.asPath}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="min-h-[calc(100vh-120px)]"
          >
            <Component {...pageProps} />
          </motion.main>
        )}
      </AnimatePresence>

      <Footer />
    </ThemeProvider>
  );
}
