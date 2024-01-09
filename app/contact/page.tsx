import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function ContactMe() {
  return (
    <main className="container h-about-me-scroll flex justify-center items-center mx-auto px-8 bg-gray-900 p-6 rounded-lg shadow-md">
     <ContactForm />
    </main>
  );
}
