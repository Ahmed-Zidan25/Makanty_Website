import { useEffect, useRef } from "react";

const LogoSwiper = ({ logos, speed = 40 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!container) return;
      scrollAmount += 1; // كل فريم يتحرك 1 بكسل
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0; // لما يوصل لنص العرض يرجع للبداية (عشان التكرار)
      }
      container.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  // نكرر اللوجوهات مرتين عشان نحصل على حركة سلسة بدون فراغ
  const doubledLogos = [...logos, ...logos];

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap relative w-full"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="flex">
        {doubledLogos.map((logo, index) => (
          <div
            key={index}
            className={`${logo.customSize || "h-10 w-32"} md:h-12 md:w-40 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity mx-4`}
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
