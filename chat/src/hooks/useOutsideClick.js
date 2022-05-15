import { useEffect } from 'react';

const useOutsideClick = (
  ref,
  callback,
) => {
  useEffect(() => {
    const clickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [callback, ref]);
};

export default useOutsideClick;