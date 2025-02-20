"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none transition-transform duration-200 ease-out mix-blend-multiply ${
        isHovering ? "scale-150 opacity-70" : "scale-100 opacity-100"
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="w-6 h-6 bg-[#ff4c00] rounded-full mix-blend-difference"></div>
    </div>
  );
}
