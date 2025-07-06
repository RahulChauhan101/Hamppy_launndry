import React, { useEffect, useRef } from "react";
import "./Gallery.css";

const Gallery = () => {
  const lanesLeft = useRef([]);
  const lanesRight = useRef([]);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > prevScrollY.current ? 1 : -1;
      const delta = Math.abs(currentScroll - prevScrollY.current);
      prevScrollY.current = currentScroll;

      lanesLeft.current.forEach((el) => {
        if (el) {
          const current = getTranslateX(el);
          el.style.transform = `translateX(${current - delta * 0.4 * direction}px)`;
        }
      });

      lanesRight.current.forEach((el) => {
        if (el) {
          const current = getTranslateX(el);
          el.style.transform = `translateX(${current + delta * 0.4 * direction}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to extract current translateX
  const getTranslateX = (el) => {
    const match = el.style.transform.match(/translateX\((-?\d+\.?\d*)px\)/);
    return match ? parseFloat(match[1]) : 0;
  };

  const images1 = [
    
    
    "https://picsum.photos/id/1011/600/400",
    "https://picsum.photos/id/1012/600/400",
    "https://picsum.photos/id/1013/600/400",
    "https://picsum.photos/id/1014/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1011/600/400",
    "https://picsum.photos/id/1012/600/400",
    "https://picsum.photos/id/1013/600/400",
    "https://picsum.photos/id/1014/600/400",
    "https://picsum.photos/id/1015/600/400",
  ];

  const images2 = [
    "https://picsum.photos/id/1021/600/400",
    "https://picsum.photos/id/1022/600/400",
    "https://picsum.photos/id/1023/600/400",
    "https://picsum.photos/id/1024/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1011/600/400",
    "https://picsum.photos/id/1012/600/400",
    "https://picsum.photos/id/1013/600/400",
    "https://picsum.photos/id/1014/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1012/600/400",
    "https://picsum.photos/id/1013/600/400",
    "https://picsum.photos/id/1014/600/400",
    "https://picsum.photos/id/1015/600/400",

  ];

  return (
    <div className="gallery-scroll-section">
      {/* Lane 1: Scrolls left on scroll down */}
      <div className="lane-wrapper">
        <div
          className="lane"
          ref={(el) => (lanesLeft.current[0] = el)}
        >
          {[...images1, ...images1].map((src, i) => (
            <img src={src} alt={`img1-${i}`} key={i} />
          ))}
        </div>
      </div>

      {/* Lane 2: Scrolls right on scroll down */}
      <div className="lane-wrapper">
        <div
          className="lane"
          ref={(el) => (lanesRight.current[0] = el)}
        >
          {[...images2, ...images2].map((src, i) => (
            <img src={src} alt={`img2-${i}`} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
