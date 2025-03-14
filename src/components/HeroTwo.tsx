"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroTwo = () => {
  return (
    <div id="aboutme" className="bg-faidblack relative w-full">
      <div className="absolute md:w-[90%] w-[90%] flex justify-evenly right-4 md:right-16 py-7 -my-14 bg-maincolor rounded-lg">
        <div className="flex flex-col justify-center items-center text-black">
          <h1 className="font-bold text-xl">3+</h1>
          <p className="text-sm">Experience</p>
        </div>
        <div className="flex flex-col justify-center items-center text-black">
          <h1 className="font-bold text-xl">124+</h1>
          <p className="text-sm">Projects</p>
        </div>
        <div className="flex flex-col justify-center items-center text-black">
          <h1 className="font-bold text-xl">96+</h1>
          <p className="text-sm">Satisfied Client</p>
        </div>
      </div>
      <h1 className="text-white text-2xl font-bold underline underline-offset-4 text-center pt-24 pb-12">
        WHO AM I?
      </h1>
      <div className="flex justify-center items-center md:flex-row gap-10 flex-col-reverse  md:w-[90%] mx-auto w-[95%]">
        <div className="w-full text-white flex flex-col md:justify-start md:items-start items-center justify-center">
          <h1 className="font-semibold text-xl">I AM DELEGENT AND CREATIVE</h1>
          <p className="mt-5 text-sm">
            I am a passionate full-stack web developer with expertise in
            building dynamic, user-friendly applications. Skilled in modern web
            technologies like Next.js, React, and Node.js, I specialize in
            creating efficient and scalable solutions. With a keen eye for
            detail and a problem-solving mindset, I enjoy bringing ideas to life
            through clean, maintainable code.
          </p>
          <div className="flex gap-4 mt-8">
            <Link href={"/Oluyemi_Adedayo_Adedokun_Resume.pdf"} download>
              <Button size="md" className="text-black px-7 bg-white ">
                Download CV
              </Button>
            </Link>
            <Link href={"#portfolio"}>
              <Button
                size="md"
                className="text-white px-10 bg-transparent border-2 border-white"
              >
                Portfolio
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={"/oluyemi.jpg"}
            alt="my profile"
            width={100}
            height={100}
            priority
            quality={100}
            className="w-full md:w-[50%] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
