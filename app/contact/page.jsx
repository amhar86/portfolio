"use client";

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
    <section className="py-12 flex justify-center">
      <div className="container mx-auto flex flex-col xl:flex-row gap-6 items-start">
        {/* Contact Form Tile */}
        <div className="flex-[0.8] bg-black border-2 border-red-500 rounded-lg p-6 shadow-lg w-[350px] h-auto">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Contact Me
          </h2>
          <form
            action="https://formspree.io/f/xzzzgdaa"
            method="POST"
            className="space-y-3"
          >
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-700 bg-black text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-700 bg-black text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                required
                pattern="[0-9]{10,15}"
                className="w-full border border-gray-700 bg-black text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className="w-full border border-gray-700 bg-black text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-black transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Information Tile */}
        <div className="flex-[0.6] bg-black border-2 border-red-500 rounded-lg p-6 shadow-lg w-[350px] h-auto">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            My Information
          </h2>
          <ul className="space-y-4">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="text-red-500 text-lg">{item.icon}</div>
                <div>
                  <h3 className="text-md font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
