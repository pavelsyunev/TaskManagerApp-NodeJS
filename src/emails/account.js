const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//   to: "6305452@gmail.com",
//   from: "6305452@gmail.com",
//   subject: "My first SendGrid email.",
//   text: "My first SendGrid email."
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "6305452@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}!`
  });
};

const sendDeleteEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "6305452@gmail.com",
    subject: "Sorry, that you leathe this app!",
    text: `See you next time, ${name}!`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendDeleteEmail
};
