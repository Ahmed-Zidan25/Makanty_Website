// LogoCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const logos = [
  { src: "/logos/ncr.svg", alt: "NCR Corporation Logo" },
  { src: "/logos/ingenico.svg", alt: "Ingenico Logo" },
  { src: "/logos/verifone.PNG", alt: "Verifone Logo" },
  { src: "/logos/sunmi.PNG", alt: "Sunmi" },
  { src: "/logos/IMIN.svg", alt: "IMIN" },
  { src: "/logos/Feitian.png", alt: "Feitian" },
  { src: "/logos/NewPOS.png", alt: "NewPOS" },
  { src: "/logos/NEXGO.svg", alt: "NEXGO" },
];

const LogoCarousel = () => {
  return (
    <div className="w-full py-6">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="h-10 w-32 md:h-12 md:w-40 opacity-70 hover:opacity-100 transition-opacity mx-auto">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCarousel;
