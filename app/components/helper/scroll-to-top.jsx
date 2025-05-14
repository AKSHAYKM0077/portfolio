"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { getWindow, addEventListener, removeEventListener } from "@/utils/browser";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);

  useEffect(() => {
    const win = getWindow();
    if (!win) return;

    const handleScroll = () => {
      if (win.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };

    addEventListener(win, "scroll", handleScroll, { passive: true });
    return () => {
      removeEventListener(win, "scroll", handleScroll, { passive: true });
    };
  }, []);

  const onClickBtn = () => {
    const win = getWindow();
    if (win) {
      win.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
