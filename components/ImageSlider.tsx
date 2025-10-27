// components/ImageSlider.tsx
"use client"; // Swiper uses effects and user interaction, so it must be a client component

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ImageSliderProps {
  images: { src: string; alt: string; }[];
}
// components/ImageSlider.tsx (Continued)

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8"> {/* Optional wrapper for centering and max width */}
      <Swiper
        // 1. Core Modules
        modules={[Pagination, Navigation, Autoplay]}
        
        // 2. Swiper Settings
        spaceBetween={30} // Space between slides in pixels
        slidesPerView={1} // Show one slide at a time
        loop={true}       // Enable continuous looping
        
        // 3. Navigation (Arrows)
        navigation={true} 
        
        // 4. Pagination (Dots at the bottom)
        pagination={{ clickable: true }}
        
        // 5. Autoplay (Optional: slides advance automatically)
        autoplay={{
          delay: 4500, // Time in ms before next slide
          disableOnInteraction: false, // Keep playing even after user swipe
        }}
        
        className="mySwiper rounded-xl shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            {/* Using Next.js Image component for optimization */}
            <div className="relative w-full h-96"> 
              <Image
                src={image.src}
                alt={image.alt}
                fill // Fills the parent div (h-96)
                style={{ objectFit: 'cover' }}
                priority={index === 0} // Prioritize loading the first image
                sizes="(max-width: 1024px) 100vw, 800px" // Responsive sizes hint
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};