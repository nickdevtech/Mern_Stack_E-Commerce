# 🛒 React E-Commerce Application

A **full-stack e-commerce platform** built with **React, Node.js, Express, MongoDB, and Stripe**.  
This project enables users to browse and search products, filter by categories, manage carts and wishlists, leave reviews, and securely checkout with **Stripe integration**.

🔗 **Live Demo:** [React E-Commerce App](https://frontend-utew.onrender.com)

---

## ✨ Features

- 🔐 **User Authentication** – Secure JWT-based login & signup  
- 🛍️ **Product Browsing** – Categories, advanced filtering & search  
- ❤️ **Wishlist & Cart** – Add, update, and manage items seamlessly  
- ⭐ **Reviews & Ratings** – Customers can rate and review products  
- 💳 **Stripe Payments** – Fully integrated, secure checkout  
- 📱 **Responsive UI** – Mobile-friendly with Tailwind CSS  
- 📰 **Newsletter & Offers** – Stay connected with promotions  
- 🎯 **Sorting & Filtering** – Price, popularity, and category filters  

---

## 🛠 Tech Stack

### **Frontend**
- ⚛️ React 18  
- 🎨 TailwindCSS  
- 🔀 React Router  
- 📡 Axios  
- 🔔 React Toastify  

### **Backend**
- 🟢 Node.js  
- 🚏 Express.js  
- 🍃 MongoDB + Mongoose  
- 💳 Stripe API  

---

## 📂 Project Structure

```bash
ecommerce-app/
├── frontend/                  # React frontend
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # App pages (Home, Cart, Login, etc.)
│   │   ├── context/         # Global state & context
│   │   ├── utils/           # API calls & helpers
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/                  # Express backend
│   ├── config/              # Database & Stripe config
│   ├── controllers/         # Business logic
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── middleware/          # JWT & error handling
│   ├── server.js            # Entry point
│   └── package.json
│
├── .env.example             # Environment variable template
├── README.md                # Documentation
└── package.json             # Root config (monorepo)
```

---

## 🚀 Installation & Setup

### 1. Clone the repo
```bash
git clone <repo-url>
cd ecommerce-app
```

### 2. Install dependencies
**Backend**
```bash
cd server
npm install
```

**Frontend**
```bash
cd client
npm install
```

### 3. Configure environment variables
Create a `server/.env` file:

```env
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-secret
PORT=5000
```

### 4. Run locally
**Backend**
```bash
cd server
npm run dev
```

**Frontend**
```bash
cd client
npm start
```

The app will be available at 👉 [http://localhost:3000](http://localhost:3000)

---

## 📦 Deployment

- **Frontend:** Vercel / Netlify / Render  
- **Backend:** Render / Railway / Heroku  
- **Database:** MongoDB Atlas  

---

## 📜 License

This project is licensed under the **MIT License**.  
You’re free to use, modify, and distribute it 🚀  

