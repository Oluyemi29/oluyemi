"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";

import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [brandColor, setBrandColor] = useState(false);

  const menuItems = ["Home", "About Me", "Services", "Project", "Contact"];

  return (
    <div className="md:w-[90%] w-[100%] flex justify-between items-center mx-auto rounded-md shadow-foreground/50 shadow-md">
      <Navbar
        className="bg-transparent py-1 md:py-3"
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        isMenuOpen={isMenuOpen}
      >
        <NavbarContent>
          <NavbarBrand
            className="cursor-pointer"
            onMouseOver={() => setBrandColor(!brandColor)}
          >
            <Image
              src={"/code.jpg"}
              alt="brand"
              width={50}
              height={50}
              priority
              quality={100}
              className={
                brandColor
                  ? "rounded-md mr-2 border-2 border-maincolor ease-in-out"
                  : "rounded-md mr-2 border-2 border-white ease-in-out"
              }
            />
            <p
              className={
                brandColor
                  ? "font-bold text-xl text-white ease-in-out"
                  : "font-bold text-xl text-maincolor ease-in-out"
              }
            >
              Dev{" "}
              <span
                className={
                  brandColor
                    ? "text-maincolor ease-in-out"
                    : "text-white ease-in-out"
                }
              >
                Olu
              </span>
            </p>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Open menu" : "Close menu "}
            className="md:hidden text-white p-1 rounded-md"
          />
        </NavbarContent>

        <NavbarContent
          className="hidden text-white sm:flex gap-6"
          justify="end"
        >
          <NavbarItem isActive>
            <Link
              className="text-maincolor underline underline-offset-2"
              href="#home"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#aboutme">
              About Me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#services">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#portfolio">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#contact">
              Contact Me
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="mt-10">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                onPress={() => {
                  setIsMenuOpen(false);
                }}
                className="w-full text-white"
                href={
                  item === "Home"
                    ? "#home"
                    : item === "About Me"
                    ? "#aboutme"
                    : item === "Services"
                    ? "#services"
                    : item === "Project"
                    ? "#portfolio"
                    : "#contact"
                }
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default Header;
