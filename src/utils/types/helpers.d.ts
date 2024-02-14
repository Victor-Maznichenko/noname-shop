export type DebounceCallback<T extends any[] = []> = (...args: T) => void;

export type HTMLElementEvent<T extends HTMLElement> = Event & {
   target: T;
};
