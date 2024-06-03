import { type Request, type Response } from "express";

const sendEmail = async (req: Request, res: Response) => {
  res.send("Send Email function");
};

export { sendEmail };
