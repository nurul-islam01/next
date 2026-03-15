"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    ScrollSmoother: any;
    ScrollToPlugin: any;
  }
}

export default function GsapProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger as any;
    const ScrollSmoother = window.ScrollSmoother as any;
    const ScrollToPlugin = window.ScrollToPlugin as any;

    if (!gsap || !ScrollTrigger || !ScrollSmoother) return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    // Preloader
    const preloaderTimeline = gsap.timeline();
    let curtainWidth: string;
    if (window.innerWidth < 992) {
      curtainWidth = "0";
    } else if (window.innerWidth < 1200) {
      curtainWidth = "30%";
    } else {
      curtainWidth = "35%";
    }

    preloaderTimeline
      .to(".mil-preloader .mil-curtain", {
        width: curtainWidth,
        ease: "sine",
        duration: 0.4,
        delay: 0.2,
        onComplete: () => ScrollTrigger.refresh(),
      })
      .to(".mil-preloader .mil-load", {
        width: "100%",
        ease: "sine",
        duration: 1,
        onComplete: () => ScrollTrigger.refresh(),
      })
      .to(".mil-preloader", {
        opacity: 0,
        ease: "sine",
        duration: 0.4,
        delay: 0.2,
        onComplete: () => {
          ScrollTrigger.refresh();
          const hash = window.location.hash;
          if (hash) {
            try {
              const target = document.querySelector(hash);
              if (target) {
                const offsetY = window.innerWidth < 992 ? 180 : 90;
                gsap.to(window, {
                  duration: 1,
                  ease: "sine",
                  scrollTo: { y: hash, offsetY },
                  delay: 0.15,
                  onComplete: () => ScrollTrigger.refresh(),
                });
              }
            } catch {
              // Ignore when scroll or hash handling is restricted
            }
          }
        },
      });

    // Smooth scroll for nav links and logo (#home). Do not update URL (replaceState/hash) – it conflicts with Next.js App Router and throws "insecure".
    function handleHashClick(event: MouseEvent) {
      const link = (event.target as HTMLElement).closest("a");
      if (!link) return;
      const targetId = link.getAttribute("href");
      if (!targetId?.startsWith("#")) return;
      const isNavOrLogo =
        link.classList.contains("mil-logo") || link.closest(".mil-onepage-menu");
      if (!isNavOrLogo) return;
      event.preventDefault();
      event.stopPropagation();
      // Close mobile navbar when a menu link is clicked
      document.querySelector(".mil-sidebar")?.classList.remove("mil-active");
      document.querySelector(".mil-menu-btn")?.classList.remove("mil-active");
      const offsetY = window.innerWidth < 992 ? 180 : 90;
      gsap.to(window, {
        duration: 1,
        ease: "sine",
        scrollTo: { y: targetId, offsetY },
      });
    }

    document.body.addEventListener("click", handleHashClick, true);

    // Cursor follower
    const follower = document.querySelector(
      ".mil-cursor-follower"
    ) as HTMLElement;
    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    gsap.ticker.add(() => {
      posX += (mouseX - posX) / 29;
      posY += (mouseY - posY) / 29;
      gsap.set(follower, { css: { left: posX, top: posY } });
    });

    function addHoverEffect(selector: string, className: string) {
      document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener("mouseenter", () =>
          follower.classList.add(className)
        );
        el.addEventListener("mouseleave", () =>
          follower.classList.remove(className)
        );
      });
    }

    addHoverEffect(".mil-c-light", "mil-light-active");
    addHoverEffect(".mil-c-dark", "mil-dark-active");
    addHoverEffect(".mil-c-gone", "mil-gone-active");
    addHoverEffect(".mil-c-view", "mil-view-active");
    addHoverEffect(".mil-c-next", "mil-next-active");
    addHoverEffect(".mil-c-read", "mil-read-active");
    addHoverEffect(".mil-c-swipe", "mil-swipe-active");

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Menu toggle
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("mil-menu-btn")) {
        target.classList.toggle("mil-active");
        document.querySelector(".mil-sidebar")?.classList.toggle("mil-active");
      }
    });

    const menu = document.querySelector(".mil-main-menu");
    const sidebar = document.querySelector(".mil-sidebar");
    const menuBtn = document.querySelector(".mil-menu-btn");

    if (menu && menu.classList.contains("mil-onepage-menu")) {
      menu.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        if (target.matches("li a")) {
          sidebar?.classList.remove("mil-active");
          menuBtn?.classList.remove("mil-active");
        }
      });
    }

    // Scroll progress bar
    gsap.to(".mil-progress", {
      height: "100%",
      ease: "sine",
      scrollTrigger: { scrub: 0.3 },
    });

    // Scroll-in animations
    document.querySelectorAll(".mil-up").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60, scale: 0.96, ease: "sine" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: section,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Scale image animations
    document.querySelectorAll(".mil-scale-img").forEach((section) => {
      let value1 = parseFloat(
        section.getAttribute("data-value-1") || "1"
      );
      const value2 = parseFloat(
        section.getAttribute("data-value-2") || "1"
      );
      if (window.innerWidth < 1200) {
        value1 = Math.max(0.95, value1);
      }
      gsap.fromTo(
        section,
        { ease: "sine", scale: value1 },
        {
          scale: value2,
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Add class on scroll
    document.querySelectorAll(".mil-add-class").forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        toggleActions: "play none none reverse",
        onEnter: () => element.classList.add("mil-added"),
        onLeaveBack: () => element.classList.remove("mil-added"),
      });
    });

    // Progress bars
    document.querySelectorAll(".mil-prog").forEach((progressBar) => {
      const widthPercentage = progressBar.getAttribute("data-number");
      gsap.fromTo(
        progressBar,
        { ease: "sine", width: "0%" },
        {
          width: `${widthPercentage}%`,
          scrollTrigger: {
            trigger: progressBar,
            toggleActions: "play none none reverse",
            once: true,
          },
          duration: 2,
          ease: "sine",
        }
      );
    });
  }, []);

  return (
    <div id="smooth-wrapper" className="mil-page-wrapper">
      {children}
    </div>
  );
}
