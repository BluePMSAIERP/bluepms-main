"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { GA_MEASUREMENT_ID } from "@/lib/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams?.toString();

  useEffect(() => {
    if (!pathname) return;

    const url = searchParamsString
      ? `${pathname}?${searchParamsString}`
      : pathname;

    window.gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }, [pathname, searchParamsString]);

  return null;
}
