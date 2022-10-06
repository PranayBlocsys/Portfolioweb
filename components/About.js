import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpg";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hey, I’m Pranay.
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              I'm a Developer and I work as a Full Stack Developer at{" "}
              <strong>Blocsys Technologies.</strong>
              <p className="mb-4">
                <br /> Currently developing apps on React, Redux, Amazon Web
                Services . New to Next.js, Tailwindcss and Figma.
              </p>
              <p className="mb-4">
              <br /> Welcome to my digital garden, where I share what I'm
              learning about shipping great products, becoming a better
              developer and growing a career in tech.
              </p>
              <br />{" "}
              <strong>Let’s Make the Web. Faster 🚀 </strong>
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
