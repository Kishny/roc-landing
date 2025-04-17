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
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            background:
              "linear-gradient(90deg, #007a3d 0%, #ce1126 50%, #fcd116 100%)",
          }}
        >
          <div className="w-70 h-70 rounded-full bg-white flex items-center justify-center animate-scalePop shadow-xl">
            <img
              src="/img/logo-roc.png"
              alt="ROC Logo"
              className="w-70 h-70 object-contain rounded-full"
            />
          </div>
        </div>
      )}
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}
