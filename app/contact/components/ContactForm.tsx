"use client";
import {
  contactFormState,
  formSubmitted,
} from "@/app/store/atoms/contactFormState";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const ContactForm = () => {
  const setFormData = useSetRecoilState(contactFormState);
  const setFormSubmitted = useSetRecoilState(formSubmitted);
  const formData = useRecoilValue(contactFormState);
  const isFormSubmitted = useRecoilValue(formSubmitted);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted({ formSubmitted: true });
    setTimeout(() => {
      setFormSubmitted({ formSubmitted: false });
      setFormData({ name: "", email: "" });
    }, 10000);
  };
  return (
    <form
      // onSubmit={handleSubmit}
      action={"contact/success"}
      className="bg-white shadow-md rounded-lg p-8 max-w-md w-full transform transition duration-500 hover:shadow-lg hover:scale-105"
      data-netlify="true"
      netlify={true}
      method="POST"
      name="contact"
      netlify-honeypot="bot-field"
      {...({} as any)}
    >
      <input type="hidden" name="form-name" value="contact" />
      <h2 className="text-3xl text-center font-semibold text-gray-800 mb-8">
        Contact Me
      </h2>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="text-gray-700 font-semibold block mb-2"
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
      <div className="mb-6">
        <label
          htmlFor="email"
          className="text-gray-700 font-semibold block mb-2"
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
      <div className="text-center">
        <button
          className="bg-secondary text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondary-dark transition-all duration-300 focus:outline-none transform hover:scale-110"
          type="submit"
          name="button"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
