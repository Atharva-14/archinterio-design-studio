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
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Service Inquiry</title>
        <style>
          /* General Reset */
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
          }

          /* Container */
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          /* Light Theme */
          body {
            background-color: #f4f4f4;
            color: #333;
          }

          .email-container {
            background-color: #ffffff;
          }

          .email-header {
            background-color: #4CAF50;
            padding: 20px;
            text-align: center;
            color: white;
            border-radius: 8px 8px 0 0;
          }

          .email-header h1 {
            margin: 0;
            font-size: 24px;
          }

          .email-body h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 10px;
          }

          .email-body p {
            font-size: 16px;
            color: #555;
            line-height: 1.6;
            margin: 0;
          }

          .email-body .info {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
          }

          .email-body .services-list {
            margin: 0;
            padding: 0;
            list-style-type: none;
          }

          .email-body .services-list li {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            margin-bottom: 5px;
            border-radius: 5px;
          }

          .email-footer {
            text-align: center;
            font-size: 12px;
            color: #aaa;
            margin-top: 20px;
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 0 0 8px 8px;
          }

          /* Dark Theme */
          @media (prefers-color-scheme: dark) {
            body {
              background-color: #1a202c;
              color: #e2e8f0;
            }
            
            .email-container {
              background-color: #2d3748;
              color: #e2e8f0;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            }

            .email-header {
              background-color: #38a169;
            }

            .email-body h2 {
              color: #e2e8f0;
            }

            .email-body p {
              color: #cbd5e0;
            }

            .email-body .info {
              background-color: #4a5568;
            }

            .email-body .services-list li {
              background-color: #68d391;
            }

            .email-footer {
              background-color: #4a5568;
              color: #cbd5e0;
            }
          }

          /* Responsive Design */
          @media (max-width: 600px) {
            .email-container {
              padding: 15px;
            }
            .email-header h1 {
              font-size: 20px;
            }
            .email-body h2 {
              font-size: 18px;
            }
            .email-body p {
              font-size: 14px;
            }
            }
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
              <p>&copy; ${new Date().getFullYear()} ArchInterio Design Studio. All rights reserved.</p>
            </div>
          </div>
        </body>
    </html>`;

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
