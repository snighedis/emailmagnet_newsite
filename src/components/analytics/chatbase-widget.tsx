"use client";

import Script from "next/script";

const chatbaseId = "sLs3DFoAAUCy_fCjkUnPp";

export function ChatbaseWidget() {
  return (
    <Script id="chatbase-widget" strategy="afterInteractive">
      {`
        (function(){
          if(!window.chatbase || window.chatbase("getState") !== "initialized"){
            window.chatbase = (...arguments) => {
              if(!window.chatbase.q){ window.chatbase.q = [] }
              window.chatbase.q.push(arguments)
            };
            window.chatbase = new Proxy(window.chatbase, {
              get(target, prop){
                if(prop === "q"){ return target.q }
                return (...args) => target(prop, ...args)
              }
            })
          }
          const onLoad = function(){
            if(document.getElementById("${chatbaseId}")) return;

            const script = document.createElement("script");
            script.src = "https://www.chatbase.co/embed.min.js";
            script.id = "${chatbaseId}";
            script.domain = "www.chatbase.co";
            document.body.appendChild(script)
          };
          if(document.readyState === "complete"){
            onLoad()
          } else {
            window.addEventListener("load", onLoad)
          }
        })();
      `}
    </Script>
  );
}

