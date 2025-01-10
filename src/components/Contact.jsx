import React, { useState } from "react";
import AnimatedComponent from "./AnimatedComponent.jsx";
import Title from "./Title.jsx";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mjkkapwe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };
  return (
    <div
      id="contact"
      className="w-full h-full min-h-screen flex flex-col p-8"
    >
      <Title title="Contact Me" />
      <div className="w-full h-full flex flex-wrap justify-center">
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4 mx-auto">
        <AnimatedComponent index={1}>
            <div>
            <label className="text-xl dark:text-white" htmlFor="name">
                Name
            </label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                required
                className="focus:border-none active:ring-2 w-full p-2 border border-black rounded-lg"
            />
            </div>
        </AnimatedComponent>
        <AnimatedComponent index={2}>
            <div>
            <label className="text-xl dark:text-white" htmlFor="email">
                Email
            </label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                required
                className="focus:border-none active:ring-2 focus:ring-0 w-full p-2 border border-black rounded-lg"
            />
            </div>
        </AnimatedComponent>
        <AnimatedComponent index={3}>
            <div>
            <label className="text-xl dark:text-white" htmlFor="message">
                Message
            </label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your thoughts..."
                required
                className="w-full p-2 border-black border rounded-lg h-32"
            />
            </div>
        </AnimatedComponent>
        <AnimatedComponent index={4}>
            <button
            type="submit"
            disabled={status === "sending"}
            className="hover:text-black w-full text-xl text-white bg-black hover:bg-white border-2 hover:border-black  px-4 py-2 rounded-lg"
            >
            {status === "sending" ? "Sending..." : "Send Message"}
            </button>
        </AnimatedComponent>
        {status === "success" && (
            <p className="text-xl text-green-500">Message sent successfully!</p>
        )}
        {status === "error" && (
            <p className="text-xl text-red-500">
            Failed to send message. Please try again.
            </p>
        )}
        </form>
    </div>
    </div>
  )
}

export default Contact