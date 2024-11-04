import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ICount {
  count: number;
}

interface ICountAction {
  setCount: (count: number) => void;
}

type ICountStore = ICount & ICountAction;

export const useCountStore = create<ICountStore>()(persist(devtools((set) => ({
  count: 0,
  setCount: (count: number) => set({ count })
}), {
  name: "count"
}), {
  name: "count storage"
}));
