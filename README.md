# 💰 BellCorp Expense Tracker

<div align="center">

![BellCorp Banner](https://img.shields.io/badge/BellCorp-Expense%20Tracker-6366f1?style=for-the-badge&logo=trending-up&logoColor=white)

**A modern, full-stack MERN expense tracking application with advanced transaction management**

[![Live Demo](https://img.shields.io/badge/demo-online-success?style=for-the-badge)](https://your-demo-link.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [API](#-api-documentation) • [Deployment](#-deployment)

</div>

---

## 📸 Screenshots

<div align="center">

### Login

<img width="1240" height="649" alt="image" src="https://github.com/user-attachments/assets/bdc7c341-bbd7-4c33-9552-d85aa4b3014c" />


### Dashboard

<img width="1240" height="1456" alt="image" src="https://github.com/user-attachments/assets/37900aad-2aca-4405-b3a4-f19e34aece01" />


### Transaction Explorer

<img width="1240" height="1642" alt="image" src="https://github.com/user-attachments/assets/d85f1325-3b80-4ae1-9c43-5aa5018e0719" />


</div>


## ✨ Features

### 🔐 **Authentication & Security**
- JWT-based authentication with secure token management
- Password hashing with bcrypt
- Protected routes with middleware validation
- Auto-logout on token expiration

### 💳 **Transaction Management**
- **Full CRUD Operations**: Create, Read, Update, Delete transactions
- **Rich Transaction Data**: Title, Amount, Category, Date, Notes
- **9 Expense Categories**: Food, Transportation, Entertainment, Shopping, Bills, Health, Education, Travel, Other
- **Real-time Updates**: Instant UI refresh after operations

### 🔍 **Advanced Transaction Explorer**
- **🔎 Smart Search**: Full-text search across titles and notes
- **🎯 Multi-Filter System**:
  - Filter by category
  - Date range filtering
  - Amount range (min/max)
  - Combined filter support
- **📄 Pagination**: Smooth browsing of large transaction histories
- **⚡ Dynamic Loading**: Data fetched on-demand
- **🔀 Flexible Sorting**: By date, amount, or title (ascending/descending)
- **💾 State Persistence**: Filters maintained during navigation
- **🎨 Empty State Handling**: Beautiful UX for no results

### 📊 **Dashboard & Analytics**
- **Total Expenses Summary**: Aggregated spending overview
- **Category Breakdown**: Interactive pie chart with percentages
- **Recent Transactions**: Quick view of latest 5 expenses
- **Visual Statistics**: Beautiful cards with gradient accents
- **Real-time Data**: Auto-updates from database

### 🎨 **Modern UI/UX**
- **Distinctive Design**: Dark theme with gradient accents
- **Smooth Animations**: Framer Motion for fluid transitions
- **Responsive Layout**: Mobile-first design for all devices
- **Custom Typography**: Syne + DM Sans font pairing
- **Toast Notifications**: Real-time feedback for all actions
- **Loading States**: Elegant spinners and skeletons
- **Indian Currency**: Full INR (₹) support with proper formatting

---

## 🛠️ Tech Stack

### Frontend
[![React](https://img.shields.io/badge/React-18.2-61dafb?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-ff0055?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Recharts](https://img.shields.io/badge/Recharts-2.10-22b5bf?style=flat-square)](https://recharts.org/)

- **React 18** - UI library with hooks
- **Vite** - Lightning-fast build tool
- **React Router v6** - Client-side routing
- **Framer Motion** - Animation library
- **Recharts** - Data visualization
- **Axios** - HTTP client
- **React Hot Toast** - Notification system
- **date-fns** - Date formatting
- **Lucide React** - Beautiful icons

### Backend
[![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5+-47a248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=flat-square&logo=json-web-tokens&logoColor=white)](https://jwt.io/)

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Token-based authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **CORS** - Cross-origin resource sharing

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/bellcorp-expense-tracker.git
cd bellcorp-expense-tracker
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

4. **Configure Environment Variables**

Create `.env` file in the `backend` directory:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/bellcorp-expense-tracker
JWT_SECRET=your_super_secret_jwt_key_change_in_production
```

For MongoDB Atlas, use:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/bellcorp
```

5. **Seed the Database** (Optional but recommended)
```bash
cd backend
npm run seed
```

This creates:
- 1 demo user (`demo@bellcorp.com` / `demo123`)
- 20 sample transactions with realistic Indian amounts (₹37,157 total)

6. **Start Development Servers**

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Server runs on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
App runs on `http://localhost:3000`

7. **Open Your Browser**

Navigate to `http://localhost:3000` and login with:
- **Email**: demo@bellcorp.com
- **Password**: demo123

---

## 📖 Usage

### Dashboard
- View total expenses summary (₹37,157)
- Analyze spending by category with pie chart
- Quick access to recent 5 transactions

### Transaction Management
1. **Add Transaction**: Click "+ Add Transaction" button
2. **Edit**: Click edit icon on any transaction card
3. **Delete**: Click trash icon (with confirmation)
4. **View Details**: Each card shows full transaction info

### Search & Filter
- **Search**: Type in search bar to find transactions
- **Category Filter**: Select from dropdown
- **Date Range**: Set start and end dates
- **Amount Range**: Filter by min/max amount
- **Sort**: Choose sort field and order
- **Reset**: Clear all filters with one click

### Pagination
- Navigate through pages with Previous/Next buttons
- Shows current page and total count
- Configurable items per page (default: 10)

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "_id": "user_id",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "jwt_token"
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /auth/me
Authorization: Bearer {token}
```

### Transaction Endpoints

#### Get All Transactions (with filters)
```http
GET /transactions?page=1&limit=10&search=grocery&category=Food&startDate=2024-02-01&endDate=2024-02-28&minAmount=0&maxAmount=1000&sortBy=date&sortOrder=desc
Authorization: Bearer {token}
```

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| page | number | Page number (default: 1) |
| limit | number | Items per page (default: 10) |
| search | string | Search in title and notes |
| category | string | Filter by category |
| startDate | date | Filter from date (YYYY-MM-DD) |
| endDate | date | Filter to date (YYYY-MM-DD) |
| minAmount | number | Minimum amount |
| maxAmount | number | Maximum amount |
| sortBy | string | Sort field (date, amount, title) |
| sortOrder | string | Sort direction (asc, desc) |

#### Get Dashboard Statistics
```http
GET /transactions/stats
Authorization: Bearer {token}
```

#### Get Single Transaction
```http
GET /transactions/:id
Authorization: Bearer {token}
```

#### Create Transaction
```http
POST /transactions
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Grocery Shopping",
  "amount": 4500,
  "category": "Food",
  "date": "2024-02-15",
  "notes": "Weekly groceries"
}
```

#### Update Transaction
```http
PUT /transactions/:id
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Updated Title",
  "amount": 5000,
  "category": "Food",
  "date": "2024-02-15",
  "notes": "Updated notes"
}
```

#### Delete Transaction
```http
DELETE /transactions/:id
Authorization: Bearer {token}
```

---

## 🌐 Deployment

### Deploy to Production

#### Backend (Render)

1. Create account at [render.com](https://render.com)
2. New Web Service → Connect GitHub repo
3. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add Environment Variables:
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_production_jwt_secret
   NODE_ENV=production
   ```

#### Frontend (Vercel)

1. Create account at [vercel.com](https://vercel.com)
2. Import GitHub repo
3. Configure:
   - **Framework**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add Environment Variables:
   ```
   VITE_API_URL=https://your-backend.onrender.com/api
   ```

#### Database (MongoDB Atlas)

1. Create free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create database user
3. Whitelist IP addresses (0.0.0.0/0 for development)
4. Get connection string
5. Add to backend environment variables

**Detailed deployment guide**: See [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📂 Project Structure

```
bellcorp-expense-tracker/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── models/
│   │   ├── User.js               # User schema
│   │   └── Transaction.js        # Transaction schema
│   ├── routes/
│   │   ├── auth.js               # Auth endpoints
│   │   └── transactions.js       # Transaction CRUD
│   ├── middleware/
│   │   └── auth.js               # JWT middleware
│   ├── seed.js                   # Database seeder
│   ├── test-db.js                # DB verification script
│   ├── server.js                 # Express setup
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/             # Login, Register
│   │   │   ├── Dashboard/        # Dashboard, Stats, Charts
│   │   │   ├── Transactions/     # CRUD, Explorer, Filters
│   │   │   └── Layout/           # Navbar, Routes
│   │   ├── context/
│   │   │   └── AuthContext.jsx  # Auth state
│   │   ├── utils/
│   │   │   └── api.js            # Axios config
│   │   ├── App.jsx               # Main component
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
├── README.md
├── DEPLOYMENT.md
├── QUICKSTART.md
├── TROUBLESHOOTING.md
└── LICENSE
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Update documentation for new features
- Test thoroughly before submitting PR

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea?

- **Bug Reports**: [Open an issue](https://github.com/yourusername/bellcorp-expense-tracker/issues/new?labels=bug)
- **Feature Requests**: [Open an issue](https://github.com/yourusername/bellcorp-expense-tracker/issues/new?labels=enhancement)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📊 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/yourusername/bellcorp-expense-tracker?style=social)
![GitHub Forks](https://img.shields.io/github/forks/yourusername/bellcorp-expense-tracker?style=social)
![GitHub Issues](https://img.shields.io/github/issues/yourusername/bellcorp-expense-tracker)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/yourusername/bellcorp-expense-tracker)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ and lots of ☕

[⬆ Back to Top](#-bellcorp-expense-tracker)

</div>
