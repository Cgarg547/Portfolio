import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import emailjs from "@emailjs/browser";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { alert, showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setCurrentAnimation("hit");

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Chirag Garg",
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      showAlert({
        show: true,
        text: "Thank you for your message 😃",
        type: "success",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation("idle");
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setCurrentAnimation("idle");

      showAlert({
        show: true,
        text: "Something went wrong. Please try again 😕",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}

      {/* Contact Form */}
      <div className="flex-1">
        <h1 className="head-text">
          Get In <span className="blue-gradient_text">Touch</span>
        </h1>

        <p className="mt-4 text-slate-500 max-w-xl">
          Have a question, project idea, or opportunity? Send me a message and
          I'll get back to you.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-10"
        >
          <label className="text-black-500 font-semibold">
            Name

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="What's your name?"
              required
              className="input"
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="What's your email address?"
              required
              className="input"
            />
          </label>

          <label className="text-black-500 font-semibold">
            Message

            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="How can I help?"
              required
              className="textarea"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="btn disabled:opacity-50 disabled:cursor-not-allowed"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Fox 3D Model */}
      <div className="lg:w-1/2 lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />

          <ambientLight intensity={1} />

          <pointLight position={[5, 10, 0]} intensity={2} />

          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
            castShadow
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;