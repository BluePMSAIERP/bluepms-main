import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-[50vh] w-full">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-12 w-12 animate-spin text-black/80" />
                <p className="text-sm font-medium text-black/60 animate-pulse">
                    Loading BluePMS...
                </p>
            </div>
        </div>
    );
}
