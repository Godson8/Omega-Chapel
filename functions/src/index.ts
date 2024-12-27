const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const path = require("path");

admin.initializeApp();

// test

// Gmail Transporter (for email notifications)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "omegachapel6@gmail.com", // Replace with your email
    pass: process.env.MAIL_PASS, // Use app password
  },
});

// Google Sheets API Configuration
const serviceAccountPath = path.join(
  __dirname,
  "../omega-chapel-website-responses.json"
);

const auth = new google.auth.GoogleAuth({
  keyFile: serviceAccountPath,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// Replace with your Google Spreadsheet ID
const SPREADSHEET_ID = "1Q5Vs3z9XQI08pykhcjKj28SsVtMcJLIs556CePeENds";

// JOIN US THIS SUNDAY FORM
export const syncCollection1 = functions.firestore.onDocumentWritten(
  "Join us this Sunday/{docId}",
  async (event: any) => {
    const afterSnap = event.data?.after;

    if (!afterSnap) {
      console.error("No data found in the 'after' snapshot.");
      return;
    }

    const formData = afterSnap.data();

    if (!formData) {
      console.error("Form data is empty.");
      return;
    }

    const docId = event.params.docId;

    // Append to "Join us this Sunday" sheet
    const values = [
      [
        formData["First Name"] || "N/A",
        formData["Last Name"] || "N/A",
        formData["Email"] || "N/A",
        formData["Phone Number"] || "N/A",
        formData["Gender"] || "N/A",
        formData["First Timer"] || "N/A",
        formData["Message"] || "N/A",
        formData["date"] || new Date().toISOString(),
        docId,
      ],
    ];

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: "'Join Us This Sunday'!A1",
        valueInputOption: "RAW",
        requestBody: { values },
      });
      functions.logger.info("Data added to 'Join us this Sunday' sheet.");

      // Send email notification
      const mailOptions = {
        from: "omegachapel6@gmail.com",
        to: ["godsonoladipupo@yahoo.com", ""], // Add multiple recipients if needed
        subject: "New 'Join Us This Sunday' Form Submission",
        html: `
          <p><b>New form submission received: Join Us this Sunday</b></p>
          <p><b>Name:</b> ${formData["First Name"]} ${formData["Last Name"]}</p>
          <p><b>Email:</b> ${formData.Email}</p>
          <p><b>Phone Number:</b> ${formData["Phone Number"]}</p>
          <p><b>Gender:</b> ${formData.Gender}</p>
          <p><b>First Timer:</b> ${formData["First Timer"]}</p>
          <p><b>Message:</b> ${formData.Message}</p>
          <p><b>Submitted On:</b> ${formData.date}</p>
          <p><b>Spreadsheet Link</b><a href = "https://docs.google.com/spreadsheets/d/1Q5Vs3z9XQI08pykhcjKj28SsVtMcJLIs556CePeENds/edit?gid=0#gid=0" target="_blank">View Responses</a></p>
        `,
      };

      await transporter.sendMail(mailOptions);
      functions.logger.info("Email notification sent successfully.");
    } catch (error) {
      functions.logger.error(
        "Error syncing to Google Sheets or sending email:",
        error
      );
    }
  }
);

// PARTNERS FORM
export const syncCollectionPartners = functions.firestore.onDocumentWritten(
  "Partners/{docId}",
  async (event: any) => {
    const afterSnap = event.data?.after;

    if (!afterSnap) {
      console.error("No data found in the 'after' snapshot.");
      return;
    }

    const formData = afterSnap.data();

    if (!formData) {
      console.error("Form data is empty.");
      return;
    }

    const docId = event.params.docId;

    // Append to "Partners" sheet
    const values = [
      [
        formData["Full Name"] || "N/A",
        formData["Email"] || "N/A",
        formData["Phone Number"] || "N/A",
        formData["Gender"] || "N/A",
        formData["Who referred you"] || "N/A",
        formData["date"] || new Date().toISOString(),
        docId,
      ],
    ];

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: "'Partners'!A1",
        valueInputOption: "RAW",
        requestBody: { values },
      });
      functions.logger.info("Data added to 'Partners' sheet.");

      // Send email notification
      const mailOptions = {
        from: "omegachapel6@gmail.com",
        to: [
          "godsonoladipupo@yahoo.com",
          "godsonoladipupo6@gmail.com",
          "piusoladipupo@yahoo.com",
          "funkeoladipupo@yahoo.com",
          "oladipupodavid18@gmail.com",
          "kemisolajesu03@yahoo.com",
          "olubodunlizzy@gmail.com",
        ], // Add multiple recipients if needed
        subject: "New 'Partners' Form Submission",
        html: `
          <p><b>New PARTNERSHIP Form submission received:</b></p>
          <p><b>Name:</b> ${formData["Full Name"]}</p>
          <p><b>Email:</b> ${formData.Email}</p>
          <p><b>Phone Number:</b> ${formData["Phone Number"]}</p>
          <p><b>Gender:</b> ${formData.Gender}</p>
          <p><b>Who referred you?</b> ${formData["Who referred you"]}</p>
          <p><b>Submitted On:</b> ${formData.date}</p>
          <p><b>Spreadsheet Link: </b> <a href = "https://docs.google.com/spreadsheets/d/1Q5Vs3z9XQI08pykhcjKj28SsVtMcJLIs556CePeENds/edit?gid=907839665#gid=907839665" target="_blank">View Responses</a></p>
        `,
      };

      await transporter.sendMail(mailOptions);
      functions.logger.info("Email notification sent successfully.");
    } catch (error) {
      functions.logger.error(
        "Error syncing to Google Sheets or sending email:",
        error
      );
    }
  }
);
