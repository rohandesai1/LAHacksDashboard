import { useEffect } from 'react';

function BlockScroll(shouldBlock, duration) {
  useEffect(() => {
    if (shouldBlock) {
      document.body.classList.add('no-scroll');
      // block scroll until timeout is over
      const timer = setTimeout(() => {
        document.body.classList.remove('no-scroll');
      }, duration);
      
      // Cleanup function to cover up any potential memory leak yay
      return () => {
        clearTimeout(timer);
        document.body.classList.remove('no-scroll');
      };
    }
  }, [shouldBlock, duration]);
}

export default BlockScroll;