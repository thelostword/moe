// 防抖函数
const debounce = (fn, delay) => {
  let timeout = null;
  return (...arg) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn.apply(this, arg);
    }, delay);
  };
};

export default debounce;
