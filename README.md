# 🛒 React E-Commerce Application

A **full-stack e-commerce platform** built with **React, Node.js, Express, MongoDB, and Stripe**.  
It enables users to browse and search products, filter by categories, manage carts & wishlists, write reviews, and securely checkout with Stripe integration.

🔗 **Live Demo:** [React E-Commerce App](https://frontend-utew.onrender.com)

---

## ✨ Features

- 🔐 **User Authentication** – JWT-based login & signup  
- 🛍️ **Product Browsing** – Categories, filters & search  
- ❤️ **Wishlist & Cart Management**  
- ⭐ **Product Reviews & Ratings**  
- 💳 **Secure Stripe Payments**  
- 📱 **Responsive UI** – Built with TailwindCSS  
- 📰 **Newsletter & Offers**  
- 🎯 **Advanced Filtering & Sorting**  

---

## 🛠 Tech Stack

**Frontend**
- ⚛️ React  
- 🎨 Tailwind CSS  
- 🔀 React Router  
- 📡 Axios  
- 🔔 React Toastify  

**Backend**
- 🟢 Node.js  
- 🚏 Express.js  
- 🍃 MongoDB + Mongoose  
- 💳 Stripe API  

---

## 📂 Folder Structure

```bash
ecommerce-app/
├── client/                  # React frontend
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
├── server/                  # Express backend
│   ├── config/              # DB & Stripe config
│   ├── controllers/         # API business logic
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   ├── middleware/          # JWT & error handling
│   ├── server.js            # Entry point
│   └── package.json
│
├── .env.example             # Environment variable template
├── README.md                # Documentation
└── package.json             # Root config (if monorepo)

🚀 Installation & Setup
1️⃣ Clone repo
git clone <repo-url>
cd ecommerce-app

2️⃣ Install dependencies
# Backend
cd server && npm install

# Frontend
cd client && npm install

3️⃣ Setup environment variables

Create server/.env with:

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-secret
PORT=5000

4️⃣ Run locally
# Backend
cd server && npm run dev

# Frontend
cd client && npm start


App runs at 👉 http://localhost:3000

📦 Deployment

Frontend: Vercel / Netlify / Render

Backend: Render / Railway / Heroku

Database: MongoDB Atlas

📜 License

MIT License – free to use & modify 🚀


