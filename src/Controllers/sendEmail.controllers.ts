import { type Request, type Response } from "express";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

const sendEmail = async (req: Request, res: Response) => {
  //   let testAccount = await nodemailer.createTestAccount();
  console.log("Email", process.env.EMAILID);

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "presley.baumbach28@ethereal.email",
      pass: "Cgg61dUbscM3k8gz2U",
    },
  });

  const info = await transporter.sendMail({
    from: '"Manas Deo 👻" <rmnslogin@gmail.com>', // sender address
    to: "rmnsdeo@gmail.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  res.json(info);
};

export { sendEmail };
