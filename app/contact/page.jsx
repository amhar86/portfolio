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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData); // Convert FormData to a plain object

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        e.target.reset(); // Clear the form
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left Side: Form */}
          <div className="flex-1 border border-accent p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Me</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Name</label>
                <Input
                  name="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-700 bg-black text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-700 bg-black text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
                <Input
                  name="phone"
                  placeholder="Your Phone Number"
                  className="w-full border border-gray-700 bg-black text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Message</label>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full border border-gray-700 bg-black text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-black transition"
              >
                Send Message
              </button>
            </form>

          </div>

          {/* Right Side: Info Tile */}
          <div className="flex-1 border border-accent p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">My Information</h2>
            <ul className="space-y-4">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="text-red-500 text-xl">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
