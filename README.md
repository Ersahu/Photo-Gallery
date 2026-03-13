# 📸 Photo Gallery App

A modern and responsive **Photo Gallery Web App** built with **React,
Vite, and Tailwind CSS**.\
The app fetches photos from the **Picsum Photos API**, allows users to
**search photos by author**, and **mark photos as favourites** with
persistent storage using **localStorage**.


## 📂 GitHub Repository

https://github.com/Ersahu/Photo-Gallery

## ✨ Features

-   📷 Fetch photos from **Picsum Photos API**
-   🔍 **Real-time search filtering** by author name
-   ❤️ **Favourite photos** using `useReducer`
-   💾 **Persist favourites** using `localStorage`
-   ⚡ **Performance optimization** using `useMemo` and `useCallback`
-   📱 **Fully responsive layout**
-   🎨 Modern UI built with **Tailwind CSS**
-   🔄 Loading spinner and error handling

## 🛠️ Tech Stack

-   React
-   Vite
-   Tailwind CSS
-   JavaScript (ES6+)
-   Picsum Photos API


## 📦 Project Structure

src ├── components │ ├── Gallery.jsx │ └── PhotoCard.jsx │ ├── hooks │
└── useFetchPhotos.js │ ├── reducers │ └── favouritesReducer.js │ ├──
App.jsx └── main.jsx


## ⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/Ersahu/Photo-Gallery.git

Go to the project folder:

cd photo-gallery

Install dependencies:

npm install

Run the development server:

npm run dev

Open in browser:

http://localhost:5173


## 📡 API Used

https://picsum.photos/v2/list?limit=30


## 🧠 Key React Concepts Used

-   Custom Hooks (`useFetchPhotos`)
-   `useReducer` for managing favourites
-   `useMemo` for optimized filtering
-   `useCallback` to prevent unnecessary re-renders
-   `localStorage` for persistent favourites


## 🤝 Contributions
We welcome pull requests! For major changes, please open an issue to discuss what you'd like to improve or add.

## 📧 Contact
**Developer**: Vaibhav

**Email**: sahuvaibhav064@gmail.com

**LinkedIn**: https://www.linkedin.com/in/vaibhav-chaudhary-615712272/

## 📜 License
MIT License © 2025 Vaibhav
GitHub: https://github.com/yourusername

------------------------------------------------------------------------

⭐ If you like this project, give it a star on GitHub!
