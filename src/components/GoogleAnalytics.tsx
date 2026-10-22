import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CONSENT_KEY = "arinits-analytics-consent";

type ConsentState = "loading" | "unknown" | "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const updateConsent = (analyticsStorage: "granted" | "denied") => {
  window.gtag?.("consent", "update", {
    analytics_storage: analyticsStorage,
  });
};

export default function GoogleAnalytics() {
  const location = useLocation();
  const [consent, setConsent] = useState<ConsentState>("loading");

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(CONSENT_KEY);
    if (storedConsent === "granted" || storedConsent === "denied") {
      updateConsent(storedConsent);
      setConsent(storedConsent);
      return;
    }
    setConsent("unknown");
  }, []);

  useEffect(() => {
    if (consent !== "granted") return;

    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${location.pathname}${location.search}`,
    });
  }, [consent, location.pathname, location.search]);

  const chooseConsent = (choice: "granted" | "denied") => {
    window.localStorage.setItem(CONSENT_KEY, choice);
    updateConsent(choice);
    setConsent(choice);
  };

  if (consent !== "unknown") return null;

  return (
    <aside
      aria-label="Analytics cookie preferences"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-white/20 bg-gray-950/95 p-5 text-white shadow-2xl backdrop-blur"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-gray-200">
          We use Google Analytics to understand site usage and improve ARINITS.
          Analytics storage remains off unless you accept. Read our{" "}
          <a className="font-semibold text-orange-400 underline" href="/privacy/">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => chooseConsent("denied")}
            className="rounded-lg border border-gray-500 px-4 py-2 text-sm font-semibold hover:bg-white/10"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => chooseConsent("granted")}
            className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold hover:bg-orange-500"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </aside>
  );
}
