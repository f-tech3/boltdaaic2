import { useRef, useEffect } from 'react';
import type { RefObject } from 'react';

interface SearchAnimationHook {
  iconRef: RefObject<SVGSVGElement>;
  inputRef: RefObject<HTMLInputElement>;
}

export const useSearchAnimation = (): SearchAnimationHook => {
  const iconRef = useRef<SVGSVGElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const icon = iconRef.current;
    const input = inputRef.current;

    if (!icon || !input) return;

    const handleFocus = () => {
      icon.style.transform = 'scale(1.1) rotate(-10deg)';
      icon.style.transition = 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)';
    };

    const handleBlur = () => {
      icon.style.transform = 'scale(1) rotate(0deg)';
      icon.style.transition = 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)';
    };

    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);

    return () => {
      input.removeEventListener('focus', handleFocus);
      input.removeEventListener('blur', handleBlur);
    };
  }, []);

  return { iconRef, inputRef };
};