import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phoneNumber, description, services } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // e.g., smtp.gmail.com
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const selectedServices = Object.keys(services)
      .filter((service) => services[service])
      .map((service) => service.replace(/([A-Z])/g, " $1").trim());

    const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
        .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
        .email-header { background-color: #4CAF50; padding: 20px; text-align: center; color: white; border-radius: 8px 8px 0 0; }
        .email-header h1 { margin: 0; font-size: 24px; }
        .email-body { padding: 20px; }
        .email-body h2 { font-size: 20px; color: #333333; margin-bottom: 10px; }
        .email-body p { font-size: 16px; color: #555555; line-height: 1.6; margin: 0; }
        .email-body .info { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        .email-body .info p { margin: 5px 0; }
        .email-body .services-list { margin: 0; padding: 0; list-style-type: none; }
        .email-body .services-list li { background-color: #4CAF50; color: white; padding: 10px; margin-bottom: 5px; border-radius: 5px; }
        .email-footer { text-align: center; font-size: 12px; color: #aaaaaa; margin-top: 20px; }
        .email-footer p { margin: 5px 0; }
      </style>
    </head>
    <body>
      <div class="email-container">
        <!-- Header -->
        <div class="email-header">
          <h1>New Service Inquiry</h1>
        </div>
        <!-- Body -->
        <div class="email-body">
          <h2>Client Information</h2>
          <div class="info">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          </div>
          <h2>Selected Services</h2>
          <ul class="services-list">
            ${selectedServices.map((service) => `<li>${service}</li>`).join("")}
          </ul>
          <h2>Description</h2>
          <p>${description}</p>
        </div>
        <!-- Footer -->
        <div class="email-footer">
          <p>This email was sent from your website's contact form.</p>
          <p>&copy; ${new Date().getFullYear()} ArchInterio Design Studio Company. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    try {
      await transporter.sendMail({
        from: "archinterio.pune06@gmail.com",
        to: process.env.GMAIL_USER,
        subject: "New Service Inquiry!!!",
        html: emailContent,
      });

      res
        .status(200)
        .json({ success: true, message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Only POST requests are allowed" });
  }
}
