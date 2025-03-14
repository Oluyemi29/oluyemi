"use server";
import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import EmailTemplate from "./EmailTemplate";

const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  secure: false, // true for port 465, false for other ports
  service: "gmail",
  auth: {
    user: process.env.EMail_User,
    pass: process.env.EMail_Pass,
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
  console.log(country, email, message, name, phone);

  const templates = Handlebars.compile(EmailTemplate);
  const body = templates({
    country: country,
    email: email,
    message: message,
    name: name,
    phone: phone,
  });
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Oluyemi 👻" <no-reply@gmai.com>', // sender address
      to: `${email}, adedokunoluyemi1@gmail.com`, // list of receivers
      //   replyTo: "<no reply/>",
      subject: "Form details", // Subject line
      html: body, // html body
    });

    console.log("Message sent: %s", info.messageId);
  }

  main().catch(console.error);
};
