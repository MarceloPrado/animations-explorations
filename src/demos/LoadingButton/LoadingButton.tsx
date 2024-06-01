import { useState } from "react";
import { Spinner } from "./Spinner";
import { AnimatePresence, m } from "framer-motion";

const buttonCopy = {
  idle: "Send me a login link",
  loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
  success: "Login link sent!",
};

export function LoadingButton() {
  const [buttonState, setButtonState] = useState("idle");

  return (
    <div className="container flex h-screen items-center justify-center bg-slate-50">
      <button
        type="button"
        className={`flex h-10 w-1/4 items-center rounded bg-blue-500 px-4 py-2 justify-center font-bold  shadow hover:bg-blue-600 ${
          buttonState !== "idle" ? "cursor-wait" : ""
        } relative text-sm font-bold text-center text-white`}
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
        <AnimatePresence initial={false}>
          <m.span
            key={buttonState}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
          >
            {buttonCopy[buttonState]}
          </m.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
