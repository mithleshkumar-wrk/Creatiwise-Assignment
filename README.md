# Creatiwise

Creatiwise is a modern portfolio website built with React, Vite, and Tailwind CSS. This project demonstrates a modular approach to building scalable React applications, with a focus on clean code, reusable components, and a clear folder structure.

## Why This Structure?

- **components/**: Contains all reusable UI components (e.g., Header, Footer, Card, BlogCard, ExperienceCard, TestimonialSlider). This makes it easy to maintain and reuse code across different pages.
- **pages/**: Each file in this folder represents a route/page in the application (e.g., Home, About, Contact, Project, PageNotFound). This separation keeps page logic organized and easy to manage.
- **assets/**: Stores all static images and icons used throughout the site.
- **App.jsx**: The main layout component that includes the header, footer, and an outlet for rendering pages.
- **main.jsx**: Entry point for the React app, sets up routing using React Router.

## How to Run This Project

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd Creatiwise
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

4. **Build for production:**
   ```sh
   npm run build
   ```

5. **Preview the production build:**
   ```sh
   npm run preview
   ```

## How to Close/Remove This Repo

If you want to remove this project from your local machine:

- On Windows: Right-click the folder and select "Delete".
- On macOS/Linux: Run `rm -rf Creatiwise` in your terminal.

If you want to remove the repository from GitHub, go to the repository settings on GitHub and choose "Delete this repository" at the bottom (be careful, this is irreversible).

---

## Original Vite + React Template Info

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your

