import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";

export function AnimatedHeight() {
  const [showExtraContent, setShowExtraContent] = useState(false);

  const [ref, { height }] = useMeasure();

  const onToggleHeight = () => {
    setShowExtraContent((prev) => !prev);
  };

  return (
    <div className="h-full w-full items-center justify-center p-10">
      <button className="button" onClick={onToggleHeight}>
        Toggle height (height: {height})
      </button>
      <motion.div
        animate={{
          height,
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
          },
        }}
        className="absolute right-8 bottom-10 left-8 rounded bg-slate-900 font-normal text-white"
      >
        <motion.div ref={ref} className="px-2 py-2">
          <h1 className="font-bold text-white">Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          <AnimatePresence mode="popLayout">
            {showExtraContent ? (
              <motion.p
                className="pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                This extra content will change the height of the drawer. Some
                even more content to make the drawer taller and taller and
                taller...
              </motion.p>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
