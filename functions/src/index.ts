import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";

// EMAIL CONFIG (use Gmail App Password later)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_app_password",
  },
});

// 🔹 THANK YOU EMAIL
export const sendThankYouEmail = functions.auth.user().onCreate(
  async (user) => {
    if (!user.email) return;

    const mailOptions = {
      from: "ASKAI <your_email@gmail.com>",
      to: user.email,
      subject: "Welcome to ASKAI 🎉",
      html: `
        <h2>Welcome to ASKAI!</h2>
        <p>Thank you for signing up.</p>

        <p>
          <strong>ASKAI</strong> was created by
          <strong>Akin S. Sokpah</strong> from Liberia 🇱🇷
        </p>

        <h3>Support ASKAI ❤️</h3>
        <p>
          Mobile Money: <b>+231889183557</b> (Akin Sokpah)<br/>
          Bank: <b>53020710015394</b><br/>
          United Bank Of Africa – Liberia
        </p>

        <p>
          You will receive news & updates shortly.
        </p>

        <hr/>
        <small>ASKAI © 2026</small>
      `,
    };

    await transporter.sendMail(mailOptions);
  }
);

// 🔹 NEWS UPDATE EMAIL (AFTER FEW MINUTES)
export const sendNewsUpdate = functions.auth.user().onCreate(
  async (user) => {
    if (!user.email) return;

    // wait 3 minutes
    await new Promise((r) => setTimeout(r, 3 * 60 * 1000));

    await transporter.sendMail({
      from: "ASKAI <your_email@gmail.com>",
      to: user.email,
      subject: "ASKAI Updates 🚀",
      html: `
        <h2>What’s New on ASKAI?</h2>
        <ul>
          <li>AI Chat Assistant</li>
          <li>Free Computer Science Courses</li>
          <li>Android App</li>
          <li>More features coming soon!</li>
        </ul>

        <p>Thank you for being part of ASKAI.</p>
        <p><strong>— Akin S. Sokpah 🇱🇷</strong></p>
      `,
    });
  }
);
