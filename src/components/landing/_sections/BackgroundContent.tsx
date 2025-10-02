import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

interface BackgroundContentProps {
  pillText?: string;
  pillIcon?: React.ReactNode;
  headline?: string;
  mainCtaText?: string;
  secondCtaText?: string;
}

const BackgroundContent = ({
  pillText = "New Component",
  pillIcon = <Palette />,
  headline = "Explore the depths of creativity",
  mainCtaText = "Get Started",
  secondCtaText = "Learn More",
}: BackgroundContentProps) => {
  return (
    <div className="select-none">
      {/* Main Content */}
      <div className="absolute top-0 left-0 flex items-center justify-center flex-col w-full h-full z-10 pointer-events-none">
        {/* Pill */}
        <div className="text-cyan-400 w-auto px-4 h-8 flex text-xs md:text-sm justify-center items-center rounded-full font-medium bg-black/20 backdrop-blur-md border border-cyan-400/30 shadow-lg">
          {pillIcon}
          <span className="ml-1">{pillText}</span>
        </div>

        {/* Headline */}
        <h1 className="text-white mt-4 text-4xl md:text-6xl leading-tight text-center tracking-tight max-w-[18ch] font-bold font-sans">
          {headline}
        </h1>

        {/* CTA Buttons */}
        <div className="flex gap-6 mt-8 items-center">
          <Button
            className="px-8 md:px-12 py-6 md:py-8 bg-white text-black rounded-full text-sm md:text-base font-semibold border-none hover:bg-gray-100 hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => {
              console.log("Primary CTA clicked");
              // Add your primary action here
            }}
          >
            {mainCtaText}
          </Button>
          <Button
            variant="outline"
            className="px-8 md:px-12 py-6 md:py-8 rounded-full text-sm md:text-base font-semibold bg-black/20 backdrop-blur-md border border-cyan-400/50 text-white hover:bg-cyan-400/10 hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => {
              console.log("Secondary CTA clicked");
              // Add your secondary action here
            }}
          >
            {secondCtaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundContent;
