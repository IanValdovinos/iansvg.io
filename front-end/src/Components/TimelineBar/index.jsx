import { useEffect, useRef } from "react";
import styles from "./TimelineBar.module.css";

function TimelineBar({ className }) {
  const timelineRef = useRef(null);
  const markerRef = useRef(null);
  const animationFrame = useRef(null);
  const currentOffset = useRef(0); // actual drawn marker position
  const targetOffset = useRef(0); // scroll-based marker position

  useEffect(() => {
    const updateTargetOffset = () => {
      const timeline = timelineRef.current;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const timelineRect = timeline.getBoundingClientRect();
      const timelineTop = scrollY + timelineRect.top;
      const timelineHeight = timeline.offsetHeight;

      const markerY = scrollY + windowHeight * 0.5; // simulate sticky at 50vh
      let offset = markerY - timelineTop;
      offset = Math.max(0, Math.min(timelineHeight, offset));

      targetOffset.current = offset;
    };

    const animate = () => {
      const timeline = timelineRef.current;
      const marker = markerRef.current;
      const timelineHeight = timeline.offsetHeight;

      // LERP toward target
      currentOffset.current +=
        (targetOffset.current - currentOffset.current) * 0.03;

      const percent = (currentOffset.current / timelineHeight) * 100;

      marker.style.top = `${currentOffset.current}px`;
      timeline.style.setProperty("--marker-top", `${percent}%`);

      animationFrame.current = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      updateTargetOffset();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateTargetOffset);

    updateTargetOffset();
    animate();

    return () => {
      cancelAnimationFrame(animationFrame.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateTargetOffset);
    };
  }, []);

  return (
    <div className={`${styles.timelineWrapper} ${className}`}>
      <div ref={timelineRef} className={styles.timeline}>
        <div ref={markerRef} className={styles.marker}></div>
      </div>
    </div>
  );
}

export default TimelineBar;
