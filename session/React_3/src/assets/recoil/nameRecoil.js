import { atom, selector } from "recoil";

export const usernameState = atom({
  key: "usernameState",
<<<<<<< HEAD
  default: "김예원",
=======
  default: "변지혜",
>>>>>>> 63fe4a19aacac5d28846c56b58c2b5aff0750332
});

export const usernameLengthState = selector({
  key: "usernameLengthState",
  get: ({ get }) => {
    const username = get(usernameState);
    return username.length;
  },
});
