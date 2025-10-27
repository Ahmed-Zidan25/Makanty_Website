"use client"; 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

interface ImageSliderProps { images: { src: string; alt: string; }[]; }
export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
     return (
         <div className="w-full max-w-4xl mx-auto my-8">
             <Swiper
              modules={[Pagination, Navigation, Autoplay]}
               spaceBetween={30}
                slidesPerView={1}
                 loop={true} 
                  navigation={true} 
                   pagination={{ clickable: true }}
                    autoplay={{ delay: 4500, disableOnInteraction: false }}
                     className="mySwiper rounded-xl shadow-lg">
                         {images.map((image, index) => (
                             <SwiperSlide key={index}>
                                 <div className="relative w-full h-96"> 
                                     <Image
                                      src={image.src}
                                       alt={image.alt}
                                        fill 
                                         style={{ objectFit: 'cover' }}
                                          priority={index === 0}
                                           sizes="(max-width: 1024px) 100vw, 800px" />
                                            </div>
                                             </SwiperSlide>
                                             ))}
                                              </Swiper>
                                               </div>
                                               );
                                            };