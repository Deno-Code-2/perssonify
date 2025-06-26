import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export const Switch = ({
  checked,
  setChecked,
}: {
  checked: boolean,
  setChecked: (checked: boolean) => void,
}) => {
  return (
    <form className="flex space-x-4 antialiased items-center">
      <label
        htmlFor="checkbox"
        className={twMerge(
          "h-8 px-1 flex items-center relative cursor-pointer transition-all duration-500 rounded-full w-[64px]",
          // Deep inset shadow for depth + outer elevation
          "shadow-[inset_0_3px_6px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.25)]",
          // Gradient background for depth
          checked 
            ? "bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-700" 
            : "bg-gradient-to-b from-slate-500 via-slate-600 to-slate-800 border border-slate-400/30"
        )}
      >
        {/* Deep track groove */}
        <div className="absolute inset-1 rounded-full bg-black/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]" />
        
        {/* Liquid fill effect */}
        <motion.div
          initial={false}
          animate={{
            x: checked ? "100%" : "0%",
            scaleX: checked ? 1 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            mass: 0.8
          }}
          className={twMerge(
            "absolute top-1 bottom-1 left-1 right-1/2 rounded-full",
            "bg-gradient-to-r opacity-30",
            checked 
              ? "from-cyan-200 to-cyan-300" 
              : "from-amber-200 to-amber-300"
          )}
          style={{
            transformOrigin: checked ? "right" : "left"
          }}
        />
        
        {/* Main button with liquid movement */}
        <motion.div
          initial={false}
          animate={{
            x: checked ? 30 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 28,
            mass: 1.2
          }}
          className="relative z-20"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            className={twMerge(
              "h-[24px] w-[24px] rounded-full relative",
              // Deep button shadows for 3D effect
              "bg-gradient-to-b from-white via-gray-50 to-gray-200",
              "shadow-[0_3px_6px_rgba(0,0,0,0.3),0_1px_3px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_1px_rgba(0,0,0,0.1)]",
              "border border-gray-300/50"
            )}
          >
            {/* Inner depth ring */}
            <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/60 to-transparent" />
            
            {/* Icon glow effect */}
            <div className={twMerge(
              "absolute inset-[2px] rounded-full transition-all duration-300",
              checked 
                ? "bg-gradient-radial from-cyan-100/40 to-transparent" 
                : "bg-gradient-radial from-amber-100/40 to-transparent"
            )} />
            
            {/* Icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait" initial={false}>
                {checked ? (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center text-primary"
                  >
                    <Moon className="w-4 h-4" strokeWidth={2} fill="currentColor" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center text-primary"
                  >
                    <Sun className="w-4 h-4" strokeWidth={2} fill="currentColor" />
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Liquid ripple effect */}
        <motion.div
          key={checked ? "dark" : "light"}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={twMerge(
            "absolute inset-0 rounded-full pointer-events-none",
            checked ? "bg-cyan-400/20" : "bg-amber-400/20"
          )}
        />
        
        {/* Top highlight for depth */}
        <div className="absolute inset-x-2 top-[3px] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full" />
        
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="hidden"
          id="checkbox"
        />
      </label>
    </form>
  );
};