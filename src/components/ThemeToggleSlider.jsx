import { useState, useEffect } from "react";

function Toggle() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`
        relative
        w-40 h-16
        rounded-full
        transition-colors duration-300
        ${isDark ? "bg-blue-700" : "bg-gray-300"}
      `}
    >
      {/* Knob */}
      <span
        className={`
          bg-gray-900
          absolute top-2 left-2
          w-12 h-12
          rounded-full bg-white
          shadow-xl
          flex items-center justify-center
          text-2xl
          transform transition-transform duration-300
          ${isDark ? "translate-x-24" : "translate-x-0"}
        `}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

export default Toggle;
