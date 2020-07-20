import {
  PhantomStoreCreator,
  PhantomStore,
  FireFunction,
} from "./phantomStore";
import { PhantomDOMFunction } from "./phantomDOM";

export type Phantom = {
  (phantomStore: PhantomStore, phantomElement: PhantomDOMFunction): {
    fire: FireFunction;
    data: () => any;
    appear: () => HTMLElement;
  };
  createPhantomStore: PhantomStoreCreator;
};
