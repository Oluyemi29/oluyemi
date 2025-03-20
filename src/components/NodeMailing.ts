"use server";
import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import EmailTemplate from "./EmailTemplate";

const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

type FormProps = {
  country: string;
  email: string;
  message: string;
  name: string;
  phone: string;
};
export const MailSending = async ({
  country,
  email,
  message,
  name,
  phone,
}: FormProps) => {
  const templates = Handlebars.compile(EmailTemplate);
  const body = templates({
    country: country,
    email: email,
    message: message,
    name: name,
    phone: phone,
  });
  // send mail with defined transport object
  await transporter.sendMail({
    from: `"Oluyemi 💻" <${process.env.EMAIL_USER}>`, // sender address
    to: `${email}, ${process.env.EMAIL_USER}`, // list of receivers
    replyTo: "no-reply@example.com", // Prevent replies
    subject: "Form details", // Subject line
    html: body, // html body
  });
  return true;
};
