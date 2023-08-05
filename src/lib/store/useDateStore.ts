import { create } from 'zustand';

type State = {
  currentDate: Date;
  targetDate: Date;
};

type Action = {
  getFirstDayOfMonth: (date: Date) => Date;
  setTargetDate: (year: number, month: number) => void;
};

type DateStore = State & Action;

const INITIAL_DATE = new Date();

const useDateStore = create<DateStore>((set) => ({
  currentDate: INITIAL_DATE,
  targetDate: INITIAL_DATE,
  getFirstDayOfMonth: (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1),
  setTargetDate: (year: number, month: number) =>
    set({
      targetDate: new Date(year, month - 1),
    }),
}));

export default useDateStore;
