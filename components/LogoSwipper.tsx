"use client";

import { useEffect, useRef } from "react";

const LogoSwiper = ({ logos, speed = 0.5 }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2; // نص العرض (لأننا مكررين اللوجوهات)
    let pos = 0;

    const animate = () => {
      pos += speed;
      if (pos >= totalWidth) pos = 0; // لما نوصل للنص نرجع للبداية
      track.style.transform = `translateX(${-pos}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [speed]);

  // نكرر اللوجوهات مرتين لتكوين تأثير الانسيابية
  const doubled = [...logos, ...logos];

  return (
    <div className="overflow-hidden w-full relative">
      <div
        ref={trackRef}
        className="flex"
        style={{
          width: `${doubled.length * 200}px`, // عرض تقريبي
          willChange: "transform",
        }}
      >
        {doubled.map((logo, index) => (
          <div
            key={index}
            className={`${
              logo.customSize || "h-10 w-32"
            } md:h-12 md:w-40 flex-shrink-0 mx-4 opacity-70 hover:opacity-100 transition-opacity`}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSwiper;
