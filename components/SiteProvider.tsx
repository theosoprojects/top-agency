"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { MotionConfig } from "framer-motion";
import ContactModal from "@/components/modals/ContactModal";
import CookieBanner from "@/components/CookieBanner";

export type Engagement = "project" | "talent";

const COOKIE_KEY = "top-cookie-consent";
const COOKIE_EVENT = "top-cookie-change";

type SiteValue = {
  openConsult: (engagement?: Engagement) => void;
  closeConsult: () => void;
  consultOpen: boolean;
  engagement: Engagement;
  setEngagement: (value: Engagement) => void;
  acknowledgeCookies: () => void;
  cookiesAcknowledged: boolean;
};

const SiteContext = createContext<SiteValue | null>(null);

function subscribe(onStoreChange: () => void) {
  window.addEventListener(COOKIE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(COOKIE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function cookiesAcknowledged() {
  return window.localStorage.getItem(COOKIE_KEY) === "acknowledged";
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [consultOpen, setConsultOpen] = useState(false);
  const [engagement, setEngagement] = useState<Engagement>("project");
  const acknowledged = useSyncExternalStore(subscribe, cookiesAcknowledged, () => true);

  const value = useMemo<SiteValue>(
    () => ({
      consultOpen,
      engagement,
      setEngagement,
      cookiesAcknowledged: acknowledged,
      openConsult(next) {
        if (next) setEngagement(next);
        setConsultOpen(true);
      },
      closeConsult() {
        setConsultOpen(false);
      },
      acknowledgeCookies() {
        window.localStorage.setItem(COOKIE_KEY, "acknowledged");
        window.dispatchEvent(new Event(COOKIE_EVENT));
      },
    }),
    [acknowledged, consultOpen, engagement],
  );

  return (
    <SiteContext.Provider value={value}>
      <MotionConfig reducedMotion="user">
        <div className="flex min-h-svh flex-col [&>main]:flex-1">{children}</div>
        <ContactModal />
        <CookieBanner />
      </MotionConfig>
    </SiteContext.Provider>
  );
}

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) {
    throw new Error("useSite must be used within SiteProvider");
  }
  return value;
}
