"use client";

import Link from "next/link";

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

export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center pb-8 pt-20 px-6">
            {/* Regional List */}
            <div className="w-full max-w-6xl mb-16">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {REGIONAL_SERVICE_LIST.map((item) => (
                        <p key={item} className="text-sm font-medium text-white/10">
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            {/* Seamless, untinted liquid-glass pill (no frost) */}
            <nav
                aria-label="Footer"
                className="relative inline-flex items-center px-2 py-1 rounded-full text-sm text-gray-900"
            >
                {/* 1) Transparent glass body */}
                <span
                    aria-hidden
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: "rgba(255,255,255,0.03)",
                    }}
                />
                {/* 2) Single continuous rim */}
                <span
                    aria-hidden
                    className="absolute inset-0 rounded-[inherit] pointer-events-none"
                    style={{
                        padding: 1,
                        background: "linear-gradient(#ffffffAA,#ffffffAA)",
                        WebkitMask:
                            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        boxShadow:
                            "inset 0 1px 2px rgba(255,255,255,0.45), 0 8px 24px rgba(12,18,28,0.20)",
                    }}
                />
                {/* 3) Gloss layer */}
                <span
                    aria-hidden
                    className="absolute inset-0 rounded-[inherit] pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0) 70%)",
                        maskImage:
                            "radial-gradient(140% 90% at 50% -10%, #000 20%, transparent 60%)",
                        WebkitMaskImage:
                            "radial-gradient(140% 90% at 50% -10%, #000 20%, transparent 60%)",
                        opacity: 0.3,
                    }}
                />

                {/* 4) Content */}
                <div className="relative z-10 flex items-center gap-0 select-none text-white/80">
                    <span className="px-4 py-2">
                        © 2025 <span className="font-semibold text-white">BLUEPMS</span>
                    </span>

                    <span className="px-4 py-2 opacity-50">|</span>

                    <Link
                        href="/contact"
                        className="px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-colors hover:text-white"
                    >
                        Contact Us
                    </Link>

                    <span className="px-4 py-2 opacity-50">|</span>

                    <Link
                        href="/privacy" // Assuming privacy page exists or will exist
                        className="px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-colors hover:text-white"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </nav>
        </footer>
    );
}
