import { atom, selector } from "recoil";

export const usernameState = atom({
  key: "usernameState",
  default: "김예원",
});

export const usernameLengthState = selector({
  key: "usernameLengthState",
  get: ({ get }) => {
    const username = get(usernameState);
    return username.length;
  },
});
