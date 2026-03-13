import { useEffect, useRef, useState, ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
}

const SlideInSection = ({ children }: SlideInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={isVisible ? "animate-slide-in-left" : "opacity-0"}
    >
      {children}
    </div>
  );
};

export default SlideInSection;
