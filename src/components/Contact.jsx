import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
      <form className="max-w-xl mx-auto bg-white shadow-md p-8 rounded-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        <textarea
          placeholder={`Heads up! This form is just for show it doesn’t actually send messages.`}
          rows="5"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
        ></textarea>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
