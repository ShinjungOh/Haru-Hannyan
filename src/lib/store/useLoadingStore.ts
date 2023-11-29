import { create } from 'zustand';

type State = {
  isLoading: boolean;
};

type Action = {
  setIsLoading: (isLoading: boolean) => void;
  setIsLoadingWithTimeout: (timeout: number) => void;
};

type LoadingStore = State & Action;

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) =>
    set({
      isLoading,
    }),
  setIsLoadingWithTimeout: (timeout) => {
    set({
      isLoading: true,
    });

    setTimeout(() => {
      set({
        isLoading: false,
      });
    }, timeout);
  },
}));
