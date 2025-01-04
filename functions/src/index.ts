// const functions = require("firebase-functions");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
import nodemailer from "nodemailer";
import { google } from "googleapis";
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
        getValue(formData, "Partnership Frequency"),
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
          <p><b>Home Address:</b> ${getValue(formData, "Partnership Frequency")}</p>
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

exports.updateFirestoreCollections = functions.https.onRequest(
  async (req: any, res: any) => {
    try {
      const collectionsToUpdate = ["Partners"]; // Specify the collection name

      for (const collectionName of collectionsToUpdate) {
        const snapshot = await admin
          .firestore()
          .collection(collectionName)
          .get();

        for (const doc of snapshot.docs) {
          const data = doc.data();
          const updates: { [key: string]: any } = {};

          // Rename "Partnershp Frequency" to "Partnership Frequency"
          if (data["Partnershp Frequency"] !== undefined) {
            updates["Partnership Frequency"] = data["Partnershp Frequency"];
            updates["Partnershp Frequency"] =
              admin.firestore.FieldValue.delete();
          }

          // Apply updates if there are any
          if (Object.keys(updates).length > 0) {
            await admin
              .firestore()
              .collection(collectionName)
              .doc(doc.id)
              .update(updates);
          }
        }
      }

      res
        .status(200)
        .send(
          "Renamed 'Partnershp Frequency' to 'Partnership Frequency' successfully."
        );
    } catch (error) {
      console.error(
        "Error renaming 'Partnershp Frequency' to 'Partnership Frequency':",
        error
      );
      res
        .status(500)
        .send(
          "An error occurred while renaming 'Partnershp Frequency' to 'Partnership Frequency'."
        );
    }
  }
);

// Firestore trigger for new partnership registration
export const sendRegistrationEmail = functions.firestore.onDocumentCreated(
  "Partners/{docId}",
  async (event: any) => {
    const snap = event.data;
    // Ensure snap is valid and data is available
    if (!snap) {
      console.error("No document found in the snapshot.");
      return;
    }

    const data = snap.data(); // This should be available for onCreate
    if (!data) {
      console.error("No data found in the new document.");
      return;
    }

    const email = data["Email"]; // User's email address from Firestore
    const firstName = data["First Name"] || "Valued Partner";

    // Log the data for debugging
    console.log("New Partner Registration Data:", data);

    // Ensure 'Email' is available
    if (!email) {
      console.error("No email address found in the document.");
      return;
    }

    const mailOptions = {
      from: "pomipartners@gmail.com",
      to: email,
      subject: `Welcome to POMI, ${firstName}!`,
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>New Message</title><!--[if (mso 16)]>
      <style type="text/css">
         a {text-decoration: none;}
      </style>
      <![endif]--><!--[if gte mso 9]>
      <style>sup { font-size: 100% !important; }</style>
      <![endif]--><!--[if gte mso 9]>
      <noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
      <![endif]--><!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail/>
    </w:WordDocument>
    </xml><![endif]-->
  <style type="text/css">
.rollover:hover .rollover-first {
  max-height:0px!important;
  display:none!important;
}
.rollover:hover .rollover-second {
  max-height:none!important;
  display:block!important;
}
.rollover span {
  font-size:0px;
}
u + .body img ~ div div {
  display:none;
}
#outlook a {
  padding:0;
}
span.MsoHyperlink,
span.MsoHyperlinkFollowed {
  color:inherit;
  mso-style-priority:99;
}
a.es-button {
  mso-style-priority:100!important;
  text-decoration:none!important;
}
a[x-apple-data-detectors],
#MessageViewBody a {
  color:inherit!important;
  text-decoration:none!important;
  font-size:inherit!important;
  font-family:inherit!important;
  font-weight:inherit!important;
  line-height:inherit!important;
}
.es-desk-hidden {
  display:none;
  float:left;
  overflow:hidden;
  width:0;
  max-height:0;
  line-height:0;
  mso-hide:all;
}
@media only screen and (max-width:600px) {.es-m-p20b { padding-bottom:20px!important } .es-p-default { } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } .es-header-body p { } .es-content-body p { } .es-footer-body p { } .es-infoblock p { } h1 { font-size:40px!important; text-align:left } h2 { font-size:32px!important; text-align:left } h3 { font-size:28px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:40px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:32px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:28px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important; display:block } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:14px!important; padding:10px 20px 10px 20px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .h-auto { height:auto!important } .es-text-4774 .es-text-mobile-size-11, .es-text-4774 .es-text-mobile-size-11 * { font-size:11px!important; line-height:150%!important } }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
</style>
 </head>
 <body class="body" style="width:100%;height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#F6F6F6"><!--[if gte mso 9]>
         <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#f6f6f6"></v:fill>
         </v:background>
         <![endif]-->
   <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-color:#F6F6F6">
     <tr>
      <td valign="top" style="padding:0;Margin:0">
       <table cellspacing="0" cellpadding="0" align="center" class="es-header" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-header-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
               <table cellspacing="0" cellpadding="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td valign="top" align="center" class="es-m-p20b" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0"><img src="https://elsrpud.stripocdn.email/content/guids/CABINET_b580bad6e46a5fb2164b8c7fecd6c27954f5e363182470e12a41f4b6c7a62340/images/pomi_welcome_banner.png" alt="" width="560" class="adapt-img" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Dearest ${firstName},</p>
                      <p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><br></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">It’s so good to have your support with us as we journey to make a difference in the world through the gospel of our Lord and Savior Jesus Christ. More importantly, it’s so good to have you.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><br></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">You are so special and very important to God and to us as we have prayed to God to send someone like you our way. As we serve the Lord together, expect new grace, new mercy and favour upon you and yours beyond what you are able to give.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><br></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">The Lord will crown your decision with fulfillment and choice testimonies. Kindly stay closely in touch through your consistent prayers and seed as you have purposed. Our prayers for you and grace sharing is without fail.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><br></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Should you have any questions or special prayer points, feel free to contact us at <a href="mailto:pomipartners@gmail.com" target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;color:#1376C8;font-size:14px">pomipartners@gmail.com</a></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><br></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">We look forward to a fruitful and rewarding partnership in His vineyard and do accept our assurance of the highest esteem.</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellspacing="0" cellpadding="0" align="center" class="es-footer" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-footer-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="Margin:0;padding-top:20px;padding-right:20px;padding-left:20px;padding-bottom:20px">
               <table cellspacing="0" cellpadding="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Love from Pius and Funke Oladipupo</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Living like Jesus</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
               <table width="100%" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#5b90c8;border-width:0px 0px 2px 0px;display:inline-block;border-radius:3px;width:auto"><a href="https://www.omegachapel.org/our-partners" target="_blank" class="es-button" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;padding:10px 20px 10px 20px;display:inline-block;background:#5b90c8;border-radius:3px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:16.8px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #5b90c8">Give to Partner With Us</a></span></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr>
              <td align="left" style="padding:20px;Margin:0">
               <table width="100%" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" class="es-text-4774" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><em class="es-text-mobile-size-11" style="font-size:11px">Copyright (C) 2025 POMI. All rights reserved.</em></p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table>
  </div>
 </body>
</html>
    `,
    };

    try {
      await partnersTransporter.sendMail(mailOptions);
      console.log("Email sent successfully to:", email);
    } catch (error) {
      console.error("Error sending email to", email, ":", error);
    }
  }
);

// "godsonoladipupo@yahoo.com",
// "godsonoladipupo6@gmail.com",
// "piusoladipupo@yahoo.com",
// "funkeoladipupo@yahoo.com",
// "oladipupodavid18@gmail.com",
// "kemisolajesu03@yahoo.com",
// "olubodunlizzy@gmail.com",
// <p><b>Spreadsheet Link: </b> <a href = "https://docs.google.com/spreadsheets/d/1Q5Vs3z9XQI08pykhcjKj28SsVtMcJLIs556CePeENds/edit?gid=907839665#gid=907839665" target="_blank">View Responses</a></p>
