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
          "h-7 px-1 flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full w-[60px] relative cursor-pointer transition duration-200",
          checked ? "bg-cyan-500" : "bg-slate-700 border-slate-500"
        )}
      >
        <motion.div
          initial={false}
          animate={{
            x: checked ? 32 : 0,
            background: "#fff",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
          className="h-[20px] w-[20px] rounded-full shadow-md z-10 flex items-center justify-center"
        >
          <AnimatePresence mode="wait" initial={false}>
            {checked ? (
              <motion.span
                key="moon"
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center text-cyan-500"
              >
                <Moon className="w-4 h-4" />
              </motion.span>
            ) : (
              <motion.span
                key="sun"
                initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center text-yellow-400"
              >
                <Sun className="w-4 h-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
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
