/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  let value = content;
  if (typeof value !== 'string') {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(name, value);
};

/**
 * 获取localStorage
 */
export const getStore = (name) => {
  if (!name) {
    return null;
  }
  return JSON.parse(window.localStorage.getItem(name));
};

/**
 * 删除localStorage
 */
export const removeStore = (name) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * 存储sessionStorage
 */
export const setSession = (name, content) => {
  if (!name) return;
  let value = content;
  if (typeof value !== 'string') {
    value = JSON.stringify(value);
  }
  window.sessionStorage.setItem(name, value);
};

/**
 * 获取sessionStorage
 */
export const getSession = (name) => {
  if (!name) {
    return null;
  }
  return JSON.parse(window.sessionStorage.getItem(name));
};
