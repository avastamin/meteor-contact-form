# Meteor React Bootstrap Contact Form

This is a simple **Contact Form** built using **MeteorJS, React, and Bootstrap**. It allows users to submit their contact details (First Name, Last Name, Email, and Message), which are then handled by a Meteor server method.

---

## Features

✅ **MeteorJS** for full-stack JavaScript development  
✅ **React** for UI rendering  
✅ **Bootstrap** for styling  
✅ **Meteor Methods** to handle form submission  
✅ **Client-Side Validation** using React Hooks  
✅ **Server-Side Validation** using Meteor Methods  
✅ **Success/Error Alerts** on form submission

---

## Prerequisites

Before running this project, ensure you have:

- **Node.js** installed (Recommended: Latest LTS version)
- **MeteorJS** installed globally
  ```sh
  curl https://install.meteor.com/ | sh
  ```
- **Git** (optional) to clone the repository

---

## Installation

1. **Clone the Repository** (or create a new Meteor project and replace the `client/` and `server/` files):

   ```sh
   git clone https://github.com/yourusername/meteor-contact-form.git
   cd meteor-contact-form
   ```

2. **Install Dependencies**:

   ```sh
   meteor npm install
   ```

3. **Start the Meteor Server**:

   ```sh
   meteor
   ```

4. **Open in Browser**:
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
meteor-contact-form/
│── client/
│   ├── main.jsx   # React Contact Form Component
│── server/
│   ├── main.js    # Meteor Method to Handle Form Submission
│── package.json   # Project Dependencies
│── .meteor/       # Meteor Configuration
│── README.md      # Project Documentation
```

---

## Usage

- Open `http://localhost:3000`
- Fill out the **Contact Form**
- Click **Submit**
- Check the console for submitted data

---

## Technologies Used

- **MeteorJS** (Full-stack JavaScript framework)
- **React** (Component-based UI rendering)
- **Bootstrap** (Responsive styling)
- **Meteor Methods** (For backend logic handling)

---

## Customization

### Modify Styling

You can customize the form’s appearance by modifying Bootstrap classes in `client/main.jsx` or adding a custom CSS file.

### Add Database Support

Currently, form submissions are logged in the server console. You can store them in a MongoDB collection:

1. **Import MongoDB in `server/main.js`**:

   ```js
   import { Mongo } from "meteor/mongo";
   export const Contacts = new Mongo.Collection("contacts");
   ```

2. **Modify the Meteor Method to Save Data**:
   ```js
   Contacts.insert({
     firstName,
     lastName,
     email,
     message,
     createdAt: new Date(),
   });
   ```

---

## Contributing

Contributions are welcome! If you’d like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Author

**Your Name**  
GitHub: [@yourusername](https://github.com/yourusername)  
Email: your.email@example.com

Feel free to reach out for collaborations or suggestions! 🚀
