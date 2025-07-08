"use client";
import React, { useState } from "react";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Textarea,
  Button,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CountryList from "country-list-with-dial-code-and-flag";
import { Select, SelectItem, SelectedItems, Avatar } from "@heroui/react";
import { toast } from "react-hot-toast";
import { MailSending } from "./NodeMailing";

type Country = {
  name: string;
  dial_code: string;
  code: string;
  flag: string;
  local_name: "Honduras";
  currency: string;
  currency_code: string;
  currency_symbol: string;
};
const HeroThree = () => {
  const formSchema = z.object({
    name: z
      .string()
      .min(1, "kindly enter your name")
      .max(50, "Name length too much"),
    email: z.string().email("Not email format"),
    country: z.string().min(1, "Kindly select Country"),
    phone: z
      .string()
      .min(6, "Number length too small")
      .max(20, "Number length too much"),
    message: z.string().min(1, "Kindly fill in message"),
  });
  const [portfolio, setPortfolio] = useState("All");
  type formSchemaType = z.infer<typeof formSchema>;
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const submit = async (values: formSchemaType) => {
    console.log(values);
    const { country, email, message, name, phone } = values;
    const response = await MailSending({
      country: country.split("-")[0],
      email,
      message,
      name,
      phone,
    });
    if (response) {
      toast.success("Message Delivered, check ur mail");
      reset();
    } else {
      toast.error("An Error Occured");
    }
  };
  return (
    <div className="w-full bg-plainblack py-16">
      <div className="md:w-[90%] mx-auto w-[95%] flex justify-center items-center gap-10 md:flex-row flex-col">
        <div
          id="services"
          className="text-white w-full flex flex-col md:justify-start md:items-start items-center justify-center"
        >
          <h1 className="font-bold text-2xl text-lightercolor underline-offset-4 underline">
            OUR SERVICES
          </h1>
          <div className="text-sm mt-5">
            <p className="mb-10">
              We provide top-tier web development services tailored to meet your
              business needs. Our expertise includes:{" "}
            </p>
            <p className="font-semibold">
              Full-Stack Development:{" "}
              <span className="font-normal">
                Seamless frontend and backend solutions using modern
                technologies.
              </span>
            </p>
            <p className="font-semibold">
              Custom Web Applications:{" "}
              <span className="font-normal">
                Scalable, high-performance applications designed for efficiency.
              </span>
            </p>
            <p className="font-semibold">
              Responsive UI/UX Design:{" "}
              <span className="font-normal">
                Intuitive, user-friendly interfaces that enhance user
                experience.
              </span>
            </p>
            <p className="font-semibold">
              API Development & Integration:{" "}
              <span className="font-normal">
                {" "}
                Secure and efficient API solutions for seamless connectivity.
              </span>
            </p>
            <p className="font-semibold ">
              Website Optimization & Maintenance:{" "}
              <span className="font-normal">
                {" "}
                Ensuring your website stays fast, secure, and up-to-date.
              </span>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center gap-2">
          <div className="md:w-[25%] w-[50%] mt-10 flex flex-col gap-2">
            <div className="w-full rounded-lg flex flex-col gap-3  justify-center items-center py-7 bg-lightercolor">
              <div className="flex gap-2 justify-center">
                <SiTypescript
                  className="text-lightercolor bg-lightcolor border-2 border-lightcolor rounded-full"
                  size={25}
                />
                <SiJavascript
                  className="text-lightercolor bg-lightcolor border-2 border-lightcolor rounded-full"
                  size={25}
                />
              </div>
              <div className="text-[0.7rem] flex justify-center flex-col items-center text-white">
                <p>TypeScript</p>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="w-full rounded-lg flex flex-col gap-3  justify-center items-center py-7 bg-lightcolor">
              <FaReact
                size={30}
                className="text-white border-2 border-lightercolor rounded-full p-1"
              />
              <p className="text-white text-[0.8rem]">React</p>
            </div>
          </div>
          <div className="md:w-[25%] w-[50%] flex flex-col gap-2">
            <div className="w-[100%] rounded-lg flex flex-col gap-5  justify-center items-center py-7 bg-lightcolor">
              <FaNode
                size={30}
                className="text-white border-2 border-lightercolor rounded-full "
              />
              <p className="text-white text-[0.8rem]">Node js</p>
            </div>
            <div className="w-[100%] rounded-lg flex flex-col gap-4  justify-center items-center py-7 bg-lightercolor">
              <RiNextjsFill
                size={30}
                className="text-lightcolor border-2 border-lightcolor rounded-full"
              />
              <p className="text-white text-[0.8rem]">Next js</p>
            </div>
          </div>
        </div>
      </div>

      {/* portfolio aspect */}

      <div className="flex md:w-[90%] mx-auto w-[95%] flex-col justify-center mt-10 text-white items-center gap-4">
        <h1
          id="portfolio"
          className="underline underline-offset-4 font-bold text-2xl"
        >
          PORTFOLIO
        </h1>
        <div className="flex gap-4 text-small">
          <h1
            onClick={() => {
              setPortfolio("All");
            }}
            className={
              portfolio === "All"
                ? "hover:scale-110 font-bold underline underline-offset-4 text-lightercolor hover:ease-in-out cursor-pointer"
                : "hover:scale-110 hover:underline hover:ease-in-out cursor-pointer"
            }
          >
            All
          </h1>
          <h1
            onClick={() => setPortfolio("TypeScript")}
            className={
              portfolio === "TypeScript"
                ? "hover:scale-110 font-bold underline underline-offset-4 text-lightercolor hover:ease-in-out cursor-pointer"
                : "hover:scale-110 hover:underline hover:ease-in-out cursor-pointer"
            }
          >
            TypeScript
          </h1>
          <h1
            onClick={() => setPortfolio("JavaScript")}
            className={
              portfolio === "JavaScript"
                ? "hover:scale-110 font-bold underline underline-offset-4 text-lightercolor hover:ease-in-out cursor-pointer"
                : "hover:scale-110 hover:underline hover:ease-in-out cursor-pointer"
            }
          >
            JavaScript
          </h1>
          <h1
            onClick={() => setPortfolio("React")}
            className={
              portfolio === "React"
                ? "hover:scale-110 font-bold underline underline-offset-4 text-lightercolor hover:ease-in-out cursor-pointer"
                : "hover:scale-110 hover:underline hover:ease-in-out cursor-pointer"
            }
          >
            React
          </h1>
          <h1
            onClick={() => setPortfolio("Nodejs")}
            className={
              portfolio === "Nodejs"
                ? "hover:scale-110 font-bold underline underline-offset-4 text-lightercolor hover:ease-in-out cursor-pointer"
                : "hover:scale-110 hover:underline hover:ease-in-out cursor-pointer"
            }
          >
            Node js
          </h1>
          <h1
            onClick={() => setPortfolio("Nextjs")}
            className={
              portfolio === "Nextjs"
                ? "hover:scale-110 font-bold underline underline-offset-4 text-lightercolor hover:ease-in-out cursor-pointer"
                : "hover:scale-110 hover:underline hover:ease-in-out cursor-pointer"
            }
          >
            Next js
          </h1>
        </div>
        <div className="w-full">
          {portfolio === "All" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Link href={"https://airbnbclone-kappa-inky.vercel.app"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        AIrbnb Clone
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        Site to book an apartment from any other countries and
                        to upload available apartment for rent Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Sit, rem sint
                        quam perspiciatis sequi veritatis id tenetur
                        exercitationem modi, officia aliquid architecto, ab
                        accusamus veniam! Veniam aspernatur et vitae
                        consequuntur.
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 w-full">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="/airbnb-clone.png"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>

                <Link href={"https://dogbooking.vercel.app"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        Dog Booking site
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        Our Dog Booking Site makes it easy to book services for
                        your furry friend, from grooming and training to
                        boarding and adoption. With a simple and secure
                        platform, users can find trusted dog care providers,
                        schedule appointments, and manage bookings effortlessly.
                        Whether you need a sitter or a vet visit, we ensure a
                        hassle-free experience for you and your pet.
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="/dog-booking.png"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>

                <Link href={"https://course-enroll-8p3p.vercel.app"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        Course Enroll
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        A full-stack web application for managing student course
                        enrollment, built as part of an internship assessment
                        for Cosmopolitan University.
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="/course-img.PNG"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>

                <Link href={"https://dynamic-quiz-tau.vercel.app"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        Quiz Application
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        Our Quiz Application is an interactive platform designed
                        to test knowledge, enhance learning, and provide fun
                        challenges. With timed quizzes, multiple categories, and
                        instant results, users can engage in an exciting and
                        educational experience.
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="/quiz-application.png"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>

                <Link href={"https://motor-flame.vercel.app"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        Motor Site
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        Our Motor Site is a dynamic platform for buying,
                        selling, and exploring vehicles. Whether youre looking
                        for new or used cars, auto services, or the latest motor
                        trends, we provide a seamless browsing and booking
                        experience. With detailed listings, secure transactions,
                        and expert insights, finding your perfect ride has never
                        been easier
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="/motor-flame.png"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>

                <Link href={"https://tech-quiz-app-xi.vercel.app"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        Learning Quiz
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        Our Learning Quiz Application is designed to make
                        education fun and interactive. With a wide range of
                        subjects, timed challenges, and instant feedback, users
                        can test their knowledge and improve their learning
                        experience. Whether for students, teachers, or
                        self-learners, our platform offers an engaging way to
                        reinforce concepts and track progress.
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="/learning-quiz.png"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>

                <Link href={"https://hotel-room-reservation-rust.vercel.app"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        Hotel Room Reservation
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        Our Hotel Room Reservation platform makes booking
                        accommodations seamless and hassle-free. With a
                        user-friendly interface, real-time availability, and
                        secure payment options, travelers can find and reserve
                        the perfect stay in just a few clicks. Whether for
                        business trips or vacations, we ensure a smooth and
                        convenient booking experience.
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="/reservation.PNG"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>

                <Link href={"https://ticket-olive-xi.vercel.app"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        Ticket Management System
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        A smart and secure Ticket Management Software built with
                        Next.js, Node.js, Express, and PostgreSQL. This app
                        supports seamless ticket routing based on category
                        selection, and offers multi-admin access to manage
                        categorized tickets efficiently. Featuring robust
                        authentication, real-time session management, and a
                        modern UI powered by Tailwind CSS, the system ensures
                        streamlined issue tracking and resolution in one unified
                        platform.
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="/tms-img.PNG"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
              </div>
            </>
          )}
          {portfolio === "TypeScript" && (
            <>
              <div className="grid grid-cols-2 gap-5">
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4 ">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        TypeScript Codes
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        TypeScript is a strongly typed programming language that
                        builds on JavaScript
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 w-full">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        TypeScript Codes
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        TypeScript is a strongly typed programming language that
                        builds on JavaScript
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        TypeScript Codes
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        TypeScript is a strongly typed programming language that
                        builds on JavaScript
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        TypeScript Codes
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        TypeScript is a strongly typed programming language that
                        builds on JavaScript
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
              </div>
            </>
          )}
          {portfolio === "JavaScript" && (
            <div>
              <div className="grid grid-cols-2 gap-5">
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        JavaScript Codes
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        JavaScript is the programming language of the Web
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 w-full">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        JavaScript Codes
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        JavaScript is the programming language of the Web
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        JavaScript Codes
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        JavaScript is the programming language of the Web
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        JavaScript Codes
                      </p>
                      <small className="text-default-500 line-clamp-1">
                        JavaScript is the programming language of the Web
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
              </div>
            </div>
          )}
          {portfolio === "React" && (
            <div>
              <div className="grid grid-cols-2 gap-5">
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">React</p>
                      <small className="text-default-500 line-clamp-1">
                        React is used for the development of web applications
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 w-full">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">React</p>
                      <small className="text-default-500 line-clamp-1">
                        React is used for the development of web applications
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">React</p>
                      <small className="text-default-500 line-clamp-1">
                        React is used for the development of web applications
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">React</p>
                      <small className="text-default-500 line-clamp-1">
                        React is used for the development of web applications
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
              </div>
            </div>
          )}
          {portfolio === "Nodejs" && (
            <div>
              <div className="grid grid-cols-2 gap-5">
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">Node js</p>
                      <small className="text-default-500 line-clamp-1">
                        Node.js® is a JavaScript runtime built on Chrome`s V8
                        JavaScript engine
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 w-full">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">Node js</p>
                      <small className="text-default-500 line-clamp-1">
                        Node.js® is a JavaScript runtime built on Chrome`s V8
                        JavaScript engine
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">Node js</p>
                      <small className="text-default-500 line-clamp-1">
                        Node.js® is a JavaScript runtime built on Chrome`s V8
                        JavaScript engine
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">Node js</p>
                      <small className="text-default-500 line-clamp-1">
                        Node.js® is a JavaScript runtime built on Chrome`s V8
                        JavaScript engine
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
              </div>
            </div>
          )}
          {portfolio === "Nextjs" && (
            <div>
              <div className="grid grid-cols-2 gap-5">
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">Next js</p>
                      <small className="text-default-500 line-clamp-1">
                        Next js is an extensive React framework (built with
                        JavaScript and TypeScript) for creating web
                        applications, allowing easy development of websites and
                        single-page applications (SPAs).
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 w-full">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">Next js</p>
                      <small className="text-default-500 line-clamp-1">
                        Next js is an extensive React framework (built with
                        JavaScript and TypeScript) for creating web
                        applications, allowing easy development of websites and
                        single-page applications (SPAs).
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">Next js</p>
                      <small className="text-default-500 line-clamp-1">
                        Next js is an extensive React framework (built with
                        JavaScript and TypeScript) for creating web
                        applications, allowing easy development of websites and
                        single-page applications (SPAs).
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">Next js</p>
                      <small className="text-default-500 line-clamp-1">
                        Next js is an extensive React framework (built with
                        JavaScript and TypeScript) for creating web
                        applications, allowing easy development of websites and
                        single-page applications (SPAs).
                      </small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src="https://i.pinimg.com/736x/fd/cf/7f/fdcf7f386388dcf224df22e9e7c1f626.jpg"
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="md:w-[90%] text-center mt-10 w-[95%] mx-auto">
        <h1
          id="contact"
          className="text-lightercolor font-bold text-2xl underline my-5 underline-offset-4"
        >
          CONTACT
        </h1>
        <p className="text-white text-small mb-6">
          Kindly Fill in the form below <br />{" "}
          <span className="text-yellow-500 text-[0.7rem]">
            Note: all entered details will be forwarded to the email provided
          </span>
        </p>
        <div className="md:w-[50%] w-full mx-auto">
          <form
            onSubmit={handleSubmit(submit)}
            action=""
            className="w-full flex flex-col gap-3"
          >
            <Input
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={errors?.name?.message}
              type="text"
              label="Name"
            />
            <Input
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors?.email?.message}
              type="email"
              label="Email"
            />
            <Input
              {...register("phone")}
              isInvalid={!!errors.phone}
              errorMessage={errors?.phone?.message}
              type="text"
              label="Phone Number"
            />
            <Select
              {...register("country")}
              isInvalid={!!errors.country}
              className=""
              label="Select country"
              items={CountryList.getAll() as Iterable<Country> | undefined}
              renderValue={(items: SelectedItems<Country>) => {
                return items.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Avatar
                      alt={item?.data?.name}
                      className="flex-shrink-0"
                      size="sm"
                      src={`https://flagcdn.com/${item?.data?.code.toLowerCase()}.svg`}
                    />
                    <div className="flex flex-col">
                      <span>{item?.data?.name}</span>
                      <span className="text-default-500 text-tiny">
                        {item?.data?.currency} - {item?.data?.code} (
                        {item?.data?.dial_code})
                      </span>
                    </div>
                  </div>
                ));
              }}
            >
              {(user: Country) => (
                <SelectItem
                  key={`${user.name}-${user.local_name}-${user.flag}-${user.flag}-${user.dial_code}-${user.currency_symbol}-${user.currency_code}-${user.currency}`}
                  textValue={user.name}
                >
                  <div className="flex gap-2 items-center">
                    <Avatar
                      alt={user.name}
                      className="flex-shrink-0"
                      size="sm"
                      src={`https://flagcdn.com/${user.code.toLowerCase()}.svg`}
                    />
                    <div className="flex flex-col">
                      <span className="text-small">{user.name}</span>
                      <span className="text-tiny text-default-400">
                        {user.currency} - {user.code} ({user.dial_code})
                      </span>
                    </div>
                  </div>
                </SelectItem>
              )}
            </Select>
            {errors?.country?.message && (
              <p className="text-red-600 text-small">
                {errors?.country?.message}
              </p>
            )}
            {/* <Input type="text" label="Country" /> */}
            <Textarea
              {...register("message")}
              isInvalid={!!errors.message}
              errorMessage={errors.message?.message}
              type="text"
              label="Message"
            />
            <Button
              className="mt-14 bg-lightercolor h-14 font-bold text-xl"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
