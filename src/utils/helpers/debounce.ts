export const debounce = (func: (...args: unknown[]) => void, delay = 300) => {
  let timer: NodeJS.Timeout;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => func(), delay);
  };
};
