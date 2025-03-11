import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const adminEmail = process.env.ADMIN_EMAIL || "";
const adminPassword = process.env.ADMIN_PASSWORD || "";
const mailHost = "smtp.gmail.com";
const mailPort = 587;

const transporter = nodemailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false,
    auth: {
        user: adminEmail,
        pass: adminPassword
    }
});

const sendMail = async (to: string, subject: string, htmlContent: string): Promise<void> => {
    try {
        await transporter.sendMail({
            from: adminEmail,
            to,
            subject,
            html: htmlContent
        });
        console.log("Email sent successfully to", to);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
};

export default sendMail;
