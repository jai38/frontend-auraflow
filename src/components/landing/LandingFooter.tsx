import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

interface LandingFooterProps {
  onCrisisClick: () => void;
}

export function LandingFooter({ onCrisisClick }: LandingFooterProps) {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-line bg-paper-2/25 py-12 mt-16 text-xs text-ink-soft relative z-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div 
            onClick={() => navigate("/")}
            className="flex items-center gap-2.5 cursor-pointer hover:opacity-85 select-none transition-opacity"
            id="footer-logo-container"
          >
            <div className="flex h-7.5 w-7.5 items-center justify-center rounded-lg bg-plum text-white shadow-sm shadow-plum/10 select-none">
              <Sparkles className="h-4 w-4 fill-current" />
            </div>
            <span className="text-base font-serif font-black tracking-tight text-slate-900 select-none animate-fade-in">
              AuraFlow
            </span>
          </div>
          <p className="text-center md:text-left text-[11px]">
            A space for self-discovery and peer support. We fit alongside campus care to help you understand what you carry.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <p className="text-[11px] leading-relaxed max-w-md">
            🔒 Private & Secure. We do not share your details with your university. You are in control of your data, always.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onCrisisClick}
              className="text-ember font-bold hover:underline cursor-pointer border-none bg-transparent p-0 text-[inherit]"
            >
              Need help right now? Get help immediately &rarr;
            </button>
            <span className="text-line">|</span>
            <span className="text-ink-soft select-none">&copy; {new Date().getFullYear()} AuraFlow. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
