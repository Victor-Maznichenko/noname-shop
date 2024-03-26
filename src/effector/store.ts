import { createStore, createEvent } from 'effector';
import { debug } from 'patronum';

export const buttonClicked = createEvent();

export const $counter = createStore(0);

$counter.on(buttonClicked, (counter:number ) => counter + 1);

debug($counter);
