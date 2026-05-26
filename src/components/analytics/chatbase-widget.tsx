"use client";

import { useEffect } from "react";

const chatbaseId = "sLs3DFoAAUCy_fCjkUnPp";

type ChatbaseFn = ((...args: unknown[]) => void) & {
  q?: unknown[][];
};

declare global {
  interface Window {
    chatbase?: ChatbaseFn;
  }
}

export function ChatbaseWidget() {
  useEffect(() => {
    let canceled = false;

    const initChatbaseQueue = () => {
      if (window.chatbase) return;

      const queue: ChatbaseFn = Object.assign(
        (...arguments_: unknown[]) => {
          queue.q?.push(arguments_ as unknown[]);
        },
        { q: [] as unknown[][] },
      );

      window.chatbase = new Proxy(queue, {
        get(target, prop) {
          if (prop === "q") return target.q;
          return (...args: unknown[]) => target(prop, ...args);
        },
      }) as ChatbaseFn;
    };

    const appendScript = () => {
      if (canceled) return;
      if (document.getElementById(chatbaseId)) return;

      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = chatbaseId;
      script.setAttribute("data-domain", "www.chatbase.co");
      document.body.appendChild(script);
    };

    const loadDeferred = () => {
      initChatbaseQueue();
      const win = window as unknown as {
        requestIdleCallback?: (
          callback: IdleRequestCallback,
          options?: IdleRequestOptions,
        ) => number;
      };
      const requestIdleCallbackFn = win.requestIdleCallback;

      if (typeof requestIdleCallbackFn === "function") {
        requestIdleCallbackFn(appendScript, { timeout: 3000 });
        return;
      }
      setTimeout(appendScript, 1200);
    };

    const triggerLoad = () => {
      window.removeEventListener("pointerdown", triggerLoad);
      window.removeEventListener("keydown", triggerLoad);
      window.removeEventListener("scroll", triggerLoad);
      loadDeferred();
    };

    window.addEventListener("pointerdown", triggerLoad, { once: true, passive: true });
    window.addEventListener("keydown", triggerLoad, { once: true, passive: true });
    window.addEventListener("scroll", triggerLoad, { once: true, passive: true });

    return () => {
      canceled = true;
      window.removeEventListener("pointerdown", triggerLoad);
      window.removeEventListener("keydown", triggerLoad);
      window.removeEventListener("scroll", triggerLoad);
    };
  }, []);

  return null;
}
