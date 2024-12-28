"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+1 (289) 556 5327",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "mohamedamhar946@gmail.com",
  },
];

const Contact = () => {
  return (
    <form
      action="https://formspree.io/f/xzzzgdaa"
      method="POST"
      className="space-y-4"
    >
      <div>
        <label className="block text-sm text-gray-400 mb-1">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-700 bg-black text-white"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-700 bg-black text-white"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          className="w-full border border-gray-700 bg-black text-white"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border border-gray-700 bg-black text-white"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-black transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default Contact;

