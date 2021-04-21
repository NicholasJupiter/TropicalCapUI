/**
 * 防抖
 * @param func 回調函數
 * @param time 間隔
 */
export function debounce(func: (...args: any[]) => any, time = 500) {
  let timout = 0;
  return function (this: any, ...args: any[]) {
    const that = this;
    timout && clearTimeout(timout);
    timout = setTimeout(() => {
      func.call(that, args);
    }, time);
  };
}
