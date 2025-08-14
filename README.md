# User Directory Viewer

A small React + TypeScript application built for the technical test.  
Displays a list of users and individual user profiles, using PrimeReact for UI, React Router v7 for routing, and Storybook for component previews.

---

## Features

- **User List** page with PrimeReact `DataTable`
- **User Detail** page with PrimeReact `Card`
- **Routing** via React Router v7 (`/users` and `/users/:id`)
- **Storybook** stories for `UserList` and `UserCard` with full mock routing
- **Loading states** for better UX
- **Responsive layout** with PrimeFlex

---

## 📦 Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router v7](https://reactrouter.com/)
- [Bootstrapped with Vite + React Router V7 Template](https://vite.dev/)
- [PrimeReact](https://primereact.org/)
- [PrimeFlex](https://primeflex.org/)
- [Storybook](https://storybook.js.org/)

---

## Installation & Start

### 1. Clone the repo
```
git clone https://github.com/AJCristi/Adaca-TT-FE.git
```

### 2. Install dependencies
```
npm install
```

### 3. Install dependencies
```
npm run dev
```
Then visit http://localhost:5173

## Storybook
```
npm run storybook
```
Opens Storybook UI at http://localhost:6006

Storybook contains:
- UserTable — Table of mock users
- UserCard — Mock user profile
- Full navigation simulation using storybook-addon-remix-react-router

## Build
```
npm run build
```
Outputs compiled files to `/dist`

## Time Spent
~4 hours total:
- 1.5h Core features (list, detail, routing)
- 1.5h Storybook setup & mock routing
- 1h Debugging and styling (PrimeReact + Primeflex)

## Decisions & Trade-offs
- Left most of Vite + react router v7 in place in favor of building project
- Storybook mock routing, I used storybook-addon-remix-react-router to allow full navigation simulation without backend calls. 
- Data fetching, I thought about using axios but kept simple fetch() calls for simple calls; in production, would wrap in a custom hook with React Query for caching.
- Focused more on functionality, barebones design
