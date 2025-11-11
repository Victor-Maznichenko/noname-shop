/* eslint-disable @typescript-eslint/no-explicit-any */
type Callback<P extends any[], R> = (this: any, ...args: P) => R;
type Nullable<T> = T | null;

export const debounce = <P extends any[], R>(fn: Callback<P, R>, ms: number, ctx?: any) => {
  let timer: Nullable<NodeJS.Timeout> = null;

  return function (this: any, ...args: P) {
    const context = ctx ?? this;

    return new Promise(resolve => {
      clearTimeout(timer!);
      timer = setTimeout(() => {
        resolve(fn.apply(context, args));
      }, ms);
    });
  };
};
