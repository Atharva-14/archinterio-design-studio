import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { TextArea } from "@/components/ui/TextArea";
import { cn } from "@/libs/utils";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { useRef, useState } from "react";
import axios from "axios";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const descriptionRef = useRef();

  const serviceRef = {
    architecturalPlan: useRef(),
    elevation: useRef(),
    interiorDesign: useRef(),
    visualization: useRef(),
    drawings: useRef(),
    others: useRef(),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      description: descriptionRef.current.value,
      services: {
        architecturalPlan: serviceRef.architecturalPlan.current.checked,
        elevation: serviceRef.elevation.current.checked,
        interiorDesign: serviceRef.interiorDesign.current.checked,
        visualization: serviceRef.visualization.current.checked,
        drawings: serviceRef.drawings.current.checked,
        others: serviceRef.others.current.checked,
      },
    };

    console.log("formData", formData);
    try {
      const response = await axios.post("/api/sendMail", formData);

      console.log(response);

      if (response.status === 200) {
        console.log("Email sent successfully.");

        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneNumberRef.current.value = "";
        descriptionRef.current.value = "";

        serviceRef.architecturalPlan.current.checked = false;
        serviceRef.elevation.current.checked = false;
        serviceRef.interiorDesign.current.checked = false;
        serviceRef.visualization.current.checked = false;
        serviceRef.drawings.current.checked = false;
        serviceRef.others.current.checked = false;
      } else {
        console.log("Failed to send mail");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact - ArchIntrio Design Studio</title>
        <meta></meta>
      </Head>
      <div className="flex flex-col p-4 md:overflow-auto overflow-y-auto">
        <h1 className="font-bold text-3xl dark:text-neutral-200 text-neutral-800 my-10 mx-auto">
          CONTACT US
        </h1>
        <div className="flex flex-col md:flex-row justify-evenly gap-6 md:gap-8">
          <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <form className="my-8" onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  type="text"
                  ref={nameRef}
                  required
                />
              </LabelInputContainer>

              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    placeholder="Your Email"
                    type="email"
                    ref={emailRef}
                    required
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="phoneNumber">Your Number</Label>
                  <Input
                    id="phoneNumber"
                    placeholder="Your Number"
                    type="tel"
                    pattern="[6789][0-9]{9}"
                    ref={phoneNumberRef}
                    required
                  />
                </LabelInputContainer>
              </div>

              <div className="mb-4">
                <Label htmlFor="services">Select Services</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <input
                      id="architecturalPlan"
                      type="checkbox"
                      ref={serviceRef.architecturalPlan}
                    />
                    <label htmlFor="architecturalPlan" className="text-white">
                      Architectural Plan
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      id="elevation"
                      type="checkbox"
                      ref={serviceRef.elevation}
                    />
                    <label htmlFor="elevation" className="text-white">
                      Elevation
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      id="interiorDesign"
                      type="checkbox"
                      ref={serviceRef.interiorDesign}
                    />
                    <label htmlFor="interiorDesign" className="text-white">
                      Interior Design
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      id="visualization"
                      type="checkbox"
                      ref={serviceRef.visualization}
                    />
                    <label htmlFor="visualization" className="text-white">
                      3D Visualization
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      id="drawings"
                      type="checkbox"
                      ref={serviceRef.drawings}
                    />
                    <label htmlFor="drawings" className="text-white">
                      Architectural Drawings
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      id="others"
                      type="checkbox"
                      ref={serviceRef.others}
                    />
                    <label htmlFor="others" className="text-white">
                      Others
                    </label>
                  </div>
                </div>
              </div>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="description">Your Description</Label>
                <TextArea
                  id="description"
                  placeholder="Your Description"
                  ref={descriptionRef}
                  required
                />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Send &rarr;
                <BottomGradient />
              </button>
            </form>
          </div>

          <div className="max-w-md flex flex-col my-auto p-4 mx-auto">
            <Image
              src="/arch_design_studio_logo.png"
              alt="ArchInterio Design Studio"
              width={175}
              height={175}
              className="mb-2"
            />

            <p className="text-black dark:text-white text-base font-medium">
              Ar. Anushka Zade
            </p>
            <p className="text-black dark:text-white text-base font-medium">
              Phone: +91-9822804978
            </p>
            <p className="text-black dark:text-white text-base font-medium">
              Email: archinterio.pune06@gmail.com
            </p>
            <p className="text-black dark:text-white text-base font-medium">
              Pune | Mumbai | Nagpur | Wani
            </p>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[1px] w-full" />

            <ul className="flex space-x-3 mt-1">
              <li>
                <Link href="https://www.instagram.com/archinterio_design_studio/">
                  <IconBrandInstagram className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/anushka-zade-420947214">
                  <IconBrandLinkedin className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
                </Link>
              </li>
              <li>
                <Link href="https://www.x.com/archinterio_ds">
                  <IconBrandTwitter className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="max-w-md flex flex-col my-auto p-4 mx-auto">
            <Image
              src="/girja_bricks_logo.png"
              alt="Girja Bricks"
              width={200}
              height={200}
              priority={true}
            />
            <p className="text-black dark:text-white text-base font-medium">
              Rohan A. Zade
            </p>
            <p className="text-black dark:text-white text-base font-medium">
              Phone: +91-8484966009
            </p>
            <p className="text-black dark:text-white text-base font-medium">
              Email: rohanzade123@gmail.com
            </p>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[1px] w-full" />

            <p className="text-black dark:text-white text-base font-medium">
              Arun M. Zade
            </p>
            <p className="text-black dark:text-white text-base font-medium">
              Phone: +91-9689181520
            </p>
            <p className="text-black dark:text-white text-base font-medium">
              Email: girijazade@gmail.com
            </p>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[1px] w-full" />

            <p className="text-black dark:text-white text-base font-medium w-[250px]">
              Address: Kalmana Road, Lal Pulia, Chikalgaon, Wani, Yavatmal -
              445304
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Contact;
