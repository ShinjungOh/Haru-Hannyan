import { create } from 'zustand';

type State = {
  currentDate: Date;
  targetDate: Date;
  targetMonthFirstDay: Date;
};

type Action = {
  setTargetDate: (year: number, month: number) => void;
};

type DateStore = State & Action;

const INITIAL_DATE = new Date();

const useDateStore = create<DateStore>((set) => ({
  currentDate: INITIAL_DATE,
  targetDate: INITIAL_DATE,
  targetMonthFirstDay: new Date(INITIAL_DATE.getFullYear(), INITIAL_DATE.getMonth(), 1),
  setTargetDate: (year: number, month: number) =>
    set({
      targetDate: new Date(year, month - 1),
    }),
}));

export default useDateStore;
