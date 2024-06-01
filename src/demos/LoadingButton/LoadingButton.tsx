import { useState } from "react";
import { Spinner } from "./Spinner";
import { AnimatePresence, motion } from "framer-motion";

const buttonCopy = {
  idle: "Send me a login link",
  loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
  success: "Login link sent!",
};

export function LoadingButton() {
  const [buttonState, setButtonState] = useState("idle");

  return (
    <div className="container flex h-screen w-screen items-center justify-center ">
      <button
        type="button"
        className={`flex h-10 w-48 items-center justify-center rounded bg-blue-500 px-4 py-2 font-bold shadow hover:bg-blue-600${
          buttonState !== "idle" ? "cursor-wait" : ""
        }`}
        disabled={buttonState !== "idle"}
        onClick={() => {
          // This code is just a placeholder
          setButtonState("loading");

          setTimeout(() => {
            setButtonState("success");
          }, 1750);

          setTimeout(() => {
            setButtonState("idle");
          }, 3500);
        }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            className="text-center font-bold text-sm text-white"
            key={buttonState}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25, transition: { duration: 0.15 } }}
            transition={{
              type: "spring",
              duration: 0.3,
              bounce: 0,
            }}
          >
            {buttonCopy[buttonState]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
