"use client";
import {
  contactFormState,
  formSubmitted,
} from "../../../store/atoms/contactFormState";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ThankYou from "../success";
import FadeEffectWrapper from "../../about-me/components/FadeEffectWrapper";

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const setFormData = useSetRecoilState(contactFormState);
  const formData = useRecoilValue(contactFormState);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const myForm = event.currentTarget;
    const formData: any = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setIsOpen(true))
      .catch((error) => alert(error));
  };

  return (
   <>
    <form
      onSubmit={handleSubmit}
      className="bg-black shadow-md rounded-lg p-8 max-w-md w-full transform transition duration-500 hover:shadow-lg hover:scale-105"
      data-netlify="true"
      netlify={true}
      method="post"
      name="contact"
      netlify-honeypot="bot-field"
      {...({} as any)}
    >
     
      <input type="hidden" name="form-name" value="contact" />
      <FadeEffectWrapper duration={100}>
      <h2 className="text-3xl text-center font-semibold text-white mb-8">
        Contact Me
      </h2>
      </FadeEffectWrapper>
      <FadeEffectWrapper duration={200}>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="text-white font-semibold block mb-2"
        >
          Your Name
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
          className="w-full text-gray-700 px-4 py-3 border rounded-lg focus:outline-none focus:border-primary transition-all duration-300 shadow-sm"
          required
        />
      </div>
      </FadeEffectWrapper>
      <FadeEffectWrapper duration={300}>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="text-whitefont-semibold block mb-2"
        >
          Your Email
        </label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email"
          className="w-full text-gray-700 px-4 py-3 border rounded-lg focus:outline-none focus:border-primary transition-all duration-300 shadow-sm"
          required
        />
      </div>
      </FadeEffectWrapper>
      <FadeEffectWrapper duration={400}>
      <div className="text-center">
        <button
          className="bg-secondary text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondary-dark transition-all duration-300 focus:outline-none transform hover:scale-110"
          type="submit"
          name="button"
        >
          Submit
        </button>
      </div>
      </FadeEffectWrapper>
    </form>
    <ThankYou isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ContactForm;
