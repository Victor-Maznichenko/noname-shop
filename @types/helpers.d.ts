/// <reference types="react" />

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

interface ElementOwnProps<E extends ElementType = ElementType> {
  as?: E;
}

type PolymorphicProps<E extends ElementType> = ElementOwnProps<E> &
  Omit<ComponentProps<E>, keyof ElementOwnProps>;
