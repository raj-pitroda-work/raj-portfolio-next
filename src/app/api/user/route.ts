import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const sendEmail = async (to: string, subject: string, body: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_FROM_EMAIL1,
        pass: process.env.EMAIL_CRED_APP_PASS,
      },
    });

    await transporter.sendMail({
      to,
      subject,
      html: body,
    });

    console.log("Email sent successfully");
    return true;
  } catch (error: any) {
    console.error("Error sending email:", error.toString());
    return false;
  }
};

export const POST = async (req: NextRequest) => {
  const { name, countryCode, mobileNo, email, subject, message } =
    await req.json();
  const toEmail = process.env.NEXT_PUBLIC_EMAIL2
    ? process.env.NEXT_PUBLIC_EMAIL1 + ", " + process.env.NEXT_PUBLIC_EMAIL2
    : process.env.NEXT_PUBLIC_EMAIL1;
  if (!toEmail) {
    return NextResponse.json("Email doesn't exist. Please configure first");
  }
  await sendEmail(
    toEmail,
    "From NextJs Portfolio request",
    `<div>
      <p><strong>Name: </strong>${name}</p>
      <p><strong>Email: </strong>${email}</p>
      <p><strong>Subject: </strong>${subject}</p>
      <p><strong>Mobile No: </strong>${countryCode} ${mobileNo}</p>
      <p><strong>Message: </strong>${message}</p>
  </div>`
  );
  return NextResponse.json("Message sent successfully.");
};
