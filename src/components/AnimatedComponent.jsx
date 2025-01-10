import { useEffect, useRef, useState } from 'react';

const AnimatedComponent = ({ children, index }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const componentId = `anim-${index}`;

  useEffect(() => {
    
    if (localStorage.getItem(componentId)) {
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          localStorage.setItem(componentId, 'true');
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) observer.observe(ref.current);
    
    window.addEventListener('beforeunload', () => localStorage.clear());
    
    return () => observer.disconnect();
  }, [componentId, hasAnimated]);

  const animationClass = hasAnimated ? 'translate-x-0 opacity-100' 
    : `${index % 2 ? '-translate-x-full' : 'translate-x-full'} opacity-0`;

  return (
    <div 
      ref={ref} 
      className={`transform transition-all duration-700 ease-out ${animationClass}`}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;