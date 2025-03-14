"use client";
import { Button } from "@heroui/react";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

const HeroOne = () => {
  return (
    <div id="home" className="py-24 md:w-[90%] w-[90%] mx-auto">
      <p className="text-white text-xl font-extralight">OLUYEMI</p>
      <h1 className="text-maincolor font-bold text-4xl">ADEDAYO</h1>
      <p className="text-white tracking-widest text-small">WEB DEVELOPER</p>
      <div className="flex gap-4 mt-8">
        <Link href={"#contact"}>
          <Button size="md" className="text-black px-7 md:px-14 bg-white ">
            Hire Me
          </Button>
        </Link>
        <Link href={"#portfolio"}>
          <Button
            size="md"
            className="text-white px-7 md:px-10 bg-transparent border-2 border-white"
          >
            Portfolio
          </Button>
        </Link>
      </div>
      <div className="flex gap-4 py-14 bg-black">
        <Link href={"https://facebook.com"}>
          <FaFacebookF size={20} color="white" />
        </Link>
        <Link href={"https://www.linkedin.com/in/oluyemi-adedokun-347311241"}>
          <FaLinkedinIn size={20} color="white" />
        </Link>
        <Link href={"https://instagram.com/adedokunoluyemi"}>
          <FaInstagram size={20} color="white" />
        </Link>
        <Link href={"https://youtube.com"}>
          <FaYoutube size={20} color="white" />
        </Link>
        <Link href={"https://x.com/AdedokunOluyem2"}>
          <BsTwitterX size={20} color="white" />
        </Link>
      </div>
    </div>
  );
};

export default HeroOne;
