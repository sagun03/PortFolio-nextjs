import { atom } from "recoil";

export const contactFormState = atom<{ name: string; email: string; message: string; }>({
  key: "contactFormState",
  default: { name: "", email: "", message: "" },
});

export const formSubmitted = atom<{ formSubmitted: boolean }>({
  key: "formSubmitted",
  default: {
    formSubmitted: false,
  },
});
