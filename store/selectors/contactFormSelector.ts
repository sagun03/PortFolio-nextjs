import { selector } from "recoil";
import { contactFormState, formSubmitted } from "../atoms/contactFormState";

export const isFormSubmitted = selector({
  key: "isFormSubmittedSTate",
  get: ({ get }) => {
    const state = get(formSubmitted);
    return state.formSubmitted;
  },
});

export const getData = selector({
  key: "formData",
  get: ({ get }) => {
    const state = get(contactFormState);
    const { name, email } = state;
    return { name, email };
  },
});
