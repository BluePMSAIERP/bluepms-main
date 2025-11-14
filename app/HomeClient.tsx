"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ui/ShinyText";
import KeyAdvantages from "@/app/KeyAdvantages";
import ComprehensiveModules from "@/app/ComprehensiveModules";
import ChooseBluepms from "./ChooseBluepms";
import AboutUsBoxes from "@/app/AboutUs";

const REGIONAL_SERVICE_LIST = [
    "Best POS for hotels in Abu Dhabi",
    "Hotel management software in Riyadh - Riyadh",
    "Best self-check-in kiosk solutions for Middle East Hotels",
    "PMS software in Manipur - Imphal",
    "Best channel manager in Asia Pacific",
    "hotel software in Puducherry - Puducherry",
    "Best revenue management tool in Africa",
    "Best all-in-one PMS in Asia Pacific",
    "PMS software in Chhattisgarh - Raipur",
    "Best hotel booking engine in Middle East",
    "hotel software in Jammu and Kashmir - Srinagar (summer), Jammu (winter)",
    "Best payment solutions for Asia Pacific Hotels",
    "Best all-in-one PMS in Africa",
    "PMS software in Gujarat - Gandhinagar",
    "Best channel manager in India",
    "Hotel management software in Bengaluru - Bengaluru",
    "Best payment solutions for India Hotels",
    "hotel software in Uttarakhand - Dehradun",
    "Best POS for hotels in Africa",
    "PMS software in Dadra and Nagar Haveli and Daman and Diu - Daman",
    "Best self-check-in kiosk solutions for Africa Hotels",
    "Best revenue management tool in Middle East",
    "Hotel management software in Delhi - New Delhi",
    "hotel software in Kerala - Thiruvananthapuram",
    "Best all-in-one PMS in India",
    "PMS software in Ladakh - Leh",
    "Best channel manager in Africa",
    "Hotel management software in Mizoram - Aizawl",
    "Best hotel booking engine in Asia Pacific",
    "PMS software in Andhra Pradesh - Amaravati",
    "Best POS for hotels in Middle East",
    "hotel software in Chandigarh - Chandigarh",
    "Best payment solutions for Africa Hotels",
    "Hotel management software in Uttar Pradesh - Lucknow",
    "Best revenue management tool in Asia Pacific",
    "PMS software in Tripura - Agartala",
    "Best self-check-in kiosk solutions for Asia Pacific Hotels",
    "hotel software in Assam - Dispur",
    "Best channel manager in Middle East",
    "Hotel management software in Andaman and Nicobar Islands - Port Blair",
    "PMS software in Bihar - Patna",
    "Best hotel booking engine in Africa",
    "hotel software in Himachal Pradesh - Shimla",
    "Best all-in-one PMS in Middle East",
    "PMS software in West Bengal - Kolkata",
    "Best POS for hotels in Asia Pacific",
    "Hotel management software in Punjab - Chandigarh",
    "Best payment solutions for Middle East Hotels",
    "PMS software in Meghalaya - Shillong",
    "hotel software in Rajasthan - Jaipur",
    "Best revenue management tool in India",
    "Hotel management software in Tamil Nadu - Chennai",
    "Best self-check-in kiosk solutions for India Hotels",
    "PMS software in Jharkhand - Ranchi",
    "Best channel manager for hotels in Dubai",
    "hotel software in Telangana - Hyderabad",
    "Best hotel booking engine in India",
    "PMS software in Madhya Pradesh - Bhopal",
    "Best all-in-one PMS for hotels in Doha",
    "Hotel management software in Arunachal Pradesh - Itanagar",
    "Best POS for hotels in Cairo",
    "PMS software in Odisha - Bhubaneswar",
    "Best revenue management tool for hotels in Istanbul",
    "hotel software in Goa - Panaji",
    "Best payment solutions for India Hotels in Mumbai",
    "Hotel management software in Haryana - Chandigarh",
    "Best self-check-in kiosk solutions for Middle East Hotels in Jeddah",
    "PMS software in Sikkim - Gangtok",
    "Best channel manager for hotels in Tehran",
    "PMS software in Dubai - Dubai",
    "Hotel management software in Abu Dhabi - Abu Dhabi",
    "hotel software in Doha - Doha",
    "Best channel manager in Sri Lanka",
    "PMS software in Colombo - Colombo",
    "Hotel management software in Maldives - Malé",
    "hotel software in Kathmandu - Kathmandu",
    "Best POS for hotels in Nepal",
    "Best revenue management tool in Maldives",
    "Hotel management software in Riyadh - Riyadh",
    "PMS software in Jeddah - Jeddah",
    "Best hotel booking engine in Sri Lanka",
    "hotel software in Malé - Malé",
    "Hotel management software in Muscat - Muscat",
    "PMS software in Bahrain - Manama",
    "Best payment solutions for Maldives Hotels",
    "hotel software in Pokhara - Pokhara",
    "Best all-in-one PMS in Nepal",
    "Hotel management software in Kuwait City - Kuwait City",
    "PMS software in Sharjah - Sharjah",
    "Best channel manager in Maldives",
    "hotel software in Colombo - Colombo",
    "Best POS for hotels in Sri Lanka",
    "Hotel management software in Kathmandu - Kathmandu",
    "PMS software in Malé - Malé",
];
type HomeClientProps = {
    showUaeOffer?: boolean;
};
export default function HomeClient({ showUaeOffer = false }: HomeClientProps) {
    const [ctaShown, setCtaShown] = useState(false);
    const router = useRouter();
    const goToFeatures = () =>
        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    const goToContact = () => router.push("/contact");
    return (
        <div className="min-h-[100dvh] w-full overflow-y-auto scroll-smooth snap-y snap-mandatory overscroll-y-contain">
            {/* HERO */}
            <section className="snap-start snap-always flex min-h-[100dvh] w-full flex-col items-center text-center px-6 py-16 sm:py-20 md:py-24 md:justify-center">
                <div className="w-full max-w-5xl lg:max-w-[90vw] flex flex-col items-center gap-6 transform-gpu md:-translate-y-16 lg:-translate-y-20 mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative text-[clamp(3.25rem,8.5vw,6.5rem)] font-black tracking-tight leading-none"
                    >
                        <span className="relative inline-flex items-center justify-center px-4">
                            <span
                                aria-hidden="true"
                                className="absolute -inset-x-8 -inset-y-6 -z-10 rounded-[3rem] bg-gradient-to-r from-sky-500/25 via-blue-400/10 to-indigo-500/30 blur-3xl"
                            />
                            <span className="relative bg-gradient-to-b from-[#B6CCFF] via-white to-[#88A8FF] bg-clip-text text-transparent [text-shadow:0_12px_45px_rgba(15,23,42,0.45)] drop-shadow-[0_8px_24px_rgba(30,64,175,0.35)]">
                                BLUEPMS
                            </span>
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                            >
                                <ShinyText
                                    text="BLUEPMS"
                                    speed={4}
                                    className="text-white/80 mix-blend-screen"
                                />
                            </span>
                            <span
                                aria-hidden="true"
                                className="absolute inset-x-6 -bottom-5 h-2 rounded-full bg-gradient-to-r from-sky-300/50 via-blue-200/40 to-indigo-300/50 blur-md"
                            />
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="mt-3 text-balance text-[clamp(1.05rem,2.5vw,1.5rem)] font-extrabold text-black"
                    >
                        <span className="font-medium">AI-Driven.</span>{" "}
                        <span className="font-medium">Seamless.</span>{" "}
                        <span className="font-medium">Effortlessly Revolutionary.</span>
                    </motion.p>
                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="mt-4 flex flex-col items-center gap-3 sm:mt-6 sm:flex-row"
                        onAnimationComplete={() => setCtaShown(true)}
                    >
                        <Button
                            onClick={goToFeatures}
                            variant="ghost"
                            className="relative h-auto rounded-full px-10 py-4 text-lg font-semibold bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.25)] transform-gpu transition-transform duration-300 ease-out hover:scale-[1.06] active:scale-[0.98] focus-visible:scale-[1.03] focus-visible:outline-none"
                        >
                            Explore Features
                        </Button>
                        <Button
                            onClick={goToContact}
                            variant="ghost"
                            className="relative h-auto rounded-full px-10 py-4 text-lg font-semibold bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.25)] transform-gpu transition-transform duration-300 ease-out hover:scale-[1.06] active:scale-[0.98] focus-visible:scale-[1.03] focus-visible:outline-none"
                        >
                            Go LIVE NOW!
                        </Button>
                    </motion.div>
                    {showUaeOffer && (
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            className="mt-4 w-full max-w-3xl rounded-3xl border border-white/30 bg-gradient-to-r from-[#0D47A1] via-[#1565C0] to-[#1E88E5] p-5 text-center text-white backdrop-blur-xl shadow-[0_12px_40px_rgba(31,38,135,0.35)] sm:mt-6 sm:p-6"
                        >
                            <p className="text-lg font-bold tracking-wide">UAE Exclusive Launch Deal</p>
                            <p className="mt-2 text-sm font-medium">
                                Front Office &amp; Housekeeping: <span className="font-semibold">$2</span>/room/month
                            </p>
                            <p className="mt-1 text-sm font-medium">
                                Point of Sale: <span className="font-semibold">$50</span>/restaurant/month
                            </p>
                        </motion.div>
                    )}
                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.55, ease: "easeOut" }}
                        className="mt-4 text-balance max-w-3xl text-center text-[clamp(0.95rem,1.6vw,1.15rem)] text-black"
                    >
                        Transform your hospitality business with a 100% cloud-based,
                        AI-integrated property and hotel management platform.
                    </motion.p>
                    {/* Reserved space prevents re-centering/jitter */}
                    <div className="mt-8 w-full">
                        <div className="relative mx-auto max-w-5xl lg:max-w-[90vw] md:min-h-[168px]">
                            {ctaShown && (
                                <motion.div
                                    key="about-boxes"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.55, ease: "easeOut" }}
                                    className="relative md:absolute md:inset-0"
                                >
                                    <AboutUsBoxes immediate />
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/* KEY ADVANTAGES PAGE */}
            <section id="features" className="snap-start snap-always min-h-[100dvh]">
                <KeyAdvantages />
            </section>
            {/* COMPREHENSIVE MODULES PAGE */}
            <section className="snap-start snap-always min-h-[100dvh]">
                <ComprehensiveModules />
            </section>
            {/* CHOOSE BLUEPMS PAGE */}
            <section className="snap-start snap-always min-h-[100dvh]" id="contact">
                <ChooseBluepms />
            </section>
            <section className="snap-start snap-always w-full px-6 pb-16 pt-10">
                <div className="mx-auto w-full max-w-6xl">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {REGIONAL_SERVICE_LIST.map((item) => (
                            <p key={item} className="text-sm font-medium text-white/10">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}