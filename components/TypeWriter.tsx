    "use client";
    import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
    export function TypewriterEffectSmoothDemo() {
    const words = [
        {
        text: "Hi,",
        },
        {
        text: "I'm",
        },
        {
        text: "Surya Prakash.",
        className: "text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
    }
