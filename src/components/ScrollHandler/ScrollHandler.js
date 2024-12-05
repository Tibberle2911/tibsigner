import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ScrollHandler.css";

const ScrollHandler = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const isProjectPage = location.pathname.includes("/projects/");
    document.body.classList.toggle("default-scroll", isProjectPage);
    document.body.classList.toggle("custom-scroll", !isProjectPage);

    if (isProjectPage) return;

    let lastTouchY = 0;
    let isThrottled = false;

    const throttle = (callback, delay) => {
      if (isThrottled) return;
      isThrottled = true;
      setTimeout(() => {
        callback();
        isThrottled = false;
      }, delay);
    };

    const scrollToNextSection = () => {
      const nextSection = document.getElementById("main");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const scrollToHeroSection = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleWheelEvent = (e) => {
      throttle(() => {
        if (e.deltaY > 0) {
          scrollToNextSection();
        } else {
          scrollToHeroSection();
        }
      }, 0);
    };

    const handleTouchStart = (e) => {
      lastTouchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      throttle(() => {
        const currentY = e.touches[0].clientY;
        if (lastTouchY > currentY + 5) {
          scrollToNextSection();
        } else if (lastTouchY < currentY - 5) {
          scrollToHeroSection();
        }
      }, 0);
    };

    const handleKeydown = (e) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        scrollToNextSection();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        scrollToHeroSection();
      }
    };

    window.addEventListener("wheel", handleWheelEvent, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [location]);

  return children;
};

export default ScrollHandler;
