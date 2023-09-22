export const throttle = (callback: (...args: any[]) => void, ms: number): ((...args: any[]) => void) => {
  let timer: NodeJS.Timeout | null = null;

  return (...args: any[]) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        callback(...args);
      }, ms);
    }
  };
};
