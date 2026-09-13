# Dev Stack — Build Your Ideal Development Stack

Dev Stack is a React-based web application that helps developers explore, compare, and select technologies for their next project. Users can browse through frontend, backend, database, and tooling options, add them to a personal stack, and see their selected stack in real time.

🌐 **Live Demo:** [https://devstack-b14-pp.netlify.app/](https://devstack-b14-pp.netlify.app/)

---

## ✨ Features

1. **Interactive Technology Cards with Active State**
   Each technology card displays a logo, name, category, description, difficulty, rating, and badge. Clicking "Add to Stack" highlights the card with a pink theme, shadow, and a checkmark. Cards also have a smooth hover effect that lifts them up with a larger shadow.

2. **Your Stack Sidebar with Real-Time Updates**
   A sticky sidebar shows all technologies added to the user's stack. Users can remove individual items or clear the entire stack with the "Remove All" button. Toast notifications confirm every action (add, remove, clear).

3. **Fully Responsive Mobile Experience**
   The layout adapts to all screen sizes with a mobile hamburger menu, a responsive hero section, and a scroll-to-top button that appears when the user scrolls down the page.

---

## ⚙️ Technologies Used

- **React.js** — Component-based UI
- **Tailwind CSS** — Utility-first styling
- **JavaScript (ES6+)** — Core language
- **React-Toastify** — Toast notifications
- **JSON** — Technology data source
- **Vite** — Build tool

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax that looks like HTML but works inside JavaScript. It is used in React because it makes writing and reading UI code much easier. Without JSX, we would have to use `React.createElement()` for every element, which is hard to read and write.

### 2. What is the difference between props and state?
**Props** are data passed from a parent component to a child component. They are read-only and cannot be changed by the child. **State** is data managed inside a component itself. It can be changed using `useState`, and when it changes, the component re-renders.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` lets a component store and update data. When the state changes, React re-renders the component to reflect the new value.
In this project, I used `useState` in:
- `App` — to store the `stack` of selected technologies.
- `Navbar` — to track whether the mobile menu is open.
- `ScrollToTop` — to show or hide the scroll button.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after a component renders, such as fetching data, setting timers, or adding event listeners.
In this project, I used `useEffect` inside `TechnologyGrid` to load the data from `technologies.json`. I also used a short `setTimeout` so that a loading spinner would appear briefly, simulating a real network request.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the `key` prop to identify which items in a list have changed, been added, or been removed. Without a unique key, React has to re-render the entire list, which is slower and can cause bugs. In this project, I used `key={tech.id}` when mapping over the technology list.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition.
In this project, I used conditional rendering in `YourStack`:
- When `count === 0`, it shows the message *"Your stack is empty. Add technologies to get started."*
- When `count > 0`, it shows the list of selected technologies.
I also used it in `TechnologyCard` to switch between "Add to Stack" and "✓ Added to Stack".

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent → Child:** Data is passed through **props**. For example, `App` passes the `onAdd` function down to `TechnologyGrid`, which passes it further to `TechnologyCard`.
- **Child → Parent:** A child cannot directly change the parent's state. Instead, the parent passes a callback function (like `onAdd`) as a prop. When the child wants to send data back, it calls that function with the data. For example, `TechnologyCard` calls `onAdd(tech)` when the button is clicked.

---

## ❓ Common FAQ

**1. Where can we deploy the site?**
Anywhere you like — Netlify, Vercel, Cloudflare Pages, or any other host. There is no fixed platform.

**2. Do we have to use TypeScript?**
No. You can use TypeScript or JavaScript. This project is built entirely in plain JavaScript.

**3. Can we change the title, logo, and colors?**
Yes. The title, logo, and color scheme are all yours to change — just keep them relevant to the project. Avoid random colors or unrelated titles/logos.

**4. Where do we get the technology logos/icons?**
You can use image URLs from Google or anywhere you like. A good source with clean, ready-to-use tech logos is [https://techicons.dev/](https://techicons.dev/) — copy the icon URL from there and put it in your JSON data.

---

## 🚀 How to Run This Project

```bash
# Clone the repository
git clone https://github.com/prerana0023/Assignment-DEVSTACK.git

# Install dependencies
npm install

# Run the development server
npm run dev