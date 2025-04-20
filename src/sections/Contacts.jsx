import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_idtqmuw',
        'template_zcc9o1e',
        {
          from_name: form.name,
          to_name: 'P.Tarankumar',
          from_email: form.email,
          to_email: 'ptarankumar@gmail.com',
          message: form.message,
        },
        'IN4JLulTjKoYeT2Zf' // Replace this with your actual public key from EmailJS
      );

      alert('Your message has been sent!');
      setForm({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-20" id='contacts'>
      <div className="relative min-h-screen flex items-center justify-center flex-col text-center">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <h3 className="head-text z-10">Let's talk</h3>
        <p className="text-lg text-white/70 mt-3 z-10 max-w-xl">
          Whether you're looking to build a new website, improve your existing platform,
          or bring a unique project to life — I'm here to help.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col space-y-3 mt-6 z-10 w-full max-w-md"
        >
          <label className="space-y-1 text-left">
            <span className="field-label text-white">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="field-input p-2 rounded bg-gray-800 text-white"
              placeholder="Enter your name"
            />
          </label>

          <label className="space-y-1 text-left">
            <span className="field-label text-white">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="field-input p-2 rounded bg-gray-800 text-white"
              placeholder="example@gmail.com"
            />
          </label>

          <label className="space-y-1 text-left">
            <span className="field-label text-white">Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="field-input p-2 rounded bg-gray-800 text-white resize-none"
              placeholder="Type your message here..."
            />
          </label>

          <button
            className="field-btn flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
            <img src="/assets/arrow-up.png" alt="arrow" className="field-btn_arrow w-3 h-3" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
