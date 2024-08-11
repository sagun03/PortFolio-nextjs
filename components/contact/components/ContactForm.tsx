"use client";
import {
  contactFormState,
  formSubmitted,
} from "../../../store/atoms/contactFormState";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ThankYou from "../success";
import FadeEffectWrapper from "../../about-me/components/FadeEffectWrapper";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const setFormData = useSetRecoilState(contactFormState);
  const formData = useRecoilValue(contactFormState);
  const [status, setStatus] = useState<null | string>(null as null | string);
  const [error, setError] = useState<null | string>(null as null | string);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const myForm = event.currentTarget;
    const formData: any = new FormData(myForm);
    try {
      setStatus("pending");
      setError(null);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.status === 200) {
        setStatus("ok");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(`${e}`);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-black shadow-md rounded-lg p-8 max-w-md w-full transform transition duration-500 hover:shadow-lg hover:scale-105"
        name="contact"
        data-netlify="true"
      netlify={true}
      method="post"
      netlify-honeypot="bot-field"
        {...({} as any)}
      >
        <input type="hidden" name="form-name" value="contact" />
        <FadeEffectWrapper duration={100}>
          <h2 className="text-3xl text-center font-semibold text-white mb-2">
            Contact Me
          </h2>
        </FadeEffectWrapper>
        <FadeEffectWrapper duration={300}>
          <div className="text-center mb-2">
        {status === "ok" && (
          <div className="flex justify-center gap-1 text-green-500">
            <CheckCircleOutlineIcon sx={{ color: 'green'}}/>
            Submitted!
          </div>
        )}
        {status === "error" && (
          <div className="flex justify-center gap-1 text-red-500">
            <ErrorOutlineIcon sx={{ color: 'red'}} />
            {error}
          </div>
        )}
        </div>
        </FadeEffectWrapper>
        <FadeEffectWrapper duration={200}>
          <div className="mb-6 mt-4">
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
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-whitefont-semibold block mb-2"
            >
              Message
            </label>
            <input
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              type="message"
              placeholder="Your Message"
              className="w-full text-gray-700 px-4 py-3 border rounded-lg focus:outline-none focus:border-primary transition-all duration-300 shadow-sm"
            />
          </div>
        </FadeEffectWrapper>
        <FadeEffectWrapper duration={500}>
          <div className="text-center mb-2">
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
      {/* <ThankYou isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </>
  );
};

export default ContactForm;


