# The Wild Oasis Dashboard

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Web Pages](#web-pages)
- [Code Structure](#code-structure)
- [Power Up Instructions (developers)](#power-up-instructions-developers)
- [Website Link](#website-link)

## Introduction

The Wild Oasis Dashboard is a fully modern, responsive web application built with React 19, Tailwind CSS, and Vite. It serves as a comprehensive management tool for handling bookings, cabins, and guests, featuring a clean and intuitive user interface. The app includes advanced features like dark/light mode, data visualization, and seamless integration with Supabase for backend functionality. Designed with clean code architecture, the project ensures modularity, reusability, and maintainability

## Features

**Modern UI/UX**: Built with Tailwind CSS for a fully responsive and visually appealing design.

**Dark/Light Mode**: Enhanced user experience with customizable themes.

**State Management**: Utilizes React Query for efficient data fetching and caching.

**Form Handling**: Powered by React Hook Form and validated with Zod for robust and scalable forms.

**Authentication**: Secure user authentication and session management with Supabase.

**Data Visualization**: Interactive charts and graphs using Recharts.

**Routing**: Seamless navigation with React Router DOM.

**Notifications**: Real-time feedback with React Hot Toast.

**Type Safety**: Built with TypeScript for a type-safe development experience.

**Code Quality**: Linting and formatting with ESLint and Prettier for clean and consistent code.

## Web Pages

**Dashboard**: Overview of bookings, revenue, and occupancy rates.

**Bookings**: Manage and view all bookings with filtering and sorting options.

**Cabins**: Add, edit, and manage cabin details.

**Guests**: View and manage guest information.

**Check in/out**: Check users in and checkout

**Users**: Create and edit users for the dashboard

**Settings**: Customize app preferences.

## Code Structure

```sh
Route-Rinal-Project/
	├── public/
	└── src/
		├── components/
		├── constants/
		├── contexts/
		├── db/
		├── features/
		├── hooks/
		├── layouts/
		├── lib/
		├── pages/
		├── types/
		├── utils/
		├── index.css
		├── App.tsx
		└── main.tsx
```

## Power Up Instructions (developers)

1. Clone the repository:

   ```sh
   git clone <repository-url>
   ```

2. Navigate to the frontend directory and install dependencies

   ```sh
   cd the-wild-oasis-dashboard && yarn
   ```

3. Set Up Environment Variables

   Create a `.env` file in the root directory with the required environment variables (API URL, authentication keys, etc.).

4. Start the frontend development server:

   ```sh
   yarn dev
   ```

## Website Link

Or you just can vist the website and try it your self [here](https://the-wild-oasis-dashboard-ten.vercel.app/)
