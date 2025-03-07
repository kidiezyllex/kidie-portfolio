import { useState, useEffect } from 'react';
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);
  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 430);
      }
    };
    window.addEventListener('resize', checkIsMobile);
    checkIsMobile(); // Kiểm tra lần đầu khi mount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  // const isMobile = true
  return isMobile;
}
