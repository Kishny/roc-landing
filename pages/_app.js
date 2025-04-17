import "@/styles/globals.css";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import CookieConsent from "@/components/CookieConsent";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const timer = setTimeout(() => setLoading(false), 2500); // durée allongée
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-blue-600 z-[9999] flex items-center justify-center animate-fadeOut">
          <div className="w-50 h-50 rounded-full bg-white flex items-center justify-center animate-scalePop shadow-xl">
            <img
              src="/img/logo-roc.png"
              alt="ROC Logo"
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>
      )}
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}
