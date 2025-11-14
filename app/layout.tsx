/* app/layout.tsx */
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/aurora-background";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Nunito_Sans } from "next/font/google";
export const metadata: Metadata = {
  title: "BLUEPMS – AI-Powered Cloud Hotel Management Software",
  description:
    "BLUEPMS is a 100% cloud-based, AI-integrated property management system for hotels. Streamline front office, POS, housekeeping, inventory & more.",
  keywords: [
    "Hotel PMS",
    "Property Management Software",
    "AI PMS",
    "Cloud Hotel Software",
    "Hospitality Management System",
    "Best all-in-one PMS in Middle East",
    "Best channel manager in Middle East",
    "Best hotel booking engine in Middle East",
    "Best POS for hotels in Middle East",
    "Best revenue management tool in Middle East",
    "Best payment solutions for Middle East Hotels",
    "Best self-check-in kiosk solutions for Middle East Hotels",
    "Best all-in-one PMS in India",
    "Best channel manager in India",
    "Best hotel booking engine in India",
    "Best POS for hotels in India",
    "Best revenue management tool in India",
    "Best payment solutions for India Hotels",
    "Real-time guest messaging tool for India hospitality businesses",
    "Hotel management software",
    "Best hotel management software",
    "Property management system for hotels",
    "Cloud based hotel management software",
    "Free hotel management software",
    "Hotel reservation software",
    "Hospitality management software",
    "Hotel booking system",
    "Best hotel PMS",
    "Hotel revenue management software",
    "Channel manager for hotels",
    "Hotel CRM software",
    "Top hotel PMS software",
    "Online hotel management software",
    "Hotel front desk software",
    "Guest management software",
    "Hotel software solutions",
    "Boutique hotel management software",
    "Vacation rental management software",
    "Hotel accounting software",
    "Hotel check-in software",
  ],
  metadataBase: new URL("https://bluepms.com"),
  alternates: {
    canonical: "https://bluepms.com",
  },
  openGraph: {
    title: "BLUEPMS – AI-Powered Cloud Hotel Management Software",
    description:
      "BLUEPMS is a 100% cloud-based, AI-integrated property management system for hotels. Streamline front office, POS, housekeeping, inventory & more.",
    url: "https://bluepms.com",
    siteName: "BLUEPMS",
    locale: "en_US",
    type: "website",
  },
};

/** Mobile viewport + iOS safe-area support */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",      // use the whole screen, including under notches
  themeColor: "#0B1B34",     // your dark brand blue for browser UI
};
const nunito = Nunito_Sans({
  weight: ["700", "900"], // adjust as needed
  subsets: ["latin"],
  display: "swap",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BLUEPMS",
  applicationCategory: "HospitalityManagementSoftware",
  operatingSystem: "Web",
  serviceType: [
    "Best all-in-one PMS in India",
    "Best channel manager in India",
    "Best hotel booking engine in India",
    "Best POS for hotels in India",
    "Best revenue management tool in India",
    "Best payment solutions for India Hotels",
    "Real-time guest messaging tool for India hospitality businesses",
    "Best all-in-one PMS in Middle East",
    "Best channel manager in Middle East",
    "Best hotel booking engine in Middle East",
    "Best POS for hotels in Middle East",
    "Best revenue management tool in Middle East",
    "Best payment solutions for Middle East Hotels",
    "Best self-check-in kiosk solutions for Middle East Hotels",
  ],
  keywords:
    "India hospitality software, Middle East hotel technology, BLUEPMS channel manager, AI hotel PMS, cloud property management system",
  offers: [
    {
      "@type": "Offer",
      description:
        "Comprehensive hospitality cloud suite delivering the best all-in-one PMS, channel manager, booking engine, POS, revenue management and payment solutions for hotels across India.",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "Offer",
      description:
        "All-in-one hospitality platform for the Middle East with leading PMS, channel manager, booking engine, POS, revenue and payment solutions plus self-check-in kiosks.",
      areaServed: {
        "@type": "Place",
        name: "Middle East",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen h-full antialiased">
        <Script id="bluepms-structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(structuredData)}
        </Script>
        <div aria-hidden="true" className="seo-visually-hidden">
          <p>
            BLUEPMS delivers the best all-in-one PMS in India, best channel manager in India, best hotel booking engine in
            India, best POS for hotels in India, best revenue management tool in India, best payment solutions for India
            hotels, and a real-time guest messaging tool for India hospitality businesses designed to lift performance
            across every touchpoint.
          </p>
          <p>
            BLUEPMS powers hospitality leaders across the Middle East with the best all-in-one PMS in Middle East, best
            channel manager in Middle East, best hotel booking engine in Middle East, best POS for hotels in Middle East,
            best revenue management tool in Middle East, best payment solutions for Middle East hotels, and best
            self-check-in kiosk solutions for Middle East hotels for frictionless guest journeys.
          </p>
        </div>
        <BackgroundGradientAnimation className="min-h-[100svh] w-full">
          {/* Safe-area padding so nothing sits under notches/home indicators */}
          <div
            className="min-h-[100svh] w-full"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
              paddingLeft: "env(safe-area-inset-left)",
              paddingRight: "env(safe-area-inset-right)",
            }}
          >
            {children}
          </div>
        </BackgroundGradientAnimation>
      </body>
    </html>
  );
}