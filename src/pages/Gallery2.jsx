import React, { useEffect, useRef } from "react";
import "./Gallery.css";

const Gallery2 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (leftRef.current && rightRef.current) {
        leftRef.current.style.transform = `translateX(${-scrollY * 0.4}px)`;
        rightRef.current.style.transform = `translateX(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images1 = [
    "https://picsum.photos/id/1011/600/400",
    "https://picsum.photos/id/1012/600/400",
    "https://picsum.photos/id/1013/600/400",
    "https://picsum.photos/id/1014/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1015/600/400",
  ];

  const images2 = [    
    "https://picsum.photos/id/1011/600/400",
    "https://picsum.photos/id/1012/600/400",
    "https://picsum.photos/id/1013/600/400",
    "https://picsum.photos/id/1014/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1015/600/400",
  ];

  return (
    <div className="gallery-scroll-section">
      Row 1
      <div className="lane-wrapper">
        <div className="lane" ref={leftRef}>
          {[...images1, ...images1].map((src, i) => (
            <img src={src} alt={`img1-${i}`} key={i} />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="lane-wrapper">
        <div className="lane" ref={rightRef}>
          {[...images2, ...images2].map((src, i) => (
            <img src={src} alt={`img2-${i}`} key={i} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Gallery2;