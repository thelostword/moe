/**
 * 节流
 */
const throttle = (func, delay) => {
  let timer = null;
  return function (...arg) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, arg);
        timer = null;
      }, delay);
    }
  };
};

export default throttle;
