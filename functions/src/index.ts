const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const path = require("path");

admin.initializeApp();

// test

// Gmail Transporter (for OMEGA email notifications)
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

const partnersTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pomipartners@gmail.com", // Replace with your email
    pass: process.env.PARTNERS_MAIL_PASS, // Use app password
  },
});

function getValue(
  formData: any,
  key: string,
  defaultValue: string = "N/A"
): string {
  return formData[key] || defaultValue;
}

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
    const values = [
      [
        getValue(formData, "First Name"),
        getValue(formData, "Last Name"),
        getValue(formData, "Email"),
        getValue(formData, "Phone Number"),
        getValue(formData, "Gender"),
        getValue(formData, "Home Address"),
        getValue(formData, "Who referred you"),
        getValue(formData, "date", new Date().toISOString()),
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
      functions.logger.info("Data added to 'Partners' sheet.", { values });

      const mailOptions = {
        from: "omegachapel6@gmail.com",
        to: ["godsonoladipupo6@gmail.com"],
        subject: "New 'Partners' Form Submission",
        html: `
          <p><b>New Partnership Form Submission:</b></p>
          <p><b>First Name:</b> ${getValue(formData, "First Name")}</p>
          <p><b>Last Name:</b> ${getValue(formData, "Last Name")}</p>
          <p><b>Email:</b> ${getValue(formData, "Email")}</p>
          <p><b>Phone Number:</b> ${getValue(formData, "Phone Number")}</p>
          <p><b>Gender:</b> ${getValue(formData, "Gender")}</p>
          <p><b>Home Address:</b> ${getValue(formData, "Home Address")}</p>
          <p><b>Who referred you?</b> ${getValue(formData, "Who referred you")}</p>
          <p><b>Submitted On:</b> ${getValue(formData, "date", new Date().toISOString())}</p>
          <p><b>Spreadsheet Link:</b> 
            <a href="https://docs.google.com/spreadsheets/d/1Q5Vs3z9XQI08pykhcjKj28SsVtMcJLIs556CePeENds/edit?gid=907839665#gid=907839665" 
               target="_blank">View Responses</a>
          </p>`,
      };

      await partnersTransporter.sendMail(mailOptions);
      functions.logger.info("Email notification sent successfully.", {
        to: mailOptions.to,
      });
    } catch (error) {
      functions.logger.error(
        "Error syncing to Google Sheets or sending email:",
        error
      );
    }
  }
);

// UPDATE THE PARTNERS DB

// exports.updateFirestoreCollections = functions.https.onRequest(
//   async (req: any, res: any) => {
//     try {
//       const collectionsToUpdate = ["Partners"]; // Specify the collection name

//       for (const collectionName of collectionsToUpdate) {
//         const snapshot = await admin
//           .firestore()
//           .collection(collectionName)
//           .get();

//         for (const doc of snapshot.docs) {
//           const data = doc.data();

//           const updates: { [key: string]: any } = {};

//           // Rename fullName to "First Name"
//           if (data["Full Name"] !== undefined) {
//             updates["First Name"] = data["Full Name"];
//             updates["Full Name"] = admin.firestore.FieldValue.delete();
//           }

//           // Apply updates if there are any
//           if (Object.keys(updates).length > 0) {
//             await admin
//               .firestore()
//               .collection(collectionName)
//               .doc(doc.id)
//               .update(updates);
//           }
//         }
//       }

//       res.status(200).send("Renamed 'Full Name' to 'First Name' successfully.");
//     } catch (error) {
//       console.error("Error renaming 'Full Name' to 'First Name':", error);
//       res
//         .status(500)
//         .send("An error occurred while renaming 'Full Name' to 'First Name'.");
//     }
//   }
// );

// Firestore trigger for new partnership registration
export const sendRegistrationEmail = functions.firestore
  .document("Partners/{docId}")
  .onWrite(async (change: any, context: any) => {
    // Check if the document was created
    if (!change.before.exists && change.after.exists) {
      const data = change.after.data();

      if (!data) {
        console.error("No data found in the new document.");
        return;
      }

      const email = data["Email"];
      const firstName = data["First Name"] || "Valued Partner";

      if (!email) {
        console.error("No email address found.");
        return;
      }

      const mailOptions = {
        from: "pomipartners@gmail.com",
        to: email,
        subject: "Welcome to Partnership!",
        html: `
          <p>Dear ${firstName},</p>
          <p>Thank you for registering as a partner with us. We're excited to have you onboard!</p>
          <p>Best regards,</p>
          <p>The Partnership Team</p>
        `,
      };

      try {
        await partnersTransporter.sendMail(mailOptions);
        console.log(`Email sent successfully to ${email}`);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  });

// "godsonoladipupo@yahoo.com",
// "godsonoladipupo6@gmail.com",
// "piusoladipupo@yahoo.com",
// "funkeoladipupo@yahoo.com",
// "oladipupodavid18@gmail.com",
// "kemisolajesu03@yahoo.com",
// "olubodunlizzy@gmail.com",
// <p><b>Spreadsheet Link: </b> <a href = "https://docs.google.com/spreadsheets/d/1Q5Vs3z9XQI08pykhcjKj28SsVtMcJLIs556CePeENds/edit?gid=907839665#gid=907839665" target="_blank">View Responses</a></p>
