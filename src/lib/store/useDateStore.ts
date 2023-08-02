import { create } from 'zustand';

type State = {
  currentDate: Date;
  targetDate: Date;
  targetMonthFirstDay: Date;
};

type Action = {
  prevDate: () => void;
  nextDate: () => void;
};

type DateStore = State & Action;

const useDateStore = create<DateStore>((set) => ({
  currentDate: new Date(),
  targetDate: new Date(),
  targetMonthFirstDay: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  prevDate: () =>
    set(({ targetDate }) => ({
      targetDate: new Date(targetDate.getFullYear(), targetDate.getMonth() - 1),
      targetMonthFirstDay: new Date(targetDate.getFullYear(), targetDate.getMonth() - 1, 1),
    })),
  nextDate: () =>
    set(({ targetDate }) => ({
      targetDate: new Date(targetDate.getFullYear(), targetDate.getMonth() + 1),
      targetMonthFirstDay: new Date(targetDate.getFullYear(), targetDate.getMonth() + 1, 1),
    })),
}));

export default useDateStore;
