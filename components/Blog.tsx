"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const highlights = [
  {
    image: "/images/20221107_151410.webp",
    title: "Best Newcomer 2022 – Prothom Alo IT Department",
    category: "Award",
    time: "Nov 2022",
    link: "https://www.prothomalo.com/anniversary/9s3u12wr91",
    excerpt:
      "Recognized as the Best Newcomer 2022 in the Information Technology department at Prothom Alo, one of the largest media houses in Bangladesh.",
  },
  {
    image: "/images/IMG-20220328-WA0041.jpg",
    title: "Building Digital Products at Prothom Alo",
    category: "Career",
    time: "2022",
    link: "",
    excerpt:
      "Led frontend and backend development for high-traffic news platforms serving millions of daily readers, working with React, Node.js, and microservices architecture.",
  },
  {
    image: "/images/20221106_192237.webp",
    title: "Prothom Alo 24th Anniversary Celebration",
    category: "Event",
    time: "Nov 2022",
    link: "",
    excerpt:
      "A memorable evening celebrating Prothom Alo's 24th anniversary with the entire team — recognizing contributions and achievements across departments.",
  },
  {
    image: "/images/IMG_20221212_211029.jpg",
    title: "Transitioning to Leadership at Navana Group",
    category: "Career",
    time: "2024",
    link: "",
    excerpt:
      "Joined Navana Group as Deputy Manager, Brand Communication — supervising the Web team and managing full stack development, VPS infrastructure, and DevOps pipelines.",
  },
];

export default function Highlights() {
  return (
    <div className="mil-container mil-p-0-90" id="highlights">
      <div className="row">
        <div className="col-lg-8 col-xl-6 mil-mb90">
          <h2 className="mil-fs24 mil-mb30 mil-up">Highlights</h2>
          <p className="mil-fs18 mil-up">
            Key moments and milestones from my{" "}
            <span className="mil-accent">career journey</span> in technology and
            leadership.
          </p>
        </div>
        <div className="col-12">
          <Swiper
            className="mil-blog-slider mil-up"
            style={{ overflow: "hidden" }}
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            speed={800}
            pagination={{
              el: ".mil-swiper-pagination-2",
              type: "fraction",
            }}
          >
            {highlights.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="mil-blog-item">
                  <div className="mil-pub-cover mil-c-swipe mil-c-light">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="mil-scale-img"
                      data-value-1="1"
                      data-value-2="1.25"
                    />
                  </div>
                  <div className="mil-descr">
                    <div className="mil-left">
                      <h3 className="mil-fs20 mil-mb10 mil-up mil-c-gone">
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <ul className="mil-pub-info mil-up">
                        <li className="mil-c-gone">{item.category}</li>
                        <li>{item.time}</li>
                      </ul>
                    </div>
                    <div className="mil-right">
                      <p className="mil-soft mil-fs16 mil-up">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mil-swiper-pagination-2 mil-tac mil-up"></div>
        </div>
      </div>
    </div>
  );
}
