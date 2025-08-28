"use client";
import Link from "next/link";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Divider } from "@heroui/react";
import { motion } from "framer-motion";

const HeroFour = () => {
  return (
    <div className="bg-faidblack py-5">
      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="md:w-[90%] w-[95%] mx-auto"
      >
        <h1 className="text-2xl text-center font-bold underline underline-offset-4 text-white">
          SOCIAL MEDIA
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 place-content-center place-items-center gap-5 mt-10">
          <Link href={"mailto:"}>
            <div className="flex gap-5 bg-transparent items-center rounded-lg shadow-md shadow-black max-w-max px-6 py-3">
              <IoMdMail color="white" size={25} />
              <p className="text-small text-lightercolor ">
                adedokunoluyemi1gmail.com
              </p>
            </div>
          </Link>
          <div className="flex gap-5 bg-transparent items-center rounded-lg shadow-md shadow-black max-w-max px-6 py-3">
            <IoCall color="white" size={25} />
            <p className="text-small text-lightercolor ">
              +2347042188482 / +2349136863330
            </p>
          </div>
          <Link href={"https://x.com/AdedokunOluyem2"}>
            <div className="flex gap-5 bg-transparent items-center rounded-lg shadow-md shadow-black max-w-max px-6 py-3">
              <BsTwitterX color="white" size={25} />
              <p className="text-small text-lightercolor ">@AdedokunOluyem2</p>
            </div>
          </Link>
          <Link href={"https://www.linkedin.com/in/oluyemi-adedokun-347311241"}>
            <div className="flex gap-5 bg-transparent items-center rounded-lg shadow-md shadow-black max-w-max px-6 py-3">
              <FaLinkedinIn color="white" size={25} />
              <p className="text-small text-lightercolor ">Adedokun Oluyemi</p>
            </div>
          </Link>
          <Link href={"https://youtube.com"}>
            <div className="flex gap-5 bg-transparent items-center rounded-lg shadow-md shadow-black max-w-max px-6 py-3">
              <FaYoutube color="white" size={25} />
              <p className="text-small text-lightercolor ">
                adedokunoluyemi1gmail.com
              </p>
            </div>
          </Link>
        </div>
      </motion.div>
      <Divider orientation="horizontal" className="my-10 bg-lightercolor" />
      <p className="text-white text-center text-[0.8rem]">
        &copy; copyright @devoluyemi
      </p>
    </div>
  );
};

export default HeroFour;
