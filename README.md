# 📸 Photo Gallery App

A modern and responsive **Photo Gallery Web App** built with **React,
Vite, and Tailwind CSS**.\
The app fetches photos from the **Picsum Photos API**, allows users to
**search photos by author**, and **mark photos as favourites** with
persistent storage using **localStorage**.

------------------------------------------------------------------------

## 🚀 Live Demo

(Add your deployed link here after deployment)

https://your-vercel-link.vercel.app

------------------------------------------------------------------------

## 📂 GitHub Repository

https://github.com/yourusername/photo-gallery-react

------------------------------------------------------------------------

## ✨ Features

-   📷 Fetch photos from **Picsum Photos API**
-   🔍 **Real-time search filtering** by author name
-   ❤️ **Favourite photos** using `useReducer`
-   💾 **Persist favourites** using `localStorage`
-   ⚡ **Performance optimization** using `useMemo` and `useCallback`
-   📱 **Fully responsive layout**
-   🎨 Modern UI built with **Tailwind CSS**
-   🔄 Loading spinner and error handling

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   React
-   Vite
-   Tailwind CSS
-   JavaScript (ES6+)
-   Picsum Photos API

------------------------------------------------------------------------

## 📦 Project Structure

src ├── components │ ├── Gallery.jsx │ └── PhotoCard.jsx │ ├── hooks │
└── useFetchPhotos.js │ ├── reducers │ └── favouritesReducer.js │ ├──
App.jsx └── main.jsx

------------------------------------------------------------------------

## ⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/photo-gallery-react.git

Go to the project folder:

cd photo-gallery-react

Install dependencies:

npm install

Run the development server:

npm run dev

Open in browser:

http://localhost:5173

------------------------------------------------------------------------

## 📡 API Used

https://picsum.photos/v2/list?limit=30

------------------------------------------------------------------------

## 🧠 Key React Concepts Used

-   Custom Hooks (`useFetchPhotos`)
-   `useReducer` for managing favourites
-   `useMemo` for optimized filtering
-   `useCallback` to prevent unnecessary re-renders
-   `localStorage` for persistent favourites

------------------------------------------------------------------------

## 👨‍💻 Author

**Vaibhav Sahu**\
B.Tech CSE (AI & ML)

GitHub: https://github.com/yourusername

------------------------------------------------------------------------

⭐ If you like this project, give it a star on GitHub!
