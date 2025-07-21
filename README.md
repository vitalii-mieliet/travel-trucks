# 🚐 TravelTrucks

**TravelTrucks** is a responsive catalog web application that allows users to browse, filter, and book travel vehicles with ease. The app includes backend-powered filtering, detailed vehicle views, persistent favorites, and a seamless booking experience.

---

## ✨ Features

- 🔎 **Catalog Navigation** — quick access via **"View Now"** button from the homepage
- 🧰 **Server-side Filtering**:
  - 🔍 By **location** (text input)
  - 🚗 By **body type** (single selection)
  - 🧩 By **features**: air conditioner, kitchen, and more (multiple selection)
  - ⚙️ By **transmission type** and **fuel type**
- ❤️ **Favorites** — persistent even after refresh
- 📄 **Details Page** — via **"Show More"** button
- 📥 **Load More** — loads additional listings with active filters
- ⭐ **Reviews** — 5-star rating system per vehicle
- 📅 **Booking Form** — with success notification on submit

---

## 🛠 Tech Stack

| Category         | Tech                          |
| ---------------- | ----------------------------- |
| Frontend         | React 19                      |
| State Mgmt       | Redux Toolkit + Redux Persist |
| Routing          | React Router v7               |
| Forms/Validation | Formik + Yup                  |
| HTTP Client      | Axios                         |
| UI Framework     | MUI (Material UI)             |
| Build Tool       | Vite                          |
| Linting          | ESLint                        |

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/vitalii-mieliet/travel-trucks.git
cd travel-trucks

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Build for production
npm run build
```

## 🚀 Usage

1. 🌐 **Open the app** in your browser at:  
   [`http://localhost:5173`](http://localhost:5173)

2. 🧭 **Use filters** in the sidebar to find the right vehicle:

   - Location
   - Body type
   - Equipment & features
   - Transmission & fuel type

3. 📄 **View detailed pages** for each camper by clicking **"Show More"**.

4. ❤️ **Add or remove favorites** using the heart icon — they are saved in local storage.

5. 📅 **Fill out the booking form** on the details page to make a reservation.  
   ✅ A success notification appears upon submission.

---

## 👤 Author

- **Vitalii Mieliet**  
  🔗 [GitHub Profile](https://github.com/vitalii-mieliet)
