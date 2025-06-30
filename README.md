# Realtime Chat App

A full-stack real-time chat application that allows users to sign up, log in, and chat instantly with others. It features user authentication, image sharing, online status, and a modern, responsive interface. The backend is built with Express, MongoDB, and Socket.IO, while the frontend uses React, Vite, Zustand, and Tailwind CSS.

---

## Features

- **User Authentication**: Signup, login, logout, and profile management.
- **Real-time Messaging**: Instant chat with Socket.IO.
- **Image Uploads**: Send images in chat (stored via Cloudinary).
- **Online Status**: See which users are online.
- **Modern UI**: Responsive, themeable interface with Tailwind CSS and DaisyUI.
- **State Management**: Powered by Zustand.
- **API**: RESTful endpoints for authentication and messaging.

---

## Project Structure

```
chat-app/
  backend/    # Express, MongoDB, Socket.IO, Cloudinary
  frontend/   # React, Vite, Zustand, Tailwind, DaisyUI
```

---

## Getting Started

### Prerequisites

- **Node.js** v20.x
- **MongoDB** (local or Atlas)
- **Cloudinary** account (for image uploads)

---

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd chat-app
```

---

### 2. Backend Setup

#### Install dependencies

```bash
cd backend
npm install
```

#### Create a `.env` file in `backend/` with the following:

```
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

#### Run the backend server

```bash
npm run dev
```

The backend will run on [http://localhost:5001](http://localhost:5001).

---

### 3. Frontend Setup

#### Install dependencies

```bash
cd ../frontend
npm install
```

#### Run the frontend dev server

```bash
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173).

---

## Environment Variables

**Backend (`backend/.env`):**

- `PORT` - Port for the backend server (default: 5001)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret for JWT signing
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret
- `NODE_ENV` - `development` or `production`

**Frontend:**  
No custom `.env` needed for local development. The frontend expects the backend at `http://localhost:5001/api`.

---

## Scripts

### Root

- `npm run build` - Installs dependencies and builds frontend
- `npm start` - Starts backend server

### Backend

- `npm run dev` - Start backend with nodemon
- `npm start` - Start backend

### Frontend

- `npm run dev` - Start Vite dev server
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

---

## Tech Stack

- **Frontend:** React, Vite, Zustand, Tailwind CSS, DaisyUI, Socket.IO Client, Axios
- **Backend:** Express, MongoDB (Mongoose), Socket.IO, Cloudinary, JWT, bcryptjs
- **Other:** ESLint, Lucide Icons

---

## Deployment

- In production, the backend serves the built frontend from `frontend/dist`.
- Set `NODE_ENV=production` in your backend `.env` for deployment.

---

## 📬 Contact & Social

- Linkedin: [@Mohammad-Bashir](https://www.linkedin.com/in/mohammad-bashir-7545a3212/)
- GitHub: [@MohammadBT240](https://github.com/MohammadBT240)
- Email: bashtukus@gmail.com

---

## License

This project is licensed under the ISC License.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Socket.IO](https://socket.io/)
- [Cloudinary](https://cloudinary.com/)
- [MongoDB](https://www.mongodb.com/)
