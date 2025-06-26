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
    <div className="flex items-center justify-center p-4">
      <label
        htmlFor="3d-checkbox"
        className="relative cursor-pointer group"
      >
        {/* Outer 3D Container with Perspective */}
        <motion.div
          className="relative w-20 h-10 perspective-1000"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Main Track with Complex 3D Styling */}
          <motion.div
            className={twMerge(
              "relative w-full h-full rounded-2xl overflow-hidden transition-all duration-700",
              // Ultra-complex 3D shadows and bevels
              "shadow-[inset_0_4px_12px_rgba(0,0,0,0.6),inset_0_-4px_8px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)]",
              // Dynamic background based on state
              checked 
                ? "bg-gradient-to-br from-slate-800 via-slate-900 to-black border-2 border-slate-600/40" 
                : "bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 border-2 border-slate-300/60"
            )}
            animate={{
              rotateX: checked ? -2 : 2,
              rotateY: checked ? 1 : -1,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Inner Track Groove with Extreme Depth */}
            <div className="absolute inset-1 rounded-xl bg-gradient-to-b from-black/60 to-transparent" />
            <div className="absolute inset-1 rounded-xl bg-gradient-to-t from-white/20 to-transparent" />
            
            {/* Animated Background Elements */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                background: checked 
                  ? "radial-gradient(circle at 20% 50%, rgba(148, 163, 184, 0.3), transparent 70%)"
                  : "radial-gradient(circle at 80% 50%, rgba(148, 163, 184, 0.3), transparent 70%)"
              }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Liquid Flow Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              initial={false}
              animate={{
                background: checked
                  ? "linear-gradient(90deg, transparent 0%, rgba(30, 41, 59, 0.8) 50%, rgba(15, 23, 42, 0.9) 100%)"
                  : "linear-gradient(90deg, rgba(148, 163, 184, 0.8) 0%, rgba(100, 116, 139, 0.9) 50%, transparent 100%)"
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            
            {/* Floating Particles Effect */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={twMerge(
                  "absolute w-1 h-1 rounded-full",
                  checked ? "bg-slate-400/60" : "bg-slate-400/60"
                )}
                animate={{
                  x: [10 + i * 15, 50 + i * 10, 10 + i * 15],
                  y: [15 + i * 5, 20 - i * 3, 15 + i * 5],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>
          
          {/* Ultra-Complex 3D Toggle Button */}
          <motion.div
            className="absolute top-1 left-1 z-20"
            initial={false}
            animate={{
              x: checked ? 36 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              mass: 0.8
            }}
          >
            <motion.div
              className="relative w-8 h-8 rounded-xl"
              animate={{
                rotateY: checked ? 180 : 0,
                rotateX: checked ? -5 : 5,
                scale: [1, 1.08, 1],
              }}
              transition={{
                rotateY: { duration: 0.6, ease: "easeInOut" },
                rotateX: { duration: 0.6, ease: "easeInOut" },
                scale: { duration: 0.4, ease: "easeOut" }
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                scale: 1.1,
                rotateZ: checked ? -5 : 5,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              {/* Multi-Layer Button Structure */}
              {/* Base Layer */}
              <div className={twMerge(
                "absolute inset-0 rounded-xl transition-all duration-500",
                "shadow-[0_6px_20px_rgba(0,0,0,0.4),inset_0_1px_3px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.3)]",
                checked 
                  ? "bg-gradient-to-br from-slate-200 via-white to-slate-100" 
                  : "bg-gradient-to-br from-white via-slate-50 to-slate-100"
              )} />
              
              {/* Middle Highlight Layer */}
              <div className={twMerge(
                "absolute inset-[1px] rounded-[10px] transition-all duration-500",
                checked 
                  ? "bg-gradient-to-br from-white/90 to-slate-100/80" 
                  : "bg-gradient-to-br from-white/95 to-slate-50/85"
              )} />
              
              {/* Inner Glow Layer */}
              <motion.div
                className="absolute inset-[2px] rounded-[8px]"
                animate={{
                  background: checked
                    ? "radial-gradient(circle at 30% 30%, rgba(148, 163, 184, 0.4), transparent 60%)"
                    : "radial-gradient(circle at 30% 30%, rgba(148, 163, 184, 0.4), transparent 60%)"
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Icon Container with 3D Transform */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  rotateY: checked ? 0 : 180,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {checked ? (
                    <motion.div
                      key="moon-container"
                      initial={{ opacity: 0, scale: 0.3, rotateX: -90 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, scale: 0.3, rotateX: 90 }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      className="relative"
                    >
                      {/* Icon Glow Effect */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Moon className="w-4 h-4 text-primary/60" strokeWidth={1} />
                      </motion.div>
                      
                      {/* Main Icon */}
                      <Moon 
                        className="w-4 h-4 text-primary relative z-10" 
                        strokeWidth={2} 
                        fill="currentColor"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun-container"
                      initial={{ opacity: 0, scale: 0.3, rotateX: -90 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, scale: 0.3, rotateX: 90 }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      className="relative"
                    >
                      {/* Icon Glow Effect */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.7, 0.3],
                          rotate: [0, 360],
                        }}
                        transition={{
                          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                          rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                        }}
                      >
                        <Sun className="w-4 h-4 text-primary/60" strokeWidth={1} />
                      </motion.div>
                      
                      {/* Main Icon */}
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      >
                        <Sun 
                          className="w-4 h-4 text-primary relative z-10" 
                          strokeWidth={2} 
                          fill="currentColor"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Reflection Layer */}
              <div className="absolute inset-x-[2px] top-[2px] h-3 rounded-t-[8px] bg-gradient-to-b from-white/60 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
        
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="hidden"
          id="3d-checkbox"
        />
      </label>
    </div>
  );
};