"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const projects = [
  { image: "/images/IMG-20221106-WA0031.jpg", alt: "Receiving Prothom Alo Best Newcomer 2022 Award" },
  { image: "/images/IMG-20221106-WA0061.jpg", alt: "Team at Prothom Alo 24th Anniversary Event" },
  { image: "/images/IMG-20221107-WA0008.jpg", alt: "Award Winners Group Photo on Stage" },
  { image: "/images/20221106_192237.webp", alt: "Prothom Alo Best Newcomer 2022 Award Crest" },
  { image: "/images/IMG-20221106-WA0011.jpg", alt: "Full Team Photo at Prothom Alo" },
];

export default function Portfolio() {
  return (
    <>
      <div className="mil-container" id="portfolio">
        <div className="row">
          <div className="col-lg-8 mil-mb90">
            <h2 className="mil-fs24 mil-mb30 mil-up">Portfolio</h2>
            <p className="mil-fs18 mil-up">
              What sets me apart is not just my{" "}
              <span className="mil-accent">technical expertise</span> but also
              my commitment to delivering great results.
            </p>
          </div>
        </div>
      </div>
      <div className="mil-container-out mil-p-0-90">
        <Swiper
          className="mil-portfolio-slider mil-up mil-c-swipe mil-c-light"
          modules={[Pagination]}
          slidesPerView={1}
          speed={800}
          pagination={{
            el: ".mil-swiper-pagination",
            type: "fraction",
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="mil-portfolio-item">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="mil-scale-img"
                  data-value-1="1"
                  data-value-2="1.25"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mil-swiper-pagination mil-tac mil-up"></div>
      </div>
    </>
  );
}
