import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export function MenuBar({
  items,
  onItemClick,
  activeItemValue,
}: {
  items: { label: string; value: string }[];
  onItemClick: (item: string) => void;
  activeItemValue: string;
}) {
  const [indicator, setIndicator] = useState(activeItemValue);

  return (
    <div className="flex items-center justify-center p-4 text-white">
      {items.map((item) => (
        <button
          className="relative cursor-pointer rounded-lg px-4 py-2 text-black text-xs focus:ring-offset-transparent"
          key={item.value}
          onFocus={() => {
            console.log(item.value);
            return setIndicator(item.value);
          }}
          onClick={() => {
            onItemClick(item.value);
          }}
          onMouseEnter={() => setIndicator(item.value)}
          onMouseLeave={() => setIndicator(item.value)}
        >
          <span>{item.label}</span>
          <AnimatePresence initial={false}>
            {indicator === item.value ? (
              <motion.div
                className="absolute inset-0 cursor-pointer rounded-lg bg-blend-overlay px-4 py-2 text-black text-xs  pointer-events-none"
                style={{
                  background: "rgba(0,0,0,.05)",
                }}
                layoutId={"highlight"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            ) : null}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
}
