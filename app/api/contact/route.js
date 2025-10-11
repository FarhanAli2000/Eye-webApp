import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // yahan `to` me form wala email dalna hai
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email, // 👈 form me user ne jo likha hoga wahi recipient banega
            subject: subject || "New Contact Form Submission",
            text: `
        Hello ${name},

        We received your message:

        ${message}

        Thanks,
        Farhan
      `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ success: true, message: "Email sent successfully!" }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
            JSON.stringify({ success: false, message: "Failed to send email." }),
            { status: 500 }
        );
    }
}
