# 🚐 Travel Trucks

> A modern, responsive React application for browsing, filtering, and booking travel campers. Built with Vite and Redux Toolkit, this project provides a dynamic catalog with filters, camper details, user reviews, and booking functionality.

![React](https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react)
![Redux](https://img.shields.io/badge/-Redux_Toolkit-764ABC?style=for-the-badge&logo=redux)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite)
![MUI](https://img.shields.io/badge/-MUI-007FFF?style=for-the-badge&logo=mui)
![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=for-the-badge&logo=axios)

---

## 🧭 Routes

- `/` — Home page with a promotional banner and call-to-action
- `/catalog` — Camper catalog with filters and pagination
- `/catalog/:id` — Detailed camper page with tabs: Features and Reviews

---

## ✨ Features

- Camper catalog with server-side filtering:
  - By location
  - By body type (single-select)
  - By equipment (multi-select): AC, kitchen, bathroom, etc.
- Camper detail page:
  - Tabs for features and user reviews
  - Photo gallery
  - Booking form with success notification
- Add to Favorites:
  - Stores favorite campers in Redux and persists them in localStorage
- Pagination with “Load More” button
- Star-based review system (1–5 stars)
- Price formatting with decimals (e.g., `8000.00`)
- Responsive design (optional)

---

## ⚙️ Technologies Used

- React 19 + Vite
- Redux Toolkit & Redux Persist
- React Router DOM
- Axios
- MUI (Material UI)
- Formik + Yup (for booking form)
- DayJS (date manipulation)

---

## 📁 Project Structure

```
src/
├── assets/
├── components/
├── features/
│   ├── catalog/
│   ├── camper/
│   ├── filters/
│   └── favorites/
├── pages/
├── store/
├── services/
├── hooks/
└── App.jsx
```

---

## 🧰 Scripts

```bash
npm run dev       # Run development server
npm run build     # Build for production
npm run preview   # Preview built app
npm run lint      # Run ESLint
```

---

## 🌐 Deployment

The project is deployed via **Vercel** or **Netlify**.  
Live demo: [https://travel-trucks-seven-sandy.vercel.app/](https://travel-trucks-seven-sandy.vercel.app/)

---

## 🧪 State Management

- Global store holds:
  - List of campers
  - Filter state
  - Favorites list
- New searches reset previous results to maintain clean filtering.

---

## 🔐 Booking Form

- Built with Formik and Yup
- Sends booking request and shows confirmation toast/notification
- Includes date and time selection

---

## 👤 Author

**Vitalii Mieliet** — [@vitalii-mieliet](https://github.com/vitalii-mieliet)  
Frontend Developer

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material UI](https://mui.com/)
- [Formik](https://formik.org/)
