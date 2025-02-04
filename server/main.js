import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import { Mongo } from "meteor/mongo";
export const Contacts = new Mongo.Collection("contacts");

Meteor.methods({
  async submitContactForm({ firstName, lastName, email, message }) {
    // Define validation schema
    const contactFormSchema = new SimpleSchema({
      firstName: { type: String, min: 2, max: 50 },
      lastName: { type: String, min: 2, max: 50 },
      email: {
        type: String,
        regEx: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      },
      message: { type: String, min: 10, max: 1000 },
    });

    // Validate incoming data
    try {
      contactFormSchema.validate({ firstName, lastName, email, message });
    } catch (validationError) {
      throw new Meteor.Error("validation-error", validationError.message);
    }

    console.log("New contact form submission:", {
      firstName,
      lastName,
      email,
      message,
    });

    try {
      await Contacts.insertAsync({
        firstName,
        lastName,
        email,
        message,
        createdAt: new Date(),
      });
    } catch (dbError) {
      console.error("Database insertion failed:", dbError);
      throw new Meteor.Error(
        "database-error",
        "Failed to save contact form. Please try again later."
      );
    }

    return { status: "success", message: "Form submitted successfully" };
  },
  getAllContacts() {
    return Contacts.find({}, { sort: { createdAt: -1 } }).fetch();
  },
});

Meteor.startup(() => {
  console.log("Meteor server started...");
});
