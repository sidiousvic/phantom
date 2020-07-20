import { PhantomStoreCreator } from "./phantomStore";

export type Phantom = {
  (): {
    fire: () => void;
    data: () => any;
    appear: () => HTMLElement | undefined;
  };
  createPhantomStore: PhantomStoreCreator;
};
