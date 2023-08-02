import { create } from 'zustand';

type State = {
  currentDate: Date;
  targetDate: Date;
};

type Action = {
  prevDate: () => void;
  nextDate: () => void;
};

type DateStore = State & Action;

const useDateStore = create<DateStore>((set) => ({
  currentDate: new Date(),
  targetDate: new Date(),
  prevDate: () =>
    set(({ targetDate }) => ({ targetDate: new Date(targetDate.getFullYear(), targetDate.getMonth() - 1) })),
  nextDate: () =>
    set(({ targetDate }) => ({ targetDate: new Date(targetDate.getFullYear(), targetDate.getMonth() + 1) })),
}));

export default useDateStore;
