import { atom, selector } from "recoil";

export const usernameState = atom({
<<<<<<< HEAD
    key: "usernameState",
    default: "남선우",
})

export const usernameLengthState = selector({
    key: "usernameLengthState",
    get: ({ get }) => {
        const username =get(usernameState);
        return username.length;
    },
})
=======
  key: "usernameState",
  default: "변지혜",
});

export const usernameLengthState = selector({
  key: "usernameLengthState",
  get: ({ get }) => {
    const username = get(usernameState);
    return username.length;
  },
});
>>>>>>> 63fe4a19aacac5d28846c56b58c2b5aff0750332
