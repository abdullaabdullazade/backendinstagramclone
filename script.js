const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "metalninjas1@gmail.com",
    pass: "uqzg ckqk qbty sfvu"
  },
});

let mailDetails = {
  from: "metalninjas1@gmail.com",
  to: "cara13in@gmail.com",
  subject: "Test mail",
  text: "Node.js testing mail for GeeksforGeeks",
};

mailTransporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    console.log("Error Occurs");
  } else {
    console.log("Email sent successfully");
  }
});
