import { useNavigate } from "react-router-dom";
import { AlertCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
// import { useTheme } from "../../context/ThemeContext";

interface LandingHeaderProps {
  onCrisisClick: () => void;
}

export function LandingHeader({ onCrisisClick }: LandingHeaderProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  // const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Global Crisis Support Banner */}
      <div className="w-full bg-paper-2 border-b border-line py-2.5 px-6 text-center text-xs font-semibold text-ember relative z-50">
        <span className="inline-flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 animate-pulse" />
          Need help right now?
          <button 
            onClick={onCrisisClick} 
            className="underline hover:text-coral transition-colors ml-1 font-bold cursor-pointer border-none bg-transparent p-0 text-[inherit]"
          >
            Get help immediately &rarr;
          </button>
        </span>
      </div>

      {/* Header Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 w-full border-b border-line bg-paper/85 backdrop-blur-md transition-all duration-300"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div 
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer hover:opacity-85 select-none transition-opacity"
            id="header-logo-container"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-plum text-white shadow-md shadow-plum/20">
              <Sparkles className="h-4.5 w-4.5 fill-current animate-pulse" />
            </div>
            <span className="text-xl font-serif font-black tracking-tight text-slate-900 select-none">
              AuraFlow
            </span>
          </div>

          <nav className="flex items-center gap-4 sm:gap-6">
            {/* Theme Toggle Hidden for Now
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-line hover:bg-paper-2 hover:border-slate-300 text-ink-soft hover:text-ink transition-all cursor-pointer bg-transparent flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            */}
            {user ? (
              <button
                onClick={() => navigate("/dashboard")}
                className="rounded-full bg-plum text-white px-5 py-2 text-xs font-bold hover:opacity-95 transition-all active:scale-95 cursor-pointer shadow-sm shadow-plum/20 border-none"
              >
                Go to Dashboard
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="rounded-full bg-navy text-white px-5 py-2 text-xs font-bold hover:opacity-95 transition-all active:scale-95 cursor-pointer shadow-sm border-none"
              >
                Sign In
              </button>
            )}
          </nav>
        </div>
      </motion.header>
    </>
  );
}
