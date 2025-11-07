import { useEffect, useState } from "react";

export default function VoiceAssistant() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "omnidimension-web-widget";
    script.async = true;
    script.src =
      "https://backend.omnidim.io/web_widget.js?secret_key=BAl";

    script.onload = () => setReady(true);
    document.body.appendChild(script);
  }, []);

  const triggerOriginalLauncher = () => {
    const originalButton = document.getElementById("chat-helper-button");
    if (originalButton) originalButton.click();
  };

  return (
    <>
      <div
        onClick={triggerOriginalLauncher}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 99999,
        }}
        className="
          cursor-pointer flex items-center gap-3 pr-5 pl-3 py-2
          rounded-full shadow-xl bg-gradient-to-r
          from-blue-600 to-cyan-500 text-white font-medium
          backdrop-blur-lg transition-all duration-300
          hover:shadow-2xl hover:scale-105 active:scale-95
        "
      >
        <div className="bg-white/20 p-3 rounded-full shadow-inner">
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='white'
            viewBox='0 0 24 24'
            width='22'
            height='22'
          >
            <path d='M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3zm5-3a1 1 0 1 0-2 0 5 5 0 1 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V21H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-1v-3.08A7 7 0 0 0 17 11z' />
          </svg>
        </div>

        <span className="text-sm tracking-wide">Talk to Receptionist</span>
      </div>
    </>
  );
}
