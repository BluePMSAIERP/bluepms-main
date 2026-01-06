"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import PremiumBackground from "@/components/PremiumBackground";

export default function NotFound() {
    return (
        <PremiumBackground>
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 space-y-8">
                <h1 className="text-9xl font-bold text-black/10">404</h1>
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-black tracking-tight">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-black/60 max-w-md mx-auto">
                        The page you are looking for doesn't exist or has been moved.
                        Let's get you back on track.
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-black/80 transition-all active:scale-95"
                >
                    <MoveLeft className="w-5 h-5" />
                    Back to Home
                </Link>
            </div>
        </PremiumBackground>
    );
}
