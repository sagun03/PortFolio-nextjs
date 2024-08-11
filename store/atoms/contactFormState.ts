import { atom } from "recoil";

export const contactFormState = atom<{ name: string; email: string; }>({
  key: "contactFormState",
  default: { name: "", email: "" },
});

export const formSubmitted = atom<{ formSubmitted: boolean }>({
  key: "formSubmitted",
  default: {
    formSubmitted: false,
  },
});
