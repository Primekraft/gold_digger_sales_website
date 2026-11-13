# GoldDigger 🪙

A gold investment application built with JavaScript and Node.js. GoldDigger allows users to enter an investment amount, calculate the equivalent quantity of gold using the current gold price, and generate an investment receipt in PDF format.

## 🚀 Features

- Displays live gold price data.
- Allows users to enter their desired investment amount.
- Calculates the quantity of gold they can purchase.
- Handles investment submissions using HTTP POST requests.
- Generates PDF investment receipts using PDFKit.
- Uses Node.js EventEmitter to trigger events after successful purchases.
- Logs investment records for tracking purposes.

## 🛠️ Technologies Used

- **HTML** – Application structure.
- **CSS** – User interface styling.
- **JavaScript (ES Modules)** – Frontend functionality.
- **Node.js** – Backend server and request handling.
- **Node.js File System (fs)** – File operations.
- **PDFKit** – PDF receipt generation.
- **EventEmitter** – Event-driven programming.

## 📂 Project Structure

```text
gold_digger_solo_project/
│
├── public/
│   ├── index.html
│   ├── index.js
│   ├── upload-investment.js
│   └── style.css
│
├── route/
│   └── handleRoute.js
│
├── utils/
│   ├── parseBody.js
│   ├── sendResponse.js
│   └── generatepdf.js
│
├── server.js
├── package.json
└── README.md
```

*Note: Adjust this structure to match your actual project folders and filenames.*

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd gold_digger_solo_project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

If you do not have a start script in your `package.json`, you can run:

```bash
node server.js
```

### 5. Open the application

Visit:

```text
http://localhost:500
```


## 🧠 What I Learned Building This Project

This project helped me practise:

- Creating an HTTP server with Node.js.
- Understanding GET and POST requests.
- Receiving and parsing JSON request bodies.
- Separating backend logic into reusable modules.
- Working with the Node.js File System.
- Understanding asynchronous JavaScript.
- Using EventEmitter for event-driven programming.
- Generating PDF documents with PDFKit.
- Sending binary PDF responses to the browser.
- Using the Fetch API and Blob to handle file downloads.

## 🔮 Future Improvements

- Integrate a database such as PostgreSQL to store investment records.
- Add user authentication.
- Improve investment history and receipt management.
- Deploy the application online.
- Add secure payment processing.
- Validate investment data on the server.

## 👨‍💻 Author

Built by me Bienose Emmanuel  as a personal Node.js learning project.

**GoldDigger — Learning by building.**
