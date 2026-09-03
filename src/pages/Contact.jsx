import React from 'react'
import { Suspense, useRef, useState } from "react";
import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import {Canvas} from "@react-three/fiber";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "Something went wrong 😕",
            type: "error",
          });
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
    {alert.show && <Alert {...alert} /> }
    <div className='flex-1 flex justify-center items-center'>
      <h1 className='head-text'>Get In Touch</h1>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='w-full flex flex-col gap-7 mt-14'
      >
        <label className='text-black-500 font-semibold'>
          Name
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="What's your good name?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>

        <label className='text-black-500 font-semibold'>
          Email
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="What's your email address?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>

        <label className='text-black-500 font-semibold'>
          Message
          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder='What you want to say?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>

        <button
          type='submit'
          disabled={loading}
          className='btn'
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>

    <div className='lg:w-1/2 lg:h-auto md:h-[550px] h-[350px]'>
      <Canvas
        camera={{
          position: [0,0,5],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
      >

        <directionalLight position={[0, 0, 1]} intensity={2.5} />
        <ambientLight intensity={1} />
        <pointLight position={[5, 10, 0]} intensity={2} />
        <spotlight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
       
       <Suspense fallback={<Loader />}>
          <Fox currentAnimation={currentAnimation} />
          position=([0.5,0.35,0])
          rotation=([12.629,-0.6,0])
          scale=([0.5,0.5,0.5])
        </Suspense>
      </Canvas>
    </div>
  </section>
  );
};
       

export default Contact