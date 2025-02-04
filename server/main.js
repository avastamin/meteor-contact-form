import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
  submitContactForm({ firstName, lastName, email, message }) {
    check(firstName, String);
    check(lastName, String);
    check(email, String);
    check(message, String);

    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      throw new Meteor.Error(
        "invalid-email",
        "Please provide a valid email address"
      );
    }

    console.log("New contact form submission:", {
      firstName,
      lastName,
      email,
      message,
    });

    return { status: "success", message: "Form submitted successfully" };
  },
});

Meteor.startup(() => {
  console.log("Meteor server started...");
});
