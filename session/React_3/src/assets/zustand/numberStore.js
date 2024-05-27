import { create } from "zustand";

const useStore = create((set) => ({
<<<<<<< HEAD
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}));

export default useStore;
=======
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useStore;
>>>>>>> 63fe4a19aacac5d28846c56b58c2b5aff0750332
